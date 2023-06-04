import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { usePostRecruitMutation } from "../../queries/recruit/recruit.query";
import { recruitImageAtom } from "../../store/recruitWrite/recuritWriteAtom";

const useWriteRecruit = () => {
  const [recruitImage, setRecruitImage] = useRecoilState(recruitImageAtom);
  const [textContent, setTextContent] = useState({
    etc: "",
    companyName: "",
  });

  const postRecruitMutation = usePostRecruitMutation();

  const onChangeContent = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setTextContent((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitRecurit = () => {
    if (recruitImage === "") {
      B1ndToast.showInfo("이미지를 추가해주세요.");
      return;
    }

    const { companyName, etc } = textContent;

    if (companyName === "") {
      B1ndToast.showInfo("회사명을 추가해주세요.");
      return;
    }

    postRecruitMutation.mutate(
      {
        image: recruitImage,
        etc,
        companyName,
      },
      {
        onSuccess: () => {
          setRecruitImage("");
          setTextContent({ etc: "", companyName: "" });
          B1ndToast.showSuccess("작성하였습니다.");
        },
        onError: () => {
          B1ndToast.showError("에러가 발생하였습니다");
        },
      }
    );
  };

  return { textContent, onChangeContent, onSubmitRecurit };
};

export default useWriteRecruit;
