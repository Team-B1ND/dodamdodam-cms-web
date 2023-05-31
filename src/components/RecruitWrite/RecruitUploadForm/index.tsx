import * as S from "./style";
import { BsPlusCircleFill } from "@react-icons/all-files/bs/BsPlusCircleFill";
import useUploadRecruitImage from "../../../hooks/recruit/useUploadRecruitImage";
import { useRecoilState } from "recoil";
import { recruitImageAtom } from "../../../store/recruitWrite/recuritWriteAtom";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import useWriteRecruit from "../../../hooks/recruit/useWriteRecruit";
import { Flex } from "../../common/Flex";
import SubmitButton from "../../common/SubmitButton";

const RecruitUploadForm = () => {
  const {
    dragHandler,
    dragInHandler,
    dragOutHandler,
    onChangeImage,
    dropHandler,
  } = useUploadRecruitImage();

  const [recruitImage, setRecruitImage] = useRecoilState(recruitImageAtom);

  const { textContent, onChangeContent, onSubmitRecurit } = useWriteRecruit();

  return (
    <S.Container>
      <S.UploadContainer>
        {recruitImage === "" ? (
          <>
            <input
              id="recruitUploadInput"
              type="file"
              onChange={onChangeImage}
            />
            <S.UploadBox
              htmlFor="recruitUploadInput"
              draggable={true}
              onDrop={dropHandler}
              onDragOver={dragHandler}
              onDragLeave={dragOutHandler}
              onDragEnter={dragInHandler}
            >
              <S.UploadButton>
                <BsPlusCircleFill />
              </S.UploadButton>
              <S.UploadGuide>
                드래그앤 드롭 <br /> 또는 <strong>업로드</strong>
              </S.UploadGuide>
            </S.UploadBox>
          </>
        ) : (
          <>
            <S.UploadedImage src={recruitImage} />
            <S.ImageDeleteButton onClick={() => setRecruitImage("")}>
              <IoClose />
            </S.ImageDeleteButton>
          </>
        )}
      </S.UploadContainer>
      <Flex
        customStyle={{ width: "40%" }}
        direction="column"
        gap={10}
        align={"end"}
      >
        <S.CompanyNameInput
          value={textContent.companyName}
          onChange={onChangeContent}
          placeholder={"회사명을 적어주세요"}
          name="companyName"
        />
        <S.EtcTextarea
          value={textContent.etc}
          onChange={onChangeContent}
          placeholder={"추가 사항을 적어주세요"}
          name="etc"
        />
        <SubmitButton onClick={onSubmitRecurit}>제출</SubmitButton>
      </Flex>
    </S.Container>
  );
};

export default RecruitUploadForm;
