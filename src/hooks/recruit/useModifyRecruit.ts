import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { QUERY_KEYS } from "../../queries/queryKey";
import {
  useGetRecruitQuery,
  usePatchRecruitMutation,
} from "../../queries/recruit/recruit.query";
import { recruitPdfAtom } from "../../store/recruitWrite/recuritWriteAtom";
import { PostRecruitParam } from "../../repositories/RecruitRepository/RecruitRepository";

interface Props {
  recruitId: number | undefined;
}

const useModifyRecruit = ({ recruitId }: Props) => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const patchRecruitMutation = usePatchRecruitMutation();

  const [prevModifyRecruitData, setPrevModifyRecruitData] = useState({
    name: "",
    location: "",
    duty: "",
    etc: "",
    personnel: 0,
    image: "",
    pdfs: [],
  });

  const [modifyRecruitData, setModifyRecruitData] = useState<PostRecruitParam>({
    name: "",
    location: "",
    duty: "",
    etc: "",
    personnel: 0,
    image: "",
    pdfs: [],
  });

  const [recruitImage, setRecruitImage] = useRecoilState(recruitPdfAtom);

  const { data: serverRecruitData } = useGetRecruitQuery({
    id: Number(recruitId),
  });

  useEffect(() => {
    if (recruitId && serverRecruitData) {
      const { image, etc, name, duty, location, personnel, pdfs } =
        serverRecruitData.data;
      setPrevModifyRecruitData({
        image,
        etc,
        name,
        duty,
        location,
        personnel,
        pdfs: [],
      });
      setModifyRecruitData({
        image,
        etc,
        name,
        duty,
        location,
        personnel,
        pdfs: [],
      });
      setRecruitImage(serverRecruitData.data.pdfs);
    }
  }, [serverRecruitData, setRecruitImage, recruitId]);

  const onChangeModifyContent = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setModifyRecruitData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitModifyContent = () => {
    if (
      Object.entries(prevModifyRecruitData).toString() ===
      Object.entries(modifyRecruitData).toString()
    ) {
      B1ndToast.showInfo("변경된 사항이 없습니다.");
      return;
    }

    // if (recruitImage === "") {
    //   B1ndToast.showInfo("이미지를 추가해주세요.");
    //   return;
    // }

    // if (modifyRecruitData.companyName === "") {
    //   B1ndToast.showInfo("회사명을 추가해주세요.");
    //   return;
    // }

    patchRecruitMutation.mutate(
      {
        ...modifyRecruitData,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("수정하였습니다.");
          queryClient.invalidateQueries(
            QUERY_KEYS.recruit.getRecruit(recruitId!)
          );
          //   queryClient.invalidateQueries(QUERY_KEYS.recruit.getRecruits);
          navigate(`/recruit/${recruitId}`);
        },
        onError: () => {
          B1ndToast.showError("에러가 발생하였습니다");
        },
      }
    );
  };

  return {
    modifyRecruitData,
    onChangeModifyContent,
    onSubmitModifyContent,
    setModifyRecruitData,
  };
};

export default useModifyRecruit;
