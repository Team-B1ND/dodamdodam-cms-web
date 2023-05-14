import { B1ndToast } from "@b1nd/b1nd-toastify";
import axios, { AxiosError } from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import TokenRepositoryImpl from "../../repositories/TokenRepository/TokenRepositoryImpl";
import Cookie from "../storage/Cookie";
import Token from "../token/Token";

export const customAxios = axios.create({
  baseURL: config.DODAM_SERVER_V6,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Cookie.get(ACCESS_TOKEN_KEY)}`,
  },
});

const responseErrorInterceptor = async (error: AxiosError) => {
  if (error.response) {
    const {
      response: { status },
    } = error;

    const usingAccessToken = Token.get(ACCESS_TOKEN_KEY);
    const usingRefreshToken = Token.get(REFRESH_TOKEN_KEY);

    if (
      usingAccessToken !== undefined &&
      usingRefreshToken !== undefined &&
      status === 401
    ) {
      try {
        const { data: newAccessToken } = await TokenRepositoryImpl.postRefresh({
          refreshToken: usingRefreshToken,
        });

        Token.set(ACCESS_TOKEN_KEY, newAccessToken);
        customAxios.defaults.headers.common[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${newAccessToken}`;
      } catch (error) {
        B1ndToast.showError("세션이 만료 되었습니다.");
        window.location.href = "/teacher/sign";
      }
    }
  }

  return Promise.reject(error);
};

customAxios.interceptors.response.use(
  (config) => config,
  responseErrorInterceptor
);
