import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../Components/GlobalContext";
import UpVote from "../../Assets/upvote.png";
import DownVote from "../../Assets/downvote.png";
import UpVoteActive from "../../Assets/upvote-active.png";
import DownVoteActive from "../../Assets/downvote-active.png";
import Comment from "../../Assets/comment.png";
import close from "../../Assets/close.png";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { baseURL } from "../../Constants/baseURL";
import { useParams } from "react-router-dom";
import logo from "../../Assets/nav-logo.png";
import {
  ContainerPost,
  Header,
  ContainerForm,
  InputText,
  ButtonLogout,
  Logo,
  ContainerComments,
  CardPost,
  Line,
  PostTitle,
  PostUser,
  PostCount,
  ContainerVotes,
  ContainerCounters,
  ButtonComment,
  ButtonVote,
  ButtonClose,
  ButtonReply,
  ContainerVotesComment,
  ImgClose
} from "./styled";

const PostPage = (props) => {
  const {
    selectedPost,
    postComments,
    getPostComments,
    deletePostVote,
    createPostVote,
    createCommentVote,
    deleteCommentVote
  } = useContext(GlobalContext);
  const [comment, setComment] = useState("");
  const pathParams = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getPostComments(pathParams.postId);
  });

  const goToFeedPage = () => {
    navigate("/");
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  const onChangeComment = (event) => {
    setComment(event.target.value);
  };

  const createComment = () => {
    const body = {
      body: comment,
    };

    axios
      .post(baseURL + `/posts/${pathParams.postId}/comments`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setComment("");
        getPostComments(pathParams.postId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formattedComments = postComments.map((comment, index) => {
    return (
      <CardPost key={comment.id}>
        <PostUser>Enviado por: {comment.username}</PostUser>
        <PostTitle>{comment.body}</PostTitle>
        <ContainerCounters>
          <ContainerVotesComment>
            {comment.userVote < 1 ? (
              <ButtonVote
                onClick={() => {
                  createCommentVote(comment.id, 1);
                }}
              >
                {" "}
                <img src={UpVote} alt="upvote"></img>{" "}
              </ButtonVote>
            ) : (
              <ButtonVote
                onClick={() => {
                  deleteCommentVote(comment.id);
                }}
              >
                {" "}
                <img src={UpVoteActive} alt="upvote active"></img>{" "}
              </ButtonVote>
            )}
            <PostCount>
              {comment.voteSum === null ? 0 : comment.voteSum}
            </PostCount>
            {comment.userVote > -1 ? (
              <ButtonVote
                onClick={() => {
                  createCommentVote(comment.id, -1);
                }}
              >
                <img src={DownVote} alt="downvote"></img>
              </ButtonVote>
            ) : (
              <ButtonVote
                onClick={() => {
                  deleteCommentVote(comment.id);
                }}
              >
                <img src={DownVoteActive} alt="downvote active"></img>
              </ButtonVote>
            )}
          </ContainerVotesComment>
        </ContainerCounters>
      </CardPost>
    );
  });

  return (
    <ContainerPost>
      <Header>
        <ButtonClose onClick={goToFeedPage}>
          <ImgClose src={close} alt="close post screen"></ImgClose>
        </ButtonClose>
        <Logo src={logo} alt="logo labeddit" />
        <ButtonLogout onClick={logout}>Logout</ButtonLogout>
      </Header>

      <CardPost key={selectedPost.id}>
        <PostUser>Enviado por: {selectedPost.username}</PostUser>
        <PostTitle>{selectedPost.title}</PostTitle>
        <ContainerCounters>
          <ContainerVotes>
            {selectedPost.userVote === null || selectedPost.userVote < 1 ? (
              <ButtonVote
                onClick={() => {
                  createPostVote(selectedPost.id, 1);
                }}
              >
                {" "}
                <img src={UpVote} alt="upvote"></img>{" "}
              </ButtonVote>
            ) : (
              <ButtonVote
                onClick={() => {
                  deletePostVote(selectedPost.id);
                }}
              >
                {" "}
                <img src={UpVoteActive} alt="upvote active"></img>{" "}
              </ButtonVote>
            )}
            <PostCount>
              {selectedPost.voteSum === null ? 0 : selectedPost.voteSum}
            </PostCount>
            {selectedPost.userVote > -1 ? (
              <ButtonVote
                onClick={() => {
                  createPostVote(selectedPost.id, -1);
                }}
              >
                <img src={DownVote} alt="downvote"></img>
              </ButtonVote>
            ) : (
              <ButtonVote
                onClick={() => {
                  deletePostVote(selectedPost.id);
                }}
              >
                <img src={DownVoteActive} alt="downvote active"></img>
              </ButtonVote>
            )}
          </ContainerVotes>
          <ButtonComment>
            <img src={Comment} alt="comment"></img>
            {selectedPost.commentCount === null ? 0 : selectedPost.commentCount}
          </ButtonComment>
        </ContainerCounters>
      </CardPost>

      <ContainerForm>
        <InputText
          type="text"
          onChange={onChangeComment}
          placeholder="Adicionar comentario"
          value={comment}
          name={"comment"}
          required
        ></InputText>
        <ButtonReply onClick={createComment}>Responder</ButtonReply>
      </ContainerForm>
      <Line></Line>
      <ContainerComments>{formattedComments}</ContainerComments>
    </ContainerPost>
  );
};

export default PostPage;
