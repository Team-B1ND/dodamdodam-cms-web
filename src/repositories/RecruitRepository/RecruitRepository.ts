import { Response } from "../../types/util/response.type";

export interface RecruitRepository {
  getRecruitList(page: number, size: number): Promise<GetRecruitListResponese>;

  getRecruit({ id }: RecruitIdParam): Promise<GetRecruitResponese>;

  postRecruit(params: PostRecruitParam): Promise<void>;

  patchRecruit(params: PostRecruitParam, id: number): Promise<void>;

  deleteRecruit({ id }: RecruitIdParam): Promise<void>;
}

export interface GetRecruitListResponese extends Response {
  data: {
    recruitList: [
      {
        id: number;
        writer: string;
        name: string;
        location: string;
        duty: string;
        etc: string;
        personnel: number;
        image: string;
      }
    ];
    nextPage: null;
  };
}

export interface GetRecruitResponese extends Response {
  data: {
    writer: string;
    name: string;
    location: string;
    duty: string;
    etc: string;
    personnel: number;
    image: string;
    pdfs: RecruitPdfParam[];
  };
}

export interface RecruitIdParam {
  id: number;
}

export interface PostRecruitParam {
  name: string;
  location: string;
  duty: string;
  etc: string;
  personnel: string | number;
  image: string;
  pdfs: RecruitPdfParam[];
}

export interface RecruitPdfParam {
  url: string;
  name: string;
}
