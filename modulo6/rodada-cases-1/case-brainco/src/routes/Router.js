import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lottery from "../pages/Lottery";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Lottery name={"MEGA-SENA"} color={"#6BEFA3"} />}
        />
        <Route
          path="mega-sena"
          element={<Lottery name={"MEGA-SENA"} color={"#6BEFA3"} />}
        />
        <Route
          path="quina"
          element={<Lottery name={"QUINA"} color={"#8666EF"} />}
        />
        <Route
          path="lotofacil"
          element={<Lottery name={"LOTOFACIL"} color={"#DD7AC6"} />}
        />
        <Route
          path="lotomania"
          element={<Lottery name={"LOTOMANIA"} color={"#FFAB64"} />}
        />
        <Route
          path="timemania"
          element={<Lottery name={"TIMEMANIA"} color={"#5AAD7D"} />}
        />
        <Route
          path="dia-de-sorte"
          element={<Lottery name={"DIA DE SORTE"} color={"#BFAF83"} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
