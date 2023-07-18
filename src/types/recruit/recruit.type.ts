import { Member } from "../member/member.type";

export interface Recruit {
  readonly id: number;
  writer: Member;
  image: string;
  etc: string;
  viewCount: number;
  createdDate: string;
  companyName: string;
}

export interface RecruitFile {
  readonly id: number;
  pdfUrl: string;
}
