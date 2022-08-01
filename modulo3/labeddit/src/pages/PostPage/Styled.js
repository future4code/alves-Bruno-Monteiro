import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  background: #ededed;
  padding: 8px 10px;
`;

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: "Noto Sans", "Helvetica";
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px 0px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const ContainerVotes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ececec;
  border-radius: 28px;
`;

export const ContainerVotesComment = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ececec;
  border-radius: 28px;
`;

export const ContainerCounters = styled.div`
  width: 55%;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardPost = styled.div`
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  height: 53px;
  width: 90%;
  padding-left: 10px;
  height: 131px;
`;
export const PostTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
  font-family: "Noto Sans", "Helvetica";
`;
export const PostUser = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6f6f6f;
`;

export const PostCount = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 9.56098px;
  line-height: 12px;
  text-align: center;
  color: #6f6f6f;
`;

export const ButtonVote = styled.button`
  background: #fbfbfb;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4.66667px;
  border: 0px;
  border-radius: 28px;
`;

export const ButtonComment = styled.button`
  background: #fbfbfb;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4.66667px 15px;
  gap: 8px;
  border: 1px solid #ececec;
  border-radius: 28px;
  font-style: normal;
  font-weight: 400;
  font-size: 9.56098px;
  line-height: 12px;
  text-align: center;
  color: #6f6f6f;
`;

export const ButtonReply = styled.button`
  text-align: center;
  padding: 13px 0px;
  gap: 10px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 12px;
  width: 92%;
  height: 51px;
  font-family: "Noto Sans", "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  border: 0px;
`;

export const ButtonClose = styled.button`
  text-align: center;
  border: 0px;
  color: #a3a3a3;
  /* width: 34px; */
`;

export const ImgClose = styled.img`
  width: 20px;
`;

export const ButtonLogout = styled.button`
  text-align: center;
  gap: 10px;
  font-family: "Noto Sans", "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: right;
  border: 0px;
  color: #4088cb;
`;

export const Input = styled.input`
  background: #ededed;
  border-radius: 12px;
  border: 0px;
  height: 53px;
  width: 90%;
  padding-left: 10px;
  font-weight: 400;
  font-size: 18px;
  font-family: "Noto Sans", "Helvetica";
`;

export const InputText = styled.textarea`
  background: #ededed;
  border-radius: 12px;
  border: 0px;
  height: 53px;
  width: 90%;
  padding-left: 10px;
  padding-top: 10px;
  height: 131px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #6f6f6f;
  font-family: "Noto Sans", "Helvetica";
`;

export const Line = styled.hr`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  height: 1px;
  width: 90%;
  border: 0px;
`;

export const Subhead = styled.p`
  font-family: "Noto Sans", "Helvetica";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
`;

export const Logo = styled.img`
  width: 10%;
  /* grid-column-start: 2; */
`;
