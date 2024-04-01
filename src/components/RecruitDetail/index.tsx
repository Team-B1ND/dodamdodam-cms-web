import { Suspense, useState } from "react";
import { Params, useNavigate, useParams } from "react-router-dom";
import { useGetRecruitQuery } from "../../queries/recruit/recruit.query";
import MenuDropdown from "../common/MenuDropdown";
import * as S from "./style";
import { CgTrashEmpty } from "@react-icons/all-files/cg/CgTrashEmpty";
import useDeleteRecruit from "../../hooks/recruit/useDeleteRecruit";
import { IoPerson } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";

const RecruitDetail = () => {
  return (
    <Suspense fallback={<>로딩중...</>}>
      <RecruitDetailContent />
    </Suspense>
  );
};

const RecruitDetailContent = () => {
  const { id }: Readonly<Params<"id">> = useParams();

  const { data } = useGetRecruitQuery({ id: Number(id) }, { suspense: true });
  const { onDelete } = useDeleteRecruit();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <S.CompanyContainer>
      <div>
        <S.MenuBox>
          <MenuDropdown
            customStyle={{ width: 30, height: 30 }}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onToggle={() => setIsOpen((prev) => !prev)}
          >
            <MenuDropdown.Buttons>
              {/* <MenuDropdown.Button
                buttonType="NORMAL"
                onClick={() => navigate(`/recruitwrite/${id}`)}
              >
                <MenuDropdown.Button.Icon icon={<HiOutlinePencil />} />
                수정
              </MenuDropdown.Button> */}
              <MenuDropdown.Button
                buttonType="DELETE"
                onClick={() => onDelete(Number(id))}
              >
                <MenuDropdown.Button.Icon icon={<CgTrashEmpty />} />
                삭제
              </MenuDropdown.Button>
            </MenuDropdown.Buttons>
          </MenuDropdown>
        </S.MenuBox>
        <S.ImageContainer>
          <S.CompanyImg src={data?.data.image} />
        </S.ImageContainer>
        <S.CompanyInfoContainer>
          <S.CompanyInfoBox>
            <S.CompanyName>{data?.data.name}</S.CompanyName>
            <S.Line />
            <S.CompanyInfo>
              <S.RecruitmentInfo>
                <RiComputerFill size={24} color="rgb(0, 103, 188)" />
                &nbsp; &nbsp;
                <S.SubTitle>직무</S.SubTitle>
                &nbsp; &nbsp; &nbsp;
                <S.Info>{data?.data.duty}</S.Info>
              </S.RecruitmentInfo>
              <S.RecruitmentInfo>
                <IoPerson size={24} color="rgb(0, 103, 188)" />
                &nbsp; &nbsp;
                <S.SubTitle>채용인원</S.SubTitle>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <S.Info>{data?.data.personnel}명</S.Info>
              </S.RecruitmentInfo>
            </S.CompanyInfo>
            <S.Line />
            <S.Title>추가 사항</S.Title>
            <S.EtcBox>{data?.data.etc}</S.EtcBox>
          </S.CompanyInfoBox>
          <S.PdfDataBox>
            <S.PdfTitle>PDF 파일</S.PdfTitle>
            <S.PdfBox>
              {data?.data.pdfs.map((pdf) => (
                <S.Pdf target="_blank" href={pdf.url} rel="noopener">
                  {pdf.name}
                </S.Pdf>
              ))}
            </S.PdfBox>
          </S.PdfDataBox>
        </S.CompanyInfoContainer>
      </div>
    </S.CompanyContainer>
  );
};

export default RecruitDetail;
