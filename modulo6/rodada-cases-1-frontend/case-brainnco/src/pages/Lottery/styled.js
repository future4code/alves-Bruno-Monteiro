import styled from "styled-components";

const DropDown = styled.select`
  width: 216px;
  height: 42px;
  background-color: #ffffff;
  color: black;
  padding: 12px;
  border-radius: 9px;
  border: 0;
  outline: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 700px) {
    text-align: center;
    margin: auto;
    font-size: larger;
  }
`;

const Option = styled.option`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #333333;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.color};
  display: flex;
  margin: 0;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const ColorContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 8%;

  @media screen and (max-width: 700px) {
    width: 100%;
    text-align: center;
    padding: 0;
    height: 40%;
  }
`;

const TitleContainer = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    margin: auto;
  }
`;

const ImgLogo = styled.img`
  width: 60px;
  height: 60px;

  @media screen and (max-width: 700px) {
    margin: auto;
    margin-bottom: 10px;
  }
`;

const Title = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  margin: auto 20px;
  color: #ffffff;
`;

const Circle = styled.div`
  border-radius: 100%;
  background: #ffffff;
  width: 111px;
  height: 106px;
  text-align: center;
  margin: 10px;

  @media screen and (max-width: 700px) {
    margin: 5px;
    width: 76px;
    height: 76px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    display: flex;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 20px;
  }
`;

const InfoTitle = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.135em;
  color: #ffffff;
`;

const InfoText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 10px;

  @media screen and (max-width: 700px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.135em;
    margin-left: 10px;
    margin-top: 0;
  }
`;

const CurveContainer = styled.div`
  width: 70%;
  bottom: 20%;
  height: 140%;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
  background-color: #efefef;
  position: relative;

  @media screen and (max-width: 700px) {
    position: static;
    width: 100%;
    height: 60%;
    border-top-left-radius: 0%;
    border-bottom-left-radius: 0%;
    padding: 0;
    justify-content: space-between;
    border-top-left-radius: 70% 15%;
    border-top-right-radius: 70% 15%;
  }
`;

const ResultsContainer = styled.div`
  width: 84%;
  height: 100vh;
  margin-top: 20%;
  overflow: auto;
  padding: 0 8%;
  display:flex;
  justify-content:center;
  flex-direction: column;


  @media screen and (max-width: 700px) {
    margin-top: 40px;
    width: 100%;
    padding: 0;
    height: 100%;
  }
`;

const NumbersContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto auto 0 auto;

  @media screen and (max-width: 700px) {
    padding-top: 30px;
    width: 90%;
    margin: 10px auto 0 auto;
  }
`;

const Number = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 106px;
  color: #333333;
  margin: auto;

  @media screen and (max-width: 700px) {
    line-height: 76px;
    font-size: 20px;
  }
`;

const TextFooter = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  text-align: center;
  margin: auto auto 10% auto;
  width: 50%;

  @media screen and (max-width: 700px) {
    padding: 3px 15px;
    line-height: 21px;
    font-size: 14px;
    width: 80%;
  }
`;

const ErrorMessage = styled.div`
  font-family: "Montserrat", sans-serif;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
  padding-top: 20px;
  text-align: center;
  color: #ffffff;
  line-height: 30px;
  font-size: 21px;
`;

const Spinner = styled.img`
  width: 50px;
  height: 50px;
`;

export {
  DropDown,
  Option,
  MainContainer,
  ColorContainer,
  TitleContainer,
  ImgLogo,
  Circle,
  InfoContainer,
  InfoTitle,
  InfoText,
  ResultsContainer,
  NumbersContainer,
  Number,
  TextFooter,
  Title,
  Spinner,
  ErrorMessage,
  CurveContainer
};
