import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.color};
  display: flex;
`;

const ColorContainer = styled.div`
  width: 30%;
  /* border-bottom-left-radius:50%;
    border-bottom-right-radius:50%; */
`;

const TitleContainer = styled.div``;

const Circle = styled.div`
  border-radius: 100%;
  background: #ffffff;
  width: 150px;
  height: 150px;
  text-align: center;
`;

const InfoContainer = styled.div``;

const ResultsContainer = styled.div`
  width: 70%;
  /* border-bottom-left-radius:50%;
    border-bottom-right-radius:50%; */
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  background-color: #efefef;
  position: relative;
  display: flex;
  flex-direction: column;            
  justify-content: flex-end;
`;

const NumbersContainer = styled.div`
  width: 90%;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  display: flex;
  justify-content: space-evenly;
`;

const Number = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 150px;
  color: #333333;
  margin: auto;
`;

const TextFooter = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #000000;


`;

export const Sorteio = (props) => {
  const navigate = useNavigate();

  const onChangeSorteio = (event) => {
    navigate("/" + event.target.value);
  };

  return (
    <MainContainer color={props.color}>
      <ColorContainer>
        <select name="sorteio" required="" onChange={onChangeSorteio}>
          <option default value="mega-sena">
            MEGA-SENA
          </option>
          <option value="quina">QUINA</option>
          <option value="lotofacil">LOTOFACIL</option>
          <option value="lotomania">LOTOMANIA</option>
          <option value="timemania">TIMEMANIA</option>
          <option value="dia-de-sorte">DIA DE SORTE</option>
        </select>
        <TitleContainer>
          <img></img>
          <h2>{props.name}</h2>
        </TitleContainer>
        <InfoContainer>
          <h4>CONCURSO</h4>
          <p></p>
        </InfoContainer>
      </ColorContainer>
      <ResultsContainer>
        <NumbersContainer>
          <Circle>
            <Number>24</Number>
          </Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
        </NumbersContainer>
        <TextFooter>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</TextFooter>
      </ResultsContainer>
    </MainContainer>
  );
};

export default Sorteio;
