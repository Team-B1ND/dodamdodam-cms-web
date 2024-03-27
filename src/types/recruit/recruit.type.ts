import { Member } from "../member/member.type";

export interface Recruit {
  // readonly id: number;
  // writer: Member;
  // image: string;
  // etc: string;
  // viewCount: number;
  // createdDate: string;
  // companyName: string;
  id: number;
  writer: string;
  name: string;
  location: string;
  duty: string;
  etc: string;
  personnel: number;
}
