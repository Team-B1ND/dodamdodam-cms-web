import { customAxios } from "../../lib/axios/customAxios";
import { getMyMemberResponse, MemberRepository } from "./MemberRepository";

class MemberRepositoryImpl implements MemberRepository {
  public async getMyMember(): Promise<getMyMemberResponse> {
    const { data } = await customAxios.get("/members/my");
    return data;
  }
}

export default new MemberRepositoryImpl();
