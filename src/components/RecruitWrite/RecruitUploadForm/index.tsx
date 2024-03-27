import * as S from "./style";
import useWriteRecruit from "../../../hooks/recruit/useWriteRecruit";
import TextField from "../../common/TextField";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { JobList } from "../../../constants/job/job.constant";
import useUploadRecruitImage from "../../../hooks/recruit/useUploadRecruitImage";
import { useRecoilState } from "recoil";
import { imgUrlAtom } from "../../../store/recruitWrite/recuritWriteAtom";
import { LuUpload } from "react-icons/lu";
import { TiDelete } from "react-icons/ti";

const RecruitUploadForm = () => {
  // const { id }: Readonly<Params<"id">> = useParams();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    onChangeContent,
    textContent,
    setTextContent,
    handleJobDeselection,
    handleJobSelection,
    selectJob,
    selectJobList,
    onSubmitRecurit,
  } = useWriteRecruit();

  const { onChangePdf, UploadThumbnail, handleDeleteImage } =
    useUploadRecruitImage();
  const [pdfImgUrl, setPdfImgUrl] = useRecoilState(imgUrlAtom);

  console.log(pdfImgUrl);

  return (
    <S.Container>
      <div>
        <S.Title isBottom={16}>채용 공고 미리보기</S.Title>

        <S.PreviewBox>
          {pdfImgUrl.length > 0 ? (
            <>
              {pdfImgUrl.map((image, id) => (
                <div key={id}>
                  <div
                    onClick={() => handleDeleteImage(id)}
                    style={{
                      position: "absolute",
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "32%",
                    }}
                  >
                    <TiDelete color="red" size={50} />
                  </div>
                  <S.Img alt="preview" src={image} />
                </div>
              ))}
            </>
          ) : (
            <label htmlFor="thumbnail">
              <input
                type="file"
                id="thumbnail"
                style={{ display: "none" }}
                multiple
                onChange={UploadThumbnail}
              />

              <S.UploadIconBox>
                <LuUpload size={30} />
                <p>이미지를 업로드해주세요</p>
              </S.UploadIconBox>
            </label>
          )}
        </S.PreviewBox>
      </div>
      <S.UploadContainer>
        <TextField
          id="name"
          name="name"
          value={textContent.name}
          onChange={onChangeContent}
        >
          회사명
        </TextField>

        <TextField
          id="location"
          name="location"
          value={textContent.location}
          onChange={onChangeContent}
        >
          회사 위치
        </TextField>

        <S.JobContainer>
          {isOpen ? (
            <S.JobBox>
              <S.JobListBox>
                {JobList.map((job) => {
                  const isSelected = selectJob.includes(job);
                  return (
                    <S.JobList
                      onClick={() =>
                        isSelected
                          ? handleJobDeselection(job)
                          : handleJobSelection(job)
                      }
                      style={{
                        border: isSelected
                          ? "1.5px solid #5d8bff"
                          : "1.5px solid #969595",
                        color: isSelected ? " #5d8bff" : "#969595",
                      }}
                    >
                      {job}
                    </S.JobList>
                  );
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
              {selectJobList ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "-20px",
                  }}
                >
                  <S.SmailTitle>추가 사항</S.SmailTitle>
                  <div style={{ color: "black" }}>{selectJobList}</div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div>직무</div> <IoMdArrowDropdown size={20} />
                </div>
              )}
            </S.JobTitle>
          )}
        </S.JobContainer>

        <TextField
          id="personnel"
          name="personnel"
          onChange={onChangeContent}
          type="number"
        >
          모집 인원 (숫자만 입력)
        </TextField>
        <S.InputContainer>
          <S.Title isBottom={10}>추가 사항</S.Title>
          <S.Input
            id="etc"
            name="etc"
            onChange={onChangeContent}
            value={textContent.etc}
          />
        </S.InputContainer>

        <S.Title isBottom={10}>파일 첨부</S.Title>
        <S.UploadBox>
          <input
            type="file"
            id="recruitInput"
            style={{ display: "none" }}
            multiple
            onChange={onChangePdf}
          />
          <label htmlFor="recruitInput">
            <S.FileUpload>PDF 업로드</S.FileUpload>
          </label>
        </S.UploadBox>

        <S.RecruitUpload onClick={() => onSubmitRecurit()}>
          공고 올리기
        </S.RecruitUpload>
      </S.UploadContainer>
    </S.Container>
  );
};

export default RecruitUploadForm;
