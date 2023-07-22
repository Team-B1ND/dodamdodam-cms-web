import { Params, useParams } from "react-router-dom";
import useModifyRecruit from "../../hooks/recruit/useModifyRecruit";
import useWriteRecruit from "../../hooks/recruit/useWriteRecruit";
import { Flex } from "../common/Flex";
import SubmitButton from "../common/SubmitButton";
import RecruitUploadImg from "./RecruitUploadImg";
import RecruitUploadPdf from "./RecruitUploadPdf";
import * as S from "./style";

const RecruitWrite = () => {
  const { textContent, onChangeContent, onSubmitRecurit } = useWriteRecruit();

  const { id }: Readonly<Params<"id">> = useParams();

  const { modifyRecruitData, onChangeModifyContent, onSubmitModifyContent } =
    useModifyRecruit({
      recruitId: Number(id),
    });

  return (
    <S.Container>
      <S.Wrap>
        <RecruitUploadImg />
        <Flex
          customStyle={{ width: "40%" }}
          direction="column"
          gap={10}
          align={"end"}
        >
          <S.CompanyNameInput
            value={id ? modifyRecruitData.companyName : textContent.companyName}
            onChange={id ? onChangeModifyContent : onChangeContent}
            placeholder={"회사명을 적어주세요"}
            name="companyName"
          />
          <S.EtcTextarea
            value={id ? modifyRecruitData.etc : textContent.etc}
            onChange={id ? onChangeModifyContent : onChangeContent}
            placeholder={"추가 사항을 적어주세요"}
            name="etc"
          />
          <RecruitUploadPdf id={id!!} />
          <SubmitButton onClick={id ? onSubmitModifyContent : onSubmitRecurit}>
            제출
          </SubmitButton>
        </Flex>
      </S.Wrap>
    </S.Container>
  );
};

export default RecruitWrite;
