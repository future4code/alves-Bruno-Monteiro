import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Avatar, Box, Text } from '@chakra-ui/react'

function ListScreen(props) {

    const [profiles, setProfiles] = useState([])

    const getMatches = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-monteiro/matches")
            .then(res => {
                console.log(res.data.matches);
                setProfiles(res.data.matches);
            })
            .catch(err => {
                console.log(err);
            });
    }


    useEffect(() => {
        getMatches()
    }, [])


    const matchesList = profiles.map(profile => {
        return (
            <Flex>
                <Avatar src={profile.photo} />
                <Box ml='3'>
                    <Text fontWeight='bold'>
                        {profile.name}
                    </Text>
                </Box>
            </Flex>
        );
    });


    return (
        <div>
            {matchesList}
        </div>
    );
}

export default ListScreen;
