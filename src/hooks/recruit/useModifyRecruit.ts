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
import {
  recruitImageAtom,
  recruitPdfFileAtom,
} from "../../store/recruitWrite/recuritWriteAtom";
import { RecruitFile } from "../../types/recruit/recruit.type";
import { GetRecruitFileNamesResponse } from "../../repositories/RecruitRepository/RecruitRepository";

interface Props {
  recruitId: number | undefined;
  pdfFile: GetRecruitFileNamesResponse | undefined;
}

const useModifyRecruit = ({ recruitId, pdfFile }: Props) => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const patchRecruitMutation = usePatchRecruitMutation();

  const [prevModifyRecruitData, setPrevModifyRecruitData] = useState({
    image: "",
    companyName: "",
    etc: "",
  });
  const [originPdf, setOriginPdf] = useState<{ url: string; name: string }[]>(
    []
  );

  const [modifyRecruitData, setModifyRecruitData] = useState({
    image: "",
    companyName: "",
    etc: "",
  });

  const [prevModifyRecruitFileNames, setPrevModifyRecruitFileNames] = useState(
    []
  );

  const [modifyRecruitFileNames, setModifyRecruitFileNames] = useState([]);

  const [recruitImage, setRecruitImage] = useRecoilState(recruitImageAtom);

  const [recruitPdfFileNames, setRecruitPdfFileNames] =
    useRecoilState(recruitPdfFileAtom);

  const { data: serverRecruitData } = useGetRecruitQuery({
    id: Number(recruitId),
  });

  useEffect(() => {
    if (recruitId && serverRecruitData && pdfFile) {
      const { image, etc, companyName } = serverRecruitData.data;

      setPrevModifyRecruitData({
        image,
        etc,
        companyName,
      });
      setModifyRecruitData({
        image,
        etc,
        companyName,
      });
      setRecruitImage(serverRecruitData.data.image);
      // setRecruitPdfFileNames(serverRecruitData.data.pdfUrl);

      const recruitChangePdfFiles = pdfFile.data.map(
        (recruitFile: RecruitFile) => ({
          url: recruitFile.pdfUrl,
          name: recruitFile.pdfName,
        })
      );
      setOriginPdf(recruitChangePdfFiles);
    }
  }, [
    serverRecruitData,
    setRecruitImage,
    recruitId,
    setRecruitPdfFileNames,
    pdfFile,
  ]);

  const onChangeModifyContent = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setModifyRecruitData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitModifyContent = () => {
    if (recruitImage === "") {
      B1ndToast.showInfo("이미지를 추가해주세요.");
      return;
    }

    if (modifyRecruitData.companyName === "") {
      B1ndToast.showInfo("회사명을 추가해주세요.");
      return;
    }

    if (modifyRecruitData.etc === "") {
      B1ndToast.showInfo("내용을 추가해주세요.");
      return;
    }

    if (
      prevModifyRecruitData.companyName === modifyRecruitData.companyName &&
      prevModifyRecruitData.etc === modifyRecruitData.etc &&
      prevModifyRecruitData.image === recruitImage &&
      recruitPdfFileNames.length === 0 // 게시물 수정페이지에 들어오면 recruitPdfFileNames는 처음값이 0이다.
    ) {
      B1ndToast.showInfo("변경된 사항이 없습니다.");
      return;
    }

    patchRecruitMutation.mutate(
      {
        id: recruitId!,
        image: recruitImage,
        etc: modifyRecruitData.etc,
        companyName: modifyRecruitData.companyName,
        pdf:
          recruitPdfFileNames.length === 0
            ? [...originPdf]
            : [...recruitPdfFileNames],
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("수정하였습니다.");
          setModifyRecruitData({ image: "", companyName: "", etc: "" });
          setRecruitPdfFileNames([]);
          queryClient.invalidateQueries(
            QUERY_KEYS.recruit.getRecruit(recruitId!)
          );
          queryClient.invalidateQueries(QUERY_KEYS.recruit.getRecruits);
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
  };
};

export default useModifyRecruit;
