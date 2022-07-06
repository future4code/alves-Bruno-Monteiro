import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImHeart, ImCross } from 'react-icons/im'
import { IconButton, Image, Icon, useToast, Button } from '@chakra-ui/react';


function ProfileScreen(props) {

    const [profile, setProfile] = useState({})
    const [toastMessage, setToastMessage] = useState(undefined);
    const toast = useToast();
    const [viewedAll, setViewedAll] = useState(false);

    const changeProfile = (like) => {
        const body = {
            "id": profile.id,
            "choice": like
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
                getProfileToChoose();
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
                duration: 1500,
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
        <div>
            <div>
                <Image w={358} h={430} src={profile.photo} alt={profile.name} />
                <h2>{profile.name}, {profile.age}</h2>
                <p>{profile.bio}</p>
                {viewedAll ? <Button onClick={clearMatches}>
                    Reset Profiles
                </Button> : <></>}
            </div>
            <div>
                <IconButton icon={<ImCross />} onClick={() => changeProfile(false)} colorScheme='red' size='lg'></IconButton>
                <IconButton icon={<ImHeart />} onClick={() => changeProfile(true)} colorScheme='green' size='lg'></IconButton>

            </div>
        </div>
    );
}

export default ProfileScreen;
