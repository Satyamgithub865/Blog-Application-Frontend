import React, { useEffect, useState, useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { Box, Typography, styled } from '@mui/material'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { API } from '../../service/api'
//import styled from '@emotion/styled'
import { Edit, Delete } from '@mui/icons-material';
import Comments from './comments/Comments'

const Container = styled(Box)(({ theme }) => ({
  margin: '50px 100px',
  [theme.breakpoints.down('md')]: {
    margin: 0
  }
}));

const Image = styled('img')({
  width: '100%',
  height: '50vh',
  objectFit: 'cover',
})

const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
  word-break: break-word;
`;

const EditIcon = styled(Edit)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
  cursor: pointer;
`;

const Author = styled(Box)`
  color: #878787;
  margin: 20px 0;
  display: flex;
`;

const Description = styled(Typography)`
  word-break: break-word;
`

const DetailView = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const { account } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, [])

  const url = post.picture ? post.picture : 'https://th.bing.com/th/id/R.00e3a080ed68c8cb424c3e84a7631d86?rik=stEjC4ABrKWnEw&riu=http%3a%2f%2fwww.ecampusnews.com%2ffiles%2f2016%2f01%2fblogs.jpg&ehk=5oDkBWPnLzL8FFugyxR6325T%2bSLdwvY1Gif1V330xbU%3d&risl=&pid=ImgRaw&r=0'

  const deleteBlog = async () => {
    let response = await API.deletePost(post._id);

    if (response.isSuccess) {
      navigate('/');
    }
  }

  return (
    <Container>
      <Image src={url} alt="blog" />
      <Box style={{ float: 'right' }}>
        {
          account.username === post.username &&
          <>
            <Link to={`/update/${post._id}`}><EditIcon color='primary' /></Link>
            <DeleteIcon color='error' onClick={() => deleteBlog()} />
          </>
        }
      </Box>

      <Heading>{post.title}</Heading>

      <Author>
        <Typography>Author: <Box component='span' style={{ fontWeight: 600 }}>{post.username}</Box></Typography>
        <Typography style={{ marginLeft: 'auto' }}>{new Date(post.createdDate).toDateString()}</Typography>
      </Author>

      <Description>{post.description}</Description>

      <Comments post={post} />
    </Container>
  )
}

export default DetailView
