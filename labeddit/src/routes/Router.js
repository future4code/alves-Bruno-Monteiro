import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
       
      <Route index element={<FeedPage/>}/>
            <Route path="post" element={<PostPage/>}/>
            <Route path="signup" element= {<SignUpPage/>} />
            <Route path="login" element= {<LoginPage/>} />
            <Route path= "/" element = {<ErrorPage/>} />
            
      </Routes>
    </BrowserRouter>
  );
};

export default Router
