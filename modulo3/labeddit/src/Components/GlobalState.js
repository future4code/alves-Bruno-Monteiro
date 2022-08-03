import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalContext from "./GlobalContext";
import { baseURL } from "../Constants/baseURL";
import { useNavigate } from "react-router-dom";

export default function GlobalState(props) {
  const [posts, setPosts] = useState([]);
  const [postComments, setPostComments] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const navigate = useNavigate();

  const postsMock = [
    {
      id: "6503d483-68ee-4b96-b399-44cbb5e2041b",
      body: "post",
      title: "Primeiro",
      createdAt: "2021-05-28T12:55:10.785Z",
      userId: "a45f6d7f-be44-497e-94ee-759673ca5d16",
      voteSum: 1232,
      commentCount: 52,
      userVote: -1,
      username: "bruno",
    },
  ];

  const commentsMock = [
    {
      id: "b42bb516-09c4-45f7-b378-f4b80bb8b4cd",
      body: "Primeiro comentário",
      createdAt: "2021-05-28T12:59:24.633Z",
      userId: "a45f6d7f-be44-497e-94ee-759673ca5d16",
      postId: "6503d483-68ee-4b96-b399-44cbb5e2041b",
      voteSum: null,
      userVote: null,
    },
    {
        id: "b42bb516-09c4-45f7-b378-f4b80bb8b4cd",
        body: "Primeiro comentário",
        createdAt: "2021-05-28T12:59:24.633Z",
        userId: "a45f6d7f-be44-497e-94ee-759673ca5d16",
        postId: "6503d483-68ee-4b96-b399-44cbb5e2041b",
        voteSum: null,
        userVote: null,
      },
  ];

  const goToPostPage = (id) => {
    setSelectedPost(posts.find((post) => post.id === id));
    navigate(`/post/${id}`);
  };

  const getPosts = () => {
    // setPosts(postsMock);
    axios
      .get(baseURL + "/posts", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPostComments = (id) => {
    // setPostComments(commentsMock);
    axios
      .get(baseURL + `/posts/${id}/comments`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPostComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePostVote = (id) => {
    axios
      .delete(baseURL + `/posts/${id}/votes`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createPostVote = (id, vote) => {
    const body = {
      direction: vote,
    };

    axios
      .post(baseURL + `/posts/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCommentVote = (id) => {
    axios
      .delete(baseURL + `/comments/${id}/votes`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getPostComments(selectedPost.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createCommentVote = (id, vote) => {
    const body = {
      direction: vote,
    };

    axios
      .post(baseURL + `/comments/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getPostComments(selectedPost.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const values = {
    getPosts,
    posts,
    getPostComments,
    postComments,
    goToPostPage,
    selectedPost,
    deletePostVote,
    createPostVote,
    deleteCommentVote,
    createCommentVote

  };

  return (
    <GlobalContext.Provider value={values}>
      {props.children}
    </GlobalContext.Provider>
  );
}
