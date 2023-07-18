import { useRecoilState } from "recoil";
import useUploadRecruitImage from "../../../hooks/recruit/useUploadRecruitImage";
import { recruitImageAtom } from "../../../store/recruitWrite/recuritWriteAtom";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { FiUpload } from "@react-icons/all-files/fi/FiUpload";

import * as S from "./style";

const RecruitUploadImg = () => {
  const {
    dragHandler,
    dragInHandler,
    dragOutHandler,
    onChangeImage,
    dropHandler,
  } = useUploadRecruitImage();

  const [recruitImage, setRecruitImage] = useRecoilState(recruitImageAtom);

  return (
    <S.Container>
      {recruitImage === "" ? (
        <>
          <input
            id="recruitImgUploadInput"
            type="file"
            onChange={onChangeImage}
          />
          <S.UploadBox
            htmlFor="recruitImgUploadInput"
            draggable={true}
            onDrop={dropHandler}
            onDragOver={dragHandler}
            onDragLeave={dragOutHandler}
            onDragEnter={dragInHandler}
          >
            <S.UploadButton>
              <FiUpload />
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
    </S.Container>
  );
};

export default RecruitUploadImg;
