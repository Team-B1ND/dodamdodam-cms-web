import { useQuery } from "react-query";
import MemberRepositoryImpl from "../../repositories/MemberRepoistory/MemberRepositoryImpl";

export const useGetMyMemberQuery = () =>
  useQuery("member/getMyMember", () => MemberRepositoryImpl.getMyMember());
