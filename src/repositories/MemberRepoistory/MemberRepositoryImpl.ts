import { customAxios } from "../../lib/axios/customAxios";
import { GetMyMemberResponse, MemberRepository } from "./MemberRepository";

class MemberRepositoryImpl implements MemberRepository {
  public async getMyMember(): Promise<GetMyMemberResponse> {
    const { data } = await customAxios.get("/member/my");
    return data;
  }
}

export default new MemberRepositoryImpl();
