import axios from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import Cookie from "../storage/Cookie";
import { requestInterceptor } from "./requestInterceptor";
import { responseErrorInterceptor } from "./responseInterceptor";
import config from "../../config/config.json";

export const customAxios = axios.create({
  baseURL: config.DODAM_SERVER_V6,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Cookie.get(ACCESS_TOKEN_KEY)}`,
    "Access-Control-Allow-Origin": "*",
  },
});

customAxios.interceptors.request.use(requestInterceptor);

customAxios.interceptors.response.use(
  (config) => config,
  responseErrorInterceptor
);
