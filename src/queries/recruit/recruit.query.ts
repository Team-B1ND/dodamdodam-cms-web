import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import {
  RecruitIdParam,
  GetRecruitResponese,
  GetRecruitListResponese,
  PostRecruitParam,
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
    QUERY_KEYS.recruit.getRecruitList(page),
    () => RecruitRepositoryImpl.getRecruitList(page),
    { ...options }
  );

export const useGetRecruitQuery = (
  { id }: RecruitIdParam,
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
  const mutation = useMutation(
    (params: { PatchData: PostRecruitParam; id: number }) =>
      RecruitRepositoryImpl.patchRecruit(params.PatchData, params.id)
  );
  return mutation;
};

export const useDeleteRecruitMutation = () => {
  const mutation = useMutation(RecruitRepositoryImpl.deleteRecruit);
  return mutation;
};
