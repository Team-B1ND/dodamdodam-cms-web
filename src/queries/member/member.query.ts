import { useQuery } from "react-query";
import MemberRepositoryImpl from "../../repositories/MemberRepoistory/MemberRepositoryImpl";
import { QUERY_KEYS } from "../queryKey";

export const useGetMyMemberQuery = () =>
  useQuery([QUERY_KEYS.member.getMyMember], MemberRepositoryImpl.getMyMember);
