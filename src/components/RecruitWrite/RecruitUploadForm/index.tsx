import * as S from "./style";
import { BsPlusCircleFill } from "@react-icons/all-files/bs/BsPlusCircleFill";
import useUploadRecruitImage from "../../../hooks/recruit/useUploadRecruitImage";
import { useRecoilState } from "recoil";
import { recruitImageAtom } from "../../../store/recruitWrite/recuritWriteAtom";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import useWriteRecruit from "../../../hooks/recruit/useWriteRecruit";
import { Flex } from "../../common/Flex";
import SubmitButton from "../../common/SubmitButton";
import { Params, useParams } from "react-router-dom";
import useModifyRecruit from "../../../hooks/recruit/useModifyRecruit";
import TextField from "../../common/TextField";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiCancel } from "react-icons/gi";

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

  const { id }: Readonly<Params<"id">> = useParams();

  const { modifyRecruitData, onChangeModifyContent, onSubmitModifyContent } =
    useModifyRecruit({
      recruitId: Number(id),
    });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [jobList, setJobList] = useState([
    "프론트엔드",
    "백엔드",
    "iOS",
    "Android",
    "풀스택",
    "크로스플랫폼",
    "DevOps",
    "인공지능,머신러닝",
    "데이터 엔지니어",
    "게임",
    "임베디드",
  ]);

  return (
    <S.Container>
      <S.PreviewContainer>
        <S.Title isBottom={16}>채용 공고 미리보기</S.Title>
        <S.PreviewBox />
      </S.PreviewContainer>
      <S.UploadContainer>
        <TextField id="gd" name="gd" functions={"fd"}>
          회사명
        </TextField>

        <TextField id="gd" name="gd" functions={"fd"}>
          회사 위치
        </TextField>

        <S.JobContainer>
          {isOpen ? (
            <S.JobBox>
              <S.JobListBox>
                {jobList.map((job) => {
                  return <S.JobList>{job}</S.JobList>;
                })}
              </S.JobListBox>
              <GiCancel
                style={{ marginTop: "-20px" }}
                size={40}
                onClick={() => setIsOpen(!isOpen)}
              />
            </S.JobBox>
          ) : (
            <S.JobTitle onClick={() => setIsOpen(!isOpen)}>
              직무 <IoMdArrowDropdown size={20} />
            </S.JobTitle>
          )}
        </S.JobContainer>

        <TextField id="gd" name="gd" functions={"fd"}>
          모집 인원
        </TextField>
        <S.InputContainer>
          <S.Title isBottom={10}>추가 사항</S.Title>
          <S.Input />
        </S.InputContainer>
        <div>
          <S.Title isBottom={10}>파일 첨부</S.Title>
          <input
            type="file"
            // ref={scriptImgRef}
            style={{ display: "none" }}
            multiple
            // onChange={(e) => UploadComicImg(e)}
          />
          <S.FileUpload>PDF 업로드</S.FileUpload>
        </div>

        <S.RecruitUpload>공고 올리기</S.RecruitUpload>
      </S.UploadContainer>

      {/* <S.UploadContainer>
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
        <SubmitButton onClick={id ? onSubmitModifyContent : onSubmitRecurit}>
          제출
        </SubmitButton>
      </Flex> */}
    </S.Container>
  );
};

export default RecruitUploadForm;
