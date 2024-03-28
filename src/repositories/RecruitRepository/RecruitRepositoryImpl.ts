import { customAxios } from "../../lib/axios/customAxios";
import {
  DeleteRecruitParam,
  GetRecruitParam,
  // GetRecruitResponse,
  GetRecruitResponese,
  // PatchRecruitParam,
  PostRecruitParam,
  RecruitRepository,
} from "./RecruitRepository";

class RecruitRepositoryImpl implements RecruitRepository {
  public async getRecruits(page: number): Promise<GetRecruitResponese> {
    const { data } = await customAxios.get(`/recruit?page=${page}`);
    return data;
  }

  public async getRecruit({
    id,
  }: GetRecruitParam): Promise<GetRecruitResponese> {
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
