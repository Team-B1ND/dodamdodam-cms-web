import React, { useState } from "react";
import { Notice } from "../../../types/interfaces/notice/notice.type";
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
} from "./style";
import { HiCheckCircle } from "@react-icons/all-files/hi/HiCheckCircle";
import { HiClock } from "@react-icons/all-files/hi/HiClock";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";

interface Props {
  data: Notice;
}

const HomeNoticeItem = ({ data }: Props) => {
  const [fold, setFold] = useState(true);

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
        <HomeNoticeItemSettingButtonWrap>
          <HomeNoticeItemSettingButton onClick={() => setFold((prev) => !prev)}>
            <BsThreeDots />
          </HomeNoticeItemSettingButton>
          {!fold && (
            <HomeNoticeItemSettingModal>
              <HomeNoticeItemSettingModalItem></HomeNoticeItemSettingModalItem>
              <HomeNoticeItemSettingModalItem></HomeNoticeItemSettingModalItem>
            </HomeNoticeItemSettingModal>
          )}
        </HomeNoticeItemSettingButtonWrap>
      </HomeNoticeItemRightWrap>
    </HomeNoticeItemContainer>
  );
};

export default React.memo(HomeNoticeItem);
