import { Teacher } from "../../types/member/member.type";
import { Response } from "../../types/util/response.type";

export interface MemberRepository {
  getMyMember(): Promise<GetMyMemberResponse>;
}

export interface GetMyMemberResponse extends Response {
  data: Teacher;
}
