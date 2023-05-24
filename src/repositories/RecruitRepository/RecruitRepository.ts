import { Recruit } from "../../types/recruit/recruit.type";

export interface RecruitRepository {
  postRecruit(params: PostRecruitParam): Promise<void>;
}

export interface PostRecruitParam extends Omit<Recruit, "Omit"> {}
