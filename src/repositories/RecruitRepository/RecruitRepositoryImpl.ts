import { customAxios } from "../../lib/axios/customAxios";
import {
  GetRecruitsResponse,
  PostRecruitParam,
  RecruitRepository,
} from "./RecruitRepository";

class RecruitRepositoryImpl implements RecruitRepository {
  public async getRecruits(): Promise<GetRecruitsResponse> {
    const { data } = await customAxios.get("/recruit/all");
    return data;
  }
  public async postRecruit(params: PostRecruitParam): Promise<void> {
    await customAxios.post("/recruit", params);
  }
}

export default new RecruitRepositoryImpl();
