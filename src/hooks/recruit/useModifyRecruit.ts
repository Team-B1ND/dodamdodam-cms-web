import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { Params, useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { QUERY_KEYS } from "../../queries/queryKey";
import {
  useGetRecruitQuery,
  usePatchRecruitMutation,
} from "../../queries/recruit/recruit.query";
import {
  ModifyRecrutAtom,
  imgUrlAtom,
  recruitPdfAtom,
} from "../../store/recruitWrite/recuritWriteAtom";
import {
  PostRecruitParam,
  RecruitPdfParam,
} from "../../repositories/RecruitRepository/RecruitRepository";

interface Props {
  recruitId: number | undefined;
}

const useModifyRecruit = ({ recruitId }: Props) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const patchRecruitMutation = usePatchRecruitMutation();

  const [, setPrevModifyRecruitData] = useState({
    name: "",
    location: "",
    duty: "",
    etc: "",
    personnel: 0,
    image: "",
    pdfs: [] as RecruitPdfParam[],
  });

  const [modifyRecruitData, setModifyRecruitData] =
    useRecoilState<PostRecruitParam>(ModifyRecrutAtom);

  const [, setImgUrl] = useRecoilState(imgUrlAtom);

  const [, setRecruitPdf] = useRecoilState(recruitPdfAtom);

  const { data: serverRecruitData } = useGetRecruitQuery({
    id: Number(recruitId),
  });

  useEffect(() => {
    if (recruitId && serverRecruitData) {
      const { image, etc, name, duty, location, personnel, pdfs } =
        serverRecruitData.data;

      console.log(duty);

      setImgUrl(serverRecruitData.data.image);
      setRecruitPdf(serverRecruitData.data.pdfs);
      setPrevModifyRecruitData({
        image,
        etc,
        name,
        duty,
        location,
        personnel,
        pdfs,
      });

      setModifyRecruitData({
        image,
        etc,
        name,
        duty,
        location,
        personnel,
        pdfs,
      });
    }
  }, [serverRecruitData, setImgUrl, recruitId]);

  const onChangeModifyContent = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setModifyRecruitData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitModifyContent = () => {
    if (modifyRecruitData.name === "") {
      B1ndToast.showInfo("회사명을 추가해주세요.");
      return;
    }

    if (modifyRecruitData.location === "") {
      B1ndToast.showInfo("회사 위치를 입력해주세요.");
      return;
    }

    if (modifyRecruitData.duty === "") {
      B1ndToast.showInfo("직무를 선택해주세요.");
      return;
    }

    patchRecruitMutation.mutate(
      {
        PatchData: modifyRecruitData,
        id: recruitId!,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("수정하였습니다.");
          queryClient.invalidateQueries(
            QUERY_KEYS.recruit.getRecruit(recruitId!)
          );
          queryClient.invalidateQueries(QUERY_KEYS.recruit.getRecruitList(1));
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
