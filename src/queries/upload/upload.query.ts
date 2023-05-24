import { useMutation } from "react-query";
import UploadRepositoryImpl from "../../repositories/UploadRepository/UploadRepositoryImpl";

export const usePostUploadMutation = () => {
  const mutation = useMutation(UploadRepositoryImpl.postUpload);
  return mutation;
};
