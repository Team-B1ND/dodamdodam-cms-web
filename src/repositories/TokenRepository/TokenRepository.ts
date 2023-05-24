import { Response } from "../../types/util/response.type";

export interface TokenRepository {
  postRefresh({ refreshToken }: PostRefreshParam): Promise<PostRefreshResponse>;
}

export interface PostRefreshParam {
  refreshToken: string;
}

export interface PostRefreshResponse extends Response {
  data: string;
}
