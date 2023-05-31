import { Response } from "../../types/util/response.type";

export interface TokenRepository {
  postRefresh({ token }: PostRefreshParam): Promise<PostRefreshResponse>;
}

export interface PostRefreshParam {
  token: string;
}

export interface PostRefreshResponse extends Response {
  data: string;
}
