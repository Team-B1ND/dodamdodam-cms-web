import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import TokenRepositoryImpl from "../../repositories/TokenRepository/TokenRepositoryImpl";
import Token from "../token/Token";
import { customAxios } from "./customAxios";

export const responseErrorInterceptor = async (error: AxiosError) => {
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
          token: usingRefreshToken,
        });

        Token.set(ACCESS_TOKEN_KEY, newAccessToken);
        customAxios.defaults.headers.common[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${newAccessToken}`;
      } catch (error) {
        B1ndToast.showError("세션이 만료 되었습니다.");
        // window.location.href = "/teacher/sign";
      }
    }
  }

  return Promise.reject(error);
};
