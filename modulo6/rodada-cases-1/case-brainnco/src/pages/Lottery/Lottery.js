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
  ErrorMessage,
  Spinner,
  CurveContainer
} from "./styled";
import { useNavigate } from "react-router-dom";
import logo from "../../img/Logo_Sena.png";
import axios from "axios";
import { BASE_URL } from "../../constants/links";
import { colors } from "../../constants/colors";
import spinner from "../../img/spinner.gif";

const Lottery = (props) => {
  const [lotteries, setLotteries] = useState([]);
  const [draws, setDraws] = useState([]);
  const [draw, setDraw] = useState(undefined);
  const [selectedLottery, setSelectedLottery] = useState("0");
  const [selectedColor, setSelectedColor] = useState("#6BEFA3");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setLotteries(res.data);
      })
      .catch((err) => {
        setErrorMessage("An error has ocurred. Please try again!");
      });
  }, [navigate]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setDraws(res.data);
        getDraw(res.data[0].concursoId);
      })
      .catch((err) => {
        setErrorMessage("An error has ocurred. Please try again!");
      });
  }, []);

  const onChangeLottery = (event) => {
    setSelectedLottery(event.target.value);

    const selectedDraw = draws.filter((draw) => {
      return draw.loteriaId === parseInt(event.target.value);
    });
    getDraw(selectedDraw[0].concursoId);

    setSelectedColor(
      colors.filter((color) => {
        return color.id === parseInt(event.target.value);
      })[0].color
    );
  };

  const getDraw = (drawId) => {
    axios
      .get(BASE_URL + `/concursos/${drawId}`)
      .then((res) => {
        setDraw(res.data);
      })
      .catch((err) => {
        setErrorMessage("An error has ocurred. Please try again!");
      });
  };

  return (
    <MainContainer color={selectedColor}>
      <ColorContainer>
        {errorMessage && <ErrorMessage> {errorMessage} </ErrorMessage>}
        {lotteries.length > 0 ? (
          <DropDown value={selectedLottery} onChange={onChangeLottery}>
            {lotteries.map((lottery) => {
              return (
                <Option key={lottery.id} value={lottery.id}>
                  {lottery.nome.toUpperCase()}
                </Option>
              );
            })}
          </DropDown>
        ) : (
          <Spinner src={spinner} alt="loading" />
        )}
        <TitleContainer>
          <ImgLogo src={logo}></ImgLogo>
          {lotteries.length > 0 ? (
            <Title>
              {lotteries
                .filter((lottery) => {
                  return lottery.id === parseInt(selectedLottery);
                })[0]
                .nome.toUpperCase()}
            </Title>
          ) : (
            <Spinner src={spinner} alt="loading" />
          )}
        </TitleContainer>
        <InfoContainer>
          <InfoTitle>CONCURSO</InfoTitle>
          {draw !== undefined ? (
            <InfoText>
              {draw.id} - {new Date(draw.data).toLocaleDateString()}
            </InfoText>
          ) : (
            <Spinner src={spinner} alt="loading" />
          )}
        </InfoContainer>
      </ColorContainer>
      <CurveContainer>
        <ResultsContainer>
        <NumbersContainer>
          {draw !== undefined ? (
            draw.numeros.map((number) => {
              return (
                <Circle>
                  <Number>{number}</Number>
                </Circle>
              );
            })
          ) : (
            <Spinner src={spinner} alt="loading" />
          )}
        </NumbersContainer>
        <TextFooter>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </TextFooter>
        </ResultsContainer>
      </CurveContainer>
    </MainContainer>
  );
};

export default Lottery;
