import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage/>      
        </Route>

        <Route exact path="/signup">
          <SignUpPage/>      
        </Route>

        <Route exact path="/feed">
          <FeedPage/>      
        </Route>

        <Route exact path="/feed">
          <PostPage/>      
        </Route>
       
        <Route >
          <ErrorPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router
