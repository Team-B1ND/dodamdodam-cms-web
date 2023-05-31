import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import { GetRecruitsResponse } from "../../repositories/RecruitRepository/RecruitRepository";
import RecruitRepositoryImpl from "../../repositories/RecruitRepository/RecruitRepositoryImpl";
import { QUERY_KEYS } from "../queryKey";

export const useGetRecruitsQuery = (
  options?: UseQueryOptions<
    GetRecruitsResponse,
    AxiosError,
    GetRecruitsResponse,
    [string]
  >
) =>
  useQuery(
    [QUERY_KEYS.recruit.getRecruits],
    RecruitRepositoryImpl.getRecruits,
    { ...options }
  );

export const usePostRecruitMutation = () => {
  const mutation = useMutation(RecruitRepositoryImpl.postRecruit);
  return mutation;
};
