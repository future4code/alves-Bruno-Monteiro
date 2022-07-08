import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImHeart, ImCross } from 'react-icons/im'
import { IconButton, Image, Icon, useToast, Button, Box, Text, Heading } from '@chakra-ui/react';
import styled, { keyframes, css } from "styled-components"

const slideRightAnimation = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }
  to {
    opacity: 0;
	  transform: translate(200px) rotate(20deg);
  }
`

const slideLeftAnimation = keyframes`
 from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }
  to {
    opacity: 0;
	  transform: translate(-200px) rotate(-20deg);
  }
`


const MainView = styled.div`
  display: flex;
  padding: 20px 20px 0px;
  flex-direction: column;
  justify-content: flex-end;
`


const BoxBlur = styled.div`
  background-image: url(${(props) => props.photo});
  position: absolute;
  filter: blur(30px);
  height: 100%;
  width: 100%;
`

const BoxContent = styled.div`
    height: 30%;
    position: absolute;
    bottom: 0px;
    width: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px 15px 20px 15px;
    z-index: 2;
`

const BoxProfile = styled.div`
  position: relative;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgb(136,136,136);
  overflow: hidden;
  transition: all 1.5s ease 1s;
  height: 38em;
  display: flex;
  align-items: center;
  animation: ${props => {
        if (props.slideRight) {
            return css`${slideRightAnimation} 0.5s`
        } else if (props.slideLeft){
            return css`${slideLeftAnimation} 0.5s`
        }
    }};
`

const BoxButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`



function ProfileScreen(props) {

    const [profile, setProfile] = useState({})
    const [toastMessage, setToastMessage] = useState(undefined);
    const toast = useToast();
    const [viewedAll, setViewedAll] = useState(false);
    const [slideRight, setSlideRight] = useState(false);
    const [slideLeft, setSlideLeft] = useState(false);

    const changeProfile = (like) => {
        const body = {
            "id": profile.id,
            "choice": like
        }

        if(like){
            setSlideRight(true)
        } else {
            setSlideLeft(true)
        }

        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-monteiro/choose-person", body)
            .then(res => {
                console.log("is match?", res.data)
                if (res.data.isMatch) {
                    setToastMessage({
                        message: "You've matched with " + profile.name,
                        title: "Congrats!",
                        icon: <ImHeart />,
                        type: "success"
                    });
                }
                setSlideRight(false)
                setSlideLeft(false)
                getProfileToChoose()
            })
            .catch(err => {
                console.log(err);
            });

    };

    useEffect(() => {
        if (toastMessage) {
            toast({
                title: toastMessage.title,
                description: toastMessage.message,
                status: toastMessage.type,
                duration: 1700,
                isClosable: true,
                icon: toastMessage.icon,
                containerStyle: {
                    width: '400px',
                    maxWidth: '100%',
                },
            });
        }
    }, [toastMessage, toast]);


    const clearMatches = () => {
        axios
            .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-monteiro/clear")
            .then(() => {
                setToastMessage({
                    message: "Your profiles have been reset",
                    title: "Success!",
                    icon: "",
                    type: "info"
                });
                getProfileToChoose();
            })
            .catch(err => {
                console.log(err);
            });

    }

    const getProfileToChoose = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-monteiro/person")
            .then(res => {
                console.log(res.data.profile)
                if (res.data.profile) {
                    setProfile(res.data.profile);
                    setViewedAll(false);
                } else {
                    setViewedAll(true);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getProfileToChoose();
    }, []);

    return (

        <MainView>
                <BoxProfile slideRight={slideRight} slideLeft={slideLeft}>
                    <BoxBlur photo={profile.photo}></BoxBlur>
                    <Image zIndex={1} w="100%" display="block" src={profile.photo} alt={profile.name} />
                    <BoxContent>
                        <Heading as='h3' size='lg'>{profile.name}, {profile.age}</Heading>
                        <Text fontSize='lg' noOfLines={3}>{profile.bio}</Text>
                    </BoxContent>
                </BoxProfile>
            <BoxButtons>
                {viewedAll ? <Button colorScheme="green" onClick={clearMatches}>
                    Reset Profiles
                </Button> : <>
                <IconButton aria-label='dislike' isRound="true" icon={<ImCross />} onClick={() => changeProfile(false)} colorScheme='purple' size='lg'></IconButton>
                <IconButton aria-label='like' isRound="true" icon={<ImHeart />} onClick={() => changeProfile(true)} colorScheme='green' size='lg'></IconButton>
                </> }
                

            </BoxButtons>

        </MainView>

    );
}

export default ProfileScreen;
