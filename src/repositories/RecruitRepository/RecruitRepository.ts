import { Recruit } from "../../types/recruit/recruit.type";
import { Response } from "../../types/util/response.type";

export interface RecruitRepository {
  getRecruits(): Promise<GetRecruitsResponse>;

  getRecruit({ id }: GetRecruitParam): Promise<GetRecruitResponse>;

  postRecruit(params: PostRecruitParam): Promise<void>;

  patchRecruit(params: PatchRecruitParam): Promise<void>;
}

export interface GetRecruitsResponse extends Response {
  data: Recruit[];
}

export interface GetRecruitParam {
  id: number;
}

export interface GetRecruitResponse extends Response {
  data: Recruit;
}

export interface PostRecruitParam
  extends Pick<Recruit, "image" | "etc" | "companyName"> {}

export interface PatchRecruitParam
  extends Pick<Recruit, "image" | "etc" | "companyName" | "id"> {}
