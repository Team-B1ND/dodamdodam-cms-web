import * as S from "./style";
import { BsPlusCircleFill } from "@react-icons/all-files/bs/BsPlusCircleFill";
import useUploadRecruitImage from "../../../hooks/recruit/useUploadRecruitImage";
import { useRecoilValue } from "recoil";
import { recruitImageAtom } from "../../../store/recruitWrite/recuritWriteAtom";

const RecruitUploadForm = () => {
  const {
    dragHandler,
    dragInHandler,
    dragOutHandler,
    onChangeImage,
    dropHandler,
    isDrag,
  } = useUploadRecruitImage();

  const recruitImage = useRecoilValue(recruitImageAtom);

  return (
    <S.Container>
      <input id="recruitUploadInput" type="file" onChange={onChangeImage} />

      {recruitImage === "" ? (
        <S.UploadContainer
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
        </S.UploadContainer>
      ) : (
        <></>
      )}
    </S.Container>
  );
};

export default RecruitUploadForm;
