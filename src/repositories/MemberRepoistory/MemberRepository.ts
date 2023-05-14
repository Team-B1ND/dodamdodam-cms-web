import { Teacher } from "../../types/member/member.type";
import { Response } from "../../types/util/response.type";

export interface MemberRepository {
  getMyMember(): Promise<getMyMemberResponse>;
}

export interface getMyMemberResponse extends Response {
  data: Teacher;
}
