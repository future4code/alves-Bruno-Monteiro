import styled from "styled-components";
import greenArch from "../img/Sidebar.svg";

const DropDown = styled.select`
  width: 216px;
  height: 42px;
  background-color: #ffffff;
  color: black;
  padding: 12px;
  border-radius: 9px;
  border: 0;
  outline: none;
  /* filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.05)); */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 700px) {
    text-align: center;
    margin: auto;
  }
`;

const Option = styled.option`
  font-family: "Montserrat", sans-serif;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #333333;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

const OptGroup = styled.optgroup`
  font-family: "Montserrat", sans-serif;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
  font-weight: 500;
  font-size: 30px;
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
  /* mask-image: url(${greenArch}); */
  /* background-color: ${(props) => props.color}; */
  /* mask-size: inherit;
  mask-size: cover; */
  /* border-top-left-radius: 70% 15%;
    border-top-right-radius: 70% 15%; */

  /* border-bottom-left-radius:50%;
    border-bottom-right-radius:50%; */
`;

const TitleContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

  @media screen and (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    margin: auto;
  }
`;

const ImgLogo = styled.img`
  width: 60px;
  height: 60px;
  /* margin-right: 20px; */
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
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
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
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
`;

const InfoText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 10px;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

  @media screen and (max-width: 700px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.135em;
    margin-left: 10px;
    margin-top: 0;
  }
`;

const ResultsContainer = styled.div`
  width: 70%;
  /* border-bottom-left-radius:50%;
    border-bottom-right-radius:50%; */
  /* border-top-left-radius: 50%;
  border-bottom-left-radius: 50%; */
  bottom: 35%;
 height: 140%;
  /* right: -90%; */
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
  background-color: #efefef;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8%;

  @media screen and (max-width: 700px) {
    position: static;
    width: 100%;
    height: 60%;
    border-top-left-radius: 0%;
    border-bottom-left-radius: 0%;
    padding: 0;
    justify-content: space-between;
  }
`;

const NumbersContainer = styled.div`
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    padding-top: 10px;
    width: 90%;
    margin: auto;
    transform: none;
    position: relative;
    top: 0;
    left: 0;
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
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

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
  position: absolute;
  bottom: 30%;
  left: 30%;
  color: #000000;
  text-align: center;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

  @media screen and (max-width: 700px) {
    padding: 3px 15px;
    line-height: 21px;
    font-size: 14px;
    position: static;
    bottom: 0;
  }
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
  OptGroup,
};
