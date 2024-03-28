import { Recruit } from "../../types/recruit/recruit.type";
import { Response } from "../../types/util/response.type";

export interface RecruitRepository {
  getRecruits(page: number): Promise<GetRecruitResponese>;

  getRecruit({ id }: GetRecruitParam): Promise<GetRecruitResponese>;

  postRecruit(params: PostRecruitParam): Promise<void>;

  // patchRecruit(params: PatchRecruitParam): Promise<void>;

  deleteRecruit({ id }: DeleteRecruitParam): Promise<void>;
}

export interface GetRecruitResponese extends Response {
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

// export interface GetRecruitsResponse extends Response {
// data: Recruit[];
// data: Recruit[];
// nextPage: null;
// data: {
//   recruit: [
//     {
//       id: 3;
//       writer: "관리자";
//       name: "test222";
//       location: "서울시 동작구222";
//       duty: "백엔드 개발222";
//       etc: "backend develop";
//       personnel: 4;
//       image: "https://dodam.kr.object.ncloudstorage.com/dodam/e105c6b1-cb8e-487a-b61f-1f7d18d40f46%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202024-03-11%20143651.png";
//     }
//   ];
//   nextPage: null; //or Integer
// };
// }

export interface GetRecruitParam {
  id: number;
}

// export interface GetRecruitResponse extends Response {
//   data: Recruit;
// }

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
