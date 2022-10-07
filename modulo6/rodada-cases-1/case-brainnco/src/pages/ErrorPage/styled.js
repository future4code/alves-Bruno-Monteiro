import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const DivText = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: -200px;
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 60px;
    color: #2e318a;
  }
  p {
    font-family: "Montserrat", sans-serif;
    width: 70%;
    font-size: 25px;
    color: #2e318a;
  }
  button {
    font-family: "Montserrat", sans-serif;
    color: #fff;
    background-color: #2e318a;
    height: 40px;
    width: 200px;
    border-radius: 8px;
    font-size: 18px;
    border: none;
    :hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.5s;
    }
  }
`;
export const Img = styled.img`
  font-family: "Montserrat", sans-serif;
  width: 650px;
  margin-top: 15%;
`;
