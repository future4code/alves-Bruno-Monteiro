import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Lottery from "../pages/Lottery/Lottery";

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
