import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { usePostRecruitMutation } from "../../queries/recruit/recruit.query";
import { PostRecruitParam } from "../../repositories/RecruitRepository/RecruitRepository";
import { useRecoilState } from "recoil";
import {
  imgUrlAtom,
  recruitPdfAtom,
} from "../../store/recruitWrite/recuritWriteAtom";
import { QUERY_KEYS } from "../../queries/queryKey";

const useWriteRecruit = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [recruitPdfData] = useRecoilState(recruitPdfAtom);
  const [imgUrl, setImgUrl] = useRecoilState(imgUrlAtom);

  const [textContent, setTextContent] = useState<PostRecruitParam>({
    name: "",
    location: "",
    duty: "",
    etc: "",
    personnel: "",
    image: "",
    pdfs: [],
  });

  const [selectJob, setSelectJob] = useState<string[]>([]);

  const handleJobSelection = (job: string) => {
    if (!selectJob.includes(job)) {
      setSelectJob((prev) => [...prev, job]);
    }
  };

  const handleJobDeselection = (job: string) => {
    setSelectJob((prev) => prev.filter((selectJob) => selectJob !== job));
  };

  const selectJobList = selectJob.join(",");

  const postRecruitMutation = usePostRecruitMutation();

  const onChangeContent = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setTextContent((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitRecurit = () => {
    const { name, location, etc, personnel } = textContent;
    if (name === "") {
      B1ndToast.showInfo("회사명을 입력해주세요");
      return;
    }

    if (location === "") {
      B1ndToast.showInfo("회사 위치를 입력해주세요");
      return;
    }

    if (selectJob == undefined) {
      B1ndToast.showInfo("직무를 선택해주세요");
    }
    postRecruitMutation.mutate(
      {
        name: name,
        location: location,
        duty: selectJobList,
        etc: etc,
        personnel: Number(personnel),
        image: imgUrl,
        pdfs: recruitPdfData,
      },
      {
        onSuccess: () => {
          setTextContent({
            name: "",
            location: "",
            duty: "",
            etc: "",
            personnel: "",
            image: "",
            pdfs: [],
          });

          setImgUrl("");
          navigate("/recruit");
          B1ndToast.showSuccess("공고 등록 완료!");
          queryClient.invalidateQueries(QUERY_KEYS.recruit.getRecruitList(1));
        },
        onError: () => {
          B1ndToast.showError("에러가 발생하였습니다");
        },
      }
    );
  };

  return {
    textContent,
    onChangeContent,
    onSubmitRecurit,
    setTextContent,
    selectJob,
    handleJobSelection,
    handleJobDeselection,
    selectJobList,
  };
};

export default useWriteRecruit;
