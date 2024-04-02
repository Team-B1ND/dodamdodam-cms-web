import { customAxios } from "../../lib/axios/customAxios";
import {
  RecruitIdParam,
  GetRecruitResponese,
  GetRecruitListResponese,
  PostRecruitParam,
  RecruitRepository,
} from "./RecruitRepository";

class RecruitRepositoryImpl implements RecruitRepository {
  public async getRecruitList(page: number): Promise<GetRecruitListResponese> {
    const { data } = await customAxios.get(`/recruit?page=${page}`);
    return data;
  }

  public async getRecruit({
    id,
  }: RecruitIdParam): Promise<GetRecruitResponese> {
    const { data } = await customAxios.get(`/recruit/${id}`);
    return data;
  }

  public async postRecruit(params: PostRecruitParam): Promise<void> {
    await customAxios.post("/recruit", params);
  }

  public async patchRecruit(
    params: PostRecruitParam,
    id: number
  ): Promise<void> {
    await customAxios.patch(`/recruit/${id}`, params);
  }

  public async deleteRecruit({ id }: RecruitIdParam): Promise<void> {
    await customAxios.delete(`/recruit/${id}`);
  }
}

export default new RecruitRepositoryImpl();
