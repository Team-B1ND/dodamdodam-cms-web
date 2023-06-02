import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import {
  GetRecruitParam,
  GetRecruitResponse,
  GetRecruitsResponse,
} from "../../repositories/RecruitRepository/RecruitRepository";
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

export const useGetRecruitQuery = (
  { id }: GetRecruitParam,
  options?: UseQueryOptions<
    GetRecruitResponse,
    AxiosError,
    GetRecruitResponse,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.recruit.getRecruit(id),
    () => RecruitRepositoryImpl.getRecruit({ id }),
    {
      enabled: !!id,
      ...options,
      staleTime: Infinity,
    }
  );

export const usePostRecruitMutation = () => {
  const mutation = useMutation(RecruitRepositoryImpl.postRecruit);
  return mutation;
};

export const usePatchRecruitMutation = () => {
  const mutation = useMutation(RecruitRepositoryImpl.patchRecruit);
  return mutation;
};
