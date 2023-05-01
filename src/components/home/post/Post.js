import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { addElipsis } from '../../../utils/common-utils';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    height: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    & > p {
        padding: 0 5px 5px 5px;
    }
`;

const styles = {
    box: {
      boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.3)',
      transition: 'box-shadow 0.3s ease-in-out',
      '&:hover': {
        boxShadow: '0px 0px 10px 3px rgba(0,0,0,0.5)',
      },
    },
  };

const Image = styled('img')({
    width: '100%',
    borderRadius: '10px 10px 0 0',
    objectFit: 'cover',
    height: '150px'
})

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`

const Post = ({post}) => {
    const url = post.picture ? post.picture : 'https://th.bing.com/th/id/OIP.uzB235H3HSkFSCq7TPw_TQHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'

  return (
    <Container sx={styles.box}>
        <Image src={url} alt="blog" />
        <Text>{post.categories}</Text>
        <Heading>{addElipsis(post.title, 20)}</Heading>
        <Text>Author : {post.username}</Text>
        <Details>{addElipsis(post.description, 100)}</Details>
    </Container>
  )
}

export default Post
