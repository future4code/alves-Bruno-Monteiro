import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../errors/ErrorPage";
import Lottery from "../pages/Lottery";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Lottery />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
