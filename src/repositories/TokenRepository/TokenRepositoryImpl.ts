import { customAxios } from "../../lib/axios/customAxios";
import {
  PostRefreshParam,
  PostRefreshResponse,
  TokenRepository,
} from "./TokenRepository";

class TokenRepositoryImpl implements TokenRepository {
  public async postRefresh({
    refreshToken,
  }: PostRefreshParam): Promise<PostRefreshResponse> {
    const { data } = await customAxios.post("/token/refresh", { refreshToken });
    return data;
  }
}

export default new TokenRepositoryImpl();
