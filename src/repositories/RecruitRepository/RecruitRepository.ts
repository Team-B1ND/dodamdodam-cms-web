import { Recruit } from "../../types/recruit/recruit.type";
import { Response } from "../../types/util/response.type";

export interface RecruitRepository {
  getRecruits(page: number): Promise<GetRecruitsResponse>;

  getRecruit({ id }: GetRecruitParam): Promise<GetRecruitResponse>;

  postRecruit(params: PostRecruitParam): Promise<void>;

  // patchRecruit(params: PatchRecruitParam): Promise<void>;

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

export interface PostRecruitParam {
  name: string;
  location: string;
  duty: string;
  etc: string;
  personnel: number;
  image: string;
  pdfs: RecruitPdfParam[];
}

export interface RecruitPdfParam {
  url: string;
  name: string;
}
// extends Pick<Recruit, "image" | "etc" | "companyName"> {}

// export interface PatchRecruitParam
//   extends Pick<Recruit, "image" | "etc" | "companyName" | "id"> {}

export interface DeleteRecruitParam {
  id: number;
}
