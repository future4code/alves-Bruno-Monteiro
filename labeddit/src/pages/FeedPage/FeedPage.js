import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../Components/GlobalContext";
import UpVote from "../../Assets/upvote.png";
import DownVote from "../../Assets/downvote.png";
import Comment from "../../Assets/comment.png";
import logo from "../../Assets/nav-logo.png";
import UpVoteActive from "../../Assets/upvote-active.png";
import DownVoteActive from "../../Assets/downvote-active.png";
import { baseURL } from "../../Constants/baseURL";
import axios from "axios";
import {
  ContainerFeed,
  Header,
  ContainerForm,
  InputText,
  ButtonPost,
  ButtonLogout,
  Input,
  Logo,
  ContainerPosts,
  CardPost,
  Line,
  PostTitle,
  PostUser,
  PostCount,
  ContainerVotes,
  ContainerCounters,
  ButtonComment,
  ButtonVote,
} from "./styled";

const FeedPage = (props) => {
  const [postText, setPostText] = useState("");
  const [postTitle, setPostTitle] = useState("");

  const navigate = useNavigate();
  const { posts, getPosts, goToPostPage, deletePostVote, createPostVote} =
    useContext(GlobalContext);

  const onChangePostTitle = (event) => {
    setPostTitle(event.target.value);
  };

  const onChangePostText = (event) => {
    setPostText(event.target.value);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getPosts();
  }, []);

  const postar = () => {
    const body = {
      title: postTitle,
      body: postText,
    };

    axios
      .post(baseURL + "/posts", body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPostTitle("");
        setPostText("");
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const formattedPosts = posts.map((post, index) => {
    return (
      <CardPost key={post.id}>
        <PostUser>Enviado por: {post.username}</PostUser>
        <PostTitle>{post.title}</PostTitle>
        <ContainerCounters>
          <ContainerVotes>
            {post.userVote < 1 ? (
              <ButtonVote
                onClick={() => {
                  createPostVote(post.id, 1);
                }}
              >
                {" "}
                <img src={UpVote} alt="upvote"></img>{" "}
              </ButtonVote>
            ) : (
              <ButtonVote
                onClick={() => {
                    deletePostVote(post.id);
                }}
              >
                {" "}
                <img src={UpVoteActive} alt="upvote active"></img>{" "}
              </ButtonVote>
            )}
            <PostCount>{post.voteSum === null ? 0 : post.voteSum}</PostCount>
            {post.userVote > -1 ? (
              <ButtonVote
                onClick={() => {
                  createPostVote(post.id, -1);
                }}
              >
                <img src={DownVote} alt="downvote"></img>
              </ButtonVote>
            ) : (
                <ButtonVote
                onClick={() => {
                    deletePostVote(post.id);
                }}
              >
                <img src={DownVoteActive} alt="downvote active"></img>
              </ButtonVote>
            )}
          </ContainerVotes>
          <ButtonComment
            onClick={() => {
              goToPostPage(post.id);
            }}
          >
            <img src={Comment} alt="comment"></img>
            {post.commentCount === null ? 0 : post.commentCount}
          </ButtonComment>
        </ContainerCounters>
      </CardPost>
    );
  });

  return (
    <ContainerFeed>
      <Header>
        <Logo src={logo} alt="logo labeddit" />

        <ButtonLogout onClick={logout}>Logout</ButtonLogout>
      </Header>

      <ContainerForm>
        <Input
          type="text"
          onChange={onChangePostTitle}
          placeholder="Título do post"
          value={postTitle}
          name={"postTitle"}
          required
        ></Input>
        <InputText
          type="text"
          onChange={onChangePostText}
          placeholder="Escreva seu post..."
          value={postText}
          name={"postText"}
          required
        ></InputText>
        <ButtonPost onClick={postar}>Postar</ButtonPost>
      </ContainerForm>
      <Line></Line>
      <ContainerPosts>{formattedPosts}</ContainerPosts>
    </ContainerFeed>
  );
};

export default FeedPage;
