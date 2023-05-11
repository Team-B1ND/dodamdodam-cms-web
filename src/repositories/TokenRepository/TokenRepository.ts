import { Response } from "../../types/util/response.type";

export interface TokenRepository {
  postRefresh({ refreshToken }: postRefreshParam): Promise<postRefreshResponse>;
}

export interface postRefreshParam {
  refreshToken: string;
}

export interface postRefreshResponse extends Response {
  data: string;
}
