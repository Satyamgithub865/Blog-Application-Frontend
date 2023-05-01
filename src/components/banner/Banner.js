import React from 'react'
import { Box, styled } from '@mui/material'

const Container = styled(Box)`
    width: 100%;
    height: 50vh;
`;

const Banner = () => {
    const ImgUrl = 'https://thumbs.dreamstime.com/b/business-marketing-conceptual-word-spelled-game-wooden-keywords-making-office-table-83566386.jpg';
    return (
        <Container>
            <img style={{width:"100%", height:"100%",objectFit:"fill"}} src={ImgUrl} alt="Home" />
        </Container>
    )
}

export default Banner
