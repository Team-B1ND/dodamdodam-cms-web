import { customAxios } from "../../lib/axios/customAxios";
import {
  GetRecruitParam,
  GetRecruitResponse,
  GetRecruitsResponse,
  PatchRecruitParam,
  PostRecruitParam,
  RecruitRepository,
} from "./RecruitRepository";

class RecruitRepositoryImpl implements RecruitRepository {
  public async getRecruits(): Promise<GetRecruitsResponse> {
    const { data } = await customAxios.get("/recruit/all");
    return data;
  }

  public async getRecruit({
    id,
  }: GetRecruitParam): Promise<GetRecruitResponse> {
    const { data } = await customAxios.get(`/recruit/${id}`);
    return data;
  }

  public async postRecruit(params: PostRecruitParam): Promise<void> {
    await customAxios.post("/recruit", params);
  }

  public async patchRecruit(params: PatchRecruitParam): Promise<void> {
    await customAxios.patch("/recruit", params);
  }
}

export default new RecruitRepositoryImpl();
