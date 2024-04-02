import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "../../queries/queryKey";
import { useDeleteRecruitMutation } from "../../queries/recruit/recruit.query";

const useDeleteRecruit = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const deleteRecruitMutation = useDeleteRecruitMutation();

  const onDelete = (recruitId: number) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    deleteRecruitMutation.mutate(
      { id: recruitId },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("삭제되었습니다.");
          queryClient.invalidateQueries([QUERY_KEYS.recruit.getRecruitList]);
          navigate("/recruit");
        },
        onError: () => {
          B1ndToast.showError("에러가 발생하였습니다");
        },
      }
    );
  };

  return { onDelete };
};

export default useDeleteRecruit;
