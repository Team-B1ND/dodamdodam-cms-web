import React, { useRef, useState } from "react";
import { Notice } from "../../../types/notice/notice.type";
import {
  HomeNoticeItemContainer,
  HomeNoticeItemDate,
  HomeNoticeItemStatusLabel,
  HomeNoticeItemTitle,
  HomeNoticeItemLeftWrap,
  HomeNoticeItemRightWrap,
  HomeNoticeItemTitleWrap,
  HomeNoticeItemSettingButton,
  HomeNoticeItemSettingButtonWrap,
  HomeNoticeItemSettingModal,
  HomeNoticeItemSettingModalItem,
  HomeNoticeItemSettingModalItemIcon,
  HomeNoticeItemSettingModalItemText,
} from "./style";
import { HiCheckCircle } from "@react-icons/all-files/hi/HiCheckCircle";
import { HiClock } from "@react-icons/all-files/hi/HiClock";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import { HiOutlinePencil } from "@react-icons/all-files/hi/HiOutlinePencil";
import { CgTrashEmpty } from "@react-icons/all-files/cg/CgTrashEmpty";
import { palette } from "../../../styles/paletts";
import { useOutsideClick } from "@b1nd/b1nd-react-util";

interface Props {
  data: Notice;
}

const HomeNoticeItem = ({ data }: Props) => {
  const [fold, setFold] = useState(true);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    container: modalContainerRef.current,
    callback: () => setFold(true),
  });

  return (
    <HomeNoticeItemContainer>
      <HomeNoticeItemLeftWrap>
        <HomeNoticeItemStatusLabel status={data.status}>
          {data.status === "ACTIVE" ? <HiCheckCircle /> : <HiClock />}
        </HomeNoticeItemStatusLabel>
        <HomeNoticeItemTitleWrap>
          <HomeNoticeItemTitle>{data.title}</HomeNoticeItemTitle>
          <HomeNoticeItemDate>{data.create_at}</HomeNoticeItemDate>
        </HomeNoticeItemTitleWrap>
      </HomeNoticeItemLeftWrap>
      <HomeNoticeItemRightWrap>
        <HomeNoticeItemSettingButtonWrap ref={modalContainerRef}>
          <HomeNoticeItemSettingButton onClick={() => setFold((prev) => !prev)}>
            <BsThreeDots />
          </HomeNoticeItemSettingButton>
          {!fold && (
            <HomeNoticeItemSettingModal>
              <HomeNoticeItemSettingModalItem>
                <HomeNoticeItemSettingModalItemIcon>
                  <HiOutlinePencil />
                </HomeNoticeItemSettingModalItemIcon>
                <HomeNoticeItemSettingModalItemText>
                  수정
                </HomeNoticeItemSettingModalItemText>
              </HomeNoticeItemSettingModalItem>
              <HomeNoticeItemSettingModalItem
                style={{ color: palette.red[400] }}
              >
                <HomeNoticeItemSettingModalItemIcon>
                  <CgTrashEmpty />
                </HomeNoticeItemSettingModalItemIcon>
                <HomeNoticeItemSettingModalItemText>
                  삭제
                </HomeNoticeItemSettingModalItemText>
              </HomeNoticeItemSettingModalItem>
            </HomeNoticeItemSettingModal>
          )}
        </HomeNoticeItemSettingButtonWrap>
      </HomeNoticeItemRightWrap>
    </HomeNoticeItemContainer>
  );
};

export default React.memo(HomeNoticeItem);
