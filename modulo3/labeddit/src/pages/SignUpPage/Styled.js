import styled from "styled-components";

export const Header = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  background: #ededed;
  padding: 8px 10px;
`;

export const ContainerSignup = styled.div`
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

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const ButtonSignup = styled.button`
  text-align: center;
  padding: 13px 10px;
  gap: 10px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  width: 90%;
  height: 51px;
  font-family: "Noto Sans", "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  /* margin-bottom: 10px; */
  border: 0px;
`;

export const ButtonLogin = styled.button`
  text-align: center;
  gap: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: right;
  border: 0px;
  color: #4088cb;
`;

export const TitleSignup = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 43px;
  color: #373737;
  margin: 6%;
`;

export const Input = styled.input`
  margin: 10px;
  height: 60px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #d5d8de;
  border-radius: 4px;
  width: 90%;
  padding-left: 10px;
  font-family: "Noto Sans", "Helvetica";
`;

export const Line = styled.hr`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  height: 1px;
  width: 90%;
  border: 0px;
`;

export const Subhead = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
`;

export const DisclaimerCheck = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin-left: 20px;
  /* text-align: center; */
`;

export const DisclaimerText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin: 0px 0px 0px 20px;
  /* text-align: center; */
`;

export const Logo = styled.img`
  width: 30%;
  grid-column-start: 2;
`;
