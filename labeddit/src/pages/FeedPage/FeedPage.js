import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../components/global/GlobalContext'
import UpVote from '../img/upvote.png'
import DownVote from '../img/downvote.png'
import Comment from '../img/comment.png'
import UpVoteActive from '../img/upvote-active.png'
import DownVoteActive from '../img/downvote-active.png'
import { goToPostPage } from '../routes/coordinator'
import { useForm } from '../hooks/useForm'
import { baseURL } from '../constants/baseURL'
import axios from 'axios'


export default function Feed() {
  const navigate = useNavigate()
  const { posts, isLoading, getPostComments, getPosts } = useContext(GlobalContext)
  const [errors, setErrors] = useState({ title: false, body: false })
  const { form, onChange, cleanFields } = useForm({ title: '', body: '' })

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
    getPosts()
  }, [])

  const createPost = (form) => {
    if (form.title === '') {
      setErrors({ title: true })
      return
    }
    if (form.body === '') {
      setErrors({ body: true })
      return
    }
    axios.post(baseURL + '/posts', form, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      cleanFields()
      getPosts()
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const createPostVote = (id, vote) => {
    const body = {
      direction: vote
    }

    axios.post(baseURL + `/posts/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res.data)
      getPosts()
    }).catch((err) => {
      console.log(err)
    })
  }