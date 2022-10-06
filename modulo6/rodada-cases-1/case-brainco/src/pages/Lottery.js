import React, { useEffect, useState } from "react";
import {
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
} from "./styled";
import { useNavigate } from "react-router-dom";
import logo from "../img/Logo_Sena.png";
import axios from "axios";
import { BASE_URL } from "../constants/links";
import { colors } from "../constants/colors";
import useRequestData from "../hooks/UseRequestData";

const Lottery = (props) => {
  // const [lotteries] = useRequestData([], `${BASE_URL}/loterias`);
  // const [draws] = useRequestData([], `${BASE_URL}/loterias-concursos`);

  const [lotteries, setLotteries] = useState([]);
  const [draws, setDraws] = useState([]);
  const [draw, setDraw] = useState(undefined);
  const [selectedLottery, setSelectedLottery] = useState("0");
  const [selectedColor, setSelectedColor] = useState("#6BEFA3");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setLotteries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setDraws(res.data);
        getDraw(res.data[0].concursoId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChangeLottery = (event) => {
    setSelectedLottery(event.target.value);

    const selectedDraw = draws.filter((draw) => {
      return draw.loteriaId === parseInt(event.target.value);
    });
    getDraw(selectedDraw[0].concursoId);

    setSelectedColor(colors.filter((color) => {
      return color.id === parseInt(event.target.value);
    })[0].color);
  };

  const getDraw = (drawId) => {
    axios
      .get(BASE_URL + `/concursos/${drawId}`)
      .then((res) => {
        setDraw(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainContainer color={selectedColor}>
      {lotteries.length > 0 ? (
        <ColorContainer>
          <DropDown value={selectedLottery} onChange={onChangeLottery}>
            <OptGroup>
            {lotteries.map((lottery) => {
              return (
                <Option key={lottery.id} value={lottery.id}>
                  {lottery.nome.toUpperCase()}
                </Option>
              );
            })}
            </OptGroup>
          </DropDown>
          <TitleContainer>
            <ImgLogo src={logo}></ImgLogo>
            <Title>
              {
                lotteries.filter((lottery) => {
                  return lottery.id === parseInt(selectedLottery);
                })[0].nome.toUpperCase()
              }
            </Title>
          </TitleContainer>
          <InfoContainer>
            <InfoTitle>CONCURSO</InfoTitle>
            {draw !== undefined ? (
              <InfoText>
                {draw.id} - {new Date(draw.data).toLocaleDateString()}
              </InfoText>
            ) : (
              "Loading..."
            )}
          </InfoContainer>
        </ColorContainer>
      ) : (
        " Loading..."
      )}
      <ResultsContainer>
        <NumbersContainer>
          {draw !== undefined
            ? draw.numeros.map((number) => {
                return (
                  <Circle>
                    <Number>{number}</Number>
                  </Circle>
                );
              })
            : " Loading..."}
        </NumbersContainer>
        <TextFooter>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </TextFooter>
      </ResultsContainer>
    </MainContainer>
  );
};

export default Lottery;
