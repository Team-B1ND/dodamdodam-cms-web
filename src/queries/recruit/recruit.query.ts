import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import {
  GetRecruitParam,
  // GetRecruitResponse,
  GetRecruitResponese,
  GetRecruitListResponese,
} from "../../repositories/RecruitRepository/RecruitRepository";
import RecruitRepositoryImpl from "../../repositories/RecruitRepository/RecruitRepositoryImpl";
import { QUERY_KEYS } from "../queryKey";

export const useGetRecruitsQuery = (
  page: number,
  options?: UseQueryOptions<
    GetRecruitListResponese,
    AxiosError,
    GetRecruitListResponese,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.recruit.getRecruits(page),
    () => RecruitRepositoryImpl.getRecruitList(page),
    { ...options }
  );

export const useGetRecruitQuery = (
  { id }: GetRecruitParam,
  options?: UseQueryOptions<
    GetRecruitResponese,
    AxiosError,
    GetRecruitResponese,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.recruit.getRecruit(id),
    () => RecruitRepositoryImpl.getRecruit({ id }),
    {
      enabled: !!id,
      ...options,
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

export const useDeleteRecruitMutation = () => {
  const mutation = useMutation(RecruitRepositoryImpl.deleteRecruit);
  return mutation;
};
