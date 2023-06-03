import { Suspense, useState } from "react";
import { Params, useNavigate, useParams } from "react-router-dom";
import { useGetRecruitQuery } from "../../queries/recruit/recruit.query";
import MenuDropdown from "../common/MenuDropdown";
import * as S from "./style";
import { HiOutlinePencil } from "@react-icons/all-files/hi/HiOutlinePencil";
import { CgTrashEmpty } from "@react-icons/all-files/cg/CgTrashEmpty";
import useDeleteRecruit from "../../hooks/recruit/useDeleteRecruit";

const RecruitDetail = () => {
  return (
    <S.Container>
      <Suspense fallback={<>로딩중...</>}>
        <RecruitDetailContent />
      </Suspense>
    </S.Container>
  );
};

const RecruitDetailContent = () => {
  const { id }: Readonly<Params<"id">> = useParams();

  const { data } = useGetRecruitQuery({ id: Number(id) }, { suspense: true });

  const { onDelete } = useDeleteRecruit();

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <S.Wrap>
      <S.TopWrap>
        <S.CompanyName>{data?.data.companyName}</S.CompanyName>
        <MenuDropdown
          customStyle={{ width: 30, height: 30 }}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onToggle={() => setIsOpen((prev) => !prev)}
        >
          <MenuDropdown.Buttons>
            <MenuDropdown.Button
              buttonType="NORMAL"
              onClick={() => navigate(`/recruitwrite/${id}`)}
            >
              <MenuDropdown.Button.Icon icon={<HiOutlinePencil />} />
              수정
            </MenuDropdown.Button>
            <MenuDropdown.Button
              buttonType="DELETE"
              onClick={() => onDelete(Number(id))}
            >
              <MenuDropdown.Button.Icon icon={<CgTrashEmpty />} />
              삭제
            </MenuDropdown.Button>
          </MenuDropdown.Buttons>
        </MenuDropdown>
      </S.TopWrap>
      <S.RecruitImage src={data?.data.image} />
      <S.EtcContent>{data?.data.etc}</S.EtcContent>
    </S.Wrap>
  );
};

export default RecruitDetail;
