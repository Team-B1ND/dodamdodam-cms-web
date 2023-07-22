import { Recruit, RecruitFile } from "../../types/recruit/recruit.type";
import { Response } from "../../types/util/response.type";

export interface RecruitRepository {
  getRecruits(): Promise<GetRecruitsResponse>;

  getRecruit({ id }: GetRecruitParam): Promise<GetRecruitResponse>;

  getRecruitFileNames({
    id,
  }: GetRecruitFileNamesParam): Promise<GetRecruitFileNamesResponse>;

  postRecruit(params: PostRecruitParam): Promise<void>;

  patchRecruit(params: PatchRecruitParam): Promise<void>;

  deleteRecruit({ id }: DeleteRecruitParam): Promise<void>;
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

export interface GetRecruitFileNamesResponse extends Response {
  data: RecruitFile[];
}

export interface GetRecruitFileNamesParam {
  id: number;
}

export interface PostRecruitParam
  extends Pick<Recruit, "image" | "etc" | "companyName"> {
  pdf: {
    url: string;
    name: string;
  }[];
}

export interface PatchRecruitParam
  extends Pick<Recruit, "image" | "etc" | "companyName" | "id"> {
  pdf: {
    url: string;
    name: string;
  }[];
}

export interface DeleteRecruitParam {
  id: number;
}
