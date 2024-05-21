import styled from "styled-components";

export const CompanyContainer = styled.div``;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 30px;
`;

export const CompanyImg = styled.img`
  width: 1000px;
  height: 350px;

  border-radius: 10px;

  user-select: none;

  object-fit: fill;
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;

  margin: 40px 0px 20px 0px;
`;

export const CompanyInfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CompanyInfoBox = styled.div`
  width: 700px;
`;

export const PdfDataBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  height: 200px;

  background-color: #ececed;
  border-radius: 10px;
`;

export const CompanyName = styled.div`
  font-size: 33px;
  font-weight: 700;

  margin-bottom: 30px;
`;

export const Line = styled.div`
  border-bottom: 1px solid #dddddd;

  width: 85%;
`;

export const CompanyInfo = styled.div`
  margin: 30px 0px 30px 0px;
`;

export const RecruitmentInfo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-size: 17px;
  font-weight: 600;
`;

export const Info = styled.div`
  font-size: 17px;
  font-weight: 500;

  color: rgba(46, 47, 51, 0.88);
`;

export const EtcBox = styled.div`
  width: 85%;

  font-size: 16px;
  font-weight: 400;

  white-space: pre-line;
`;

export const PdfBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  cursor: pointer;
`;

export const Pdf = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  background-color: white;
  height: 50px;

  width: 250px;

  border-radius: 20px;

  margin-bottom: 10px;

  text-decoration-line: none;
  color: black;
`;

export const PdfTitle = styled.p`
  margin-top: 12px;
`;

export const MenuBox = styled.div`
  // margin-right: 230px;
  display: flex;
  justify-content: center;

  margin-bottom: 5px;
`;

export const Menu = styled.div`
  width: 1000px;
  display: flex;
  justify-content: flex-end;
`;
