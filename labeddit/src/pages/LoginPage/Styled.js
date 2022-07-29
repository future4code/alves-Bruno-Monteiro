import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px
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

export const ButtonContinue = styled.button`
  text-align: center;
  padding: 13px 10px;
  gap: 10px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  width: 90%;
  height: 51px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  /* margin-bottom: 10px; */
  border: 0px;
`;

export const ButtonSignup = styled.button`
  background: #FFFFFF;
  text-align: center;
  padding: 13px 10px;
  gap: 10px;
  border-radius: 27px;
  width: 90%;
  height: 51px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  border: 1px solid #FE7E02;
  color: #FE7E02;
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
`;

export const Line = styled.hr`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  height: 1px;
  width: 90%;
  border: 0px;
`;

export const Subhead = styled.p`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
`;

export const Logo = styled.img`
    width: 30%;
`;
