import { customAxios } from "../../lib/axios/customAxios";
import {
  DeleteRecruitParam,
  GetRecruitParam,
  GetRecruitResponse,
  GetRecruitsResponse,
  // PatchRecruitParam,
  PostRecruitParam,
  RecruitRepository,
} from "./RecruitRepository";

class RecruitRepositoryImpl implements RecruitRepository {
  public async getRecruits(page: number): Promise<GetRecruitsResponse> {
    const { data } = await customAxios.get(`/recruit?page=${page}`);
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

  // public async patchRecruit(params: PatchRecruitParam): Promise<void> {
  //   await customAxios.patch("/recruit", params);
  // }

  public async deleteRecruit({ id }: DeleteRecruitParam): Promise<void> {
    await customAxios.delete(`/recruit/${id}`);
  }
}

export default new RecruitRepositoryImpl();
