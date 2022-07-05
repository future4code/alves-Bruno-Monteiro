import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImHeart, ImCross } from 'react-icons/im'
import { IconButton, Image, Icon } from '@chakra-ui/react';


function ProfileScreen(props) {

    const [profile, setProfile] = useState({})

    const changeProfile = (like) => {
        getProfileToChoose();
    };

    const getProfileToChoose = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person")
            .then(res => {
                setProfile(res.data.profile);
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
                <Image src={profile.photo} alt={profile.name} />
                <h2>{profile.name}, {profile.age}</h2>
                <p>{profile.bio}</p>
            </div>
            <div>
                <IconButton icon={<ImCross />} onClick={() => changeProfile(false)} colorScheme='red' size='lg'></IconButton>
                <IconButton icon={<ImHeart />} onClick={() => changeProfile(true)} colorScheme='green' size='lg'></IconButton>

            </div>
        </div>
    );
}

export default ProfileScreen;
