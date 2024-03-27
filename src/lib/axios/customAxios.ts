import axios from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import Cookie from "../storage/Cookie";
import { requestInterceptor } from "./requestInterceptor";
import { responseErrorInterceptor } from "./responseInterceptor";

export const customAxios = axios.create({
  baseURL: config.DODAM_TEST_SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Cookie.get(ACCESS_TOKEN_KEY)}`,
  },
});

customAxios.interceptors.request.use(requestInterceptor);

customAxios.interceptors.response.use(
  (config) => config,
  responseErrorInterceptor
);
