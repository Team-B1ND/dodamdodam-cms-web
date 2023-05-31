import { Recruit } from "../../types/recruit/recruit.type";
import { Response } from "../../types/util/response.type";

export interface RecruitRepository {
  getRecruits(): Promise<GetRecruitsResponse>;

  postRecruit(params: PostRecruitParam): Promise<void>;
}

export interface GetRecruitsResponse extends Response {
  data: Recruit[];
}

export interface PostRecruitParam
  extends Pick<Recruit, "image" | "etc" | "companyName"> {}
