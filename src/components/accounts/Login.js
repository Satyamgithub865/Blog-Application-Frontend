import React, { useState, useContext } from 'react'
import { Box, TextField, Button, styled, Typography } from '@mui/material'
import { API } from '../../service/api'
import { DataContext } from '../../context/DataProvider'
import { useNavigate } from 'react-router-dom'

const Component = styled(Box)`
    width : 400px;
    margin: auto;
    box-shadow : 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0 0',
});

const Wrapper = styled(Box)`
    padding : 25px 35px;
    display : flex;
    flex-direction : column;
    flex : 1;
    & > div, button, p {
        margin-top : 20px;
        text-align : center;
    }
`;

const LoginButton = styled(Button)`
    text-transform : none;
    background : #fb641b;
    color : #fff;
    height : 48px;
    border-radius : 2px;
`;

const Text = styled(Typography)`
    color : #878787;
    font-size : 16px;
`;

const SignUpButton = styled(Button)`
    text-transform : none;
    background : #fff;
    color : #2874f0;
    height : 48px;
    border-radius : 2px;
    box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Error = styled(Typography)`
    font-size : 10px;
    color : #ff6161;
    margin-top : 10px;
    font-weight : 600;
`

const signupInitialValues = {
    name: '',
    username: '',
    password: ''
}

const loginInitialValues = {
    username: '',
    password: ''
}

const Login = ({ isUserAuthenticated }) => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');
    const [login, setLogin] = useState(loginInitialValues);
    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();

    const handleClick = () => {
        if (account === 'login') {
            toggleAccount('signup');
        }
        else {
            toggleAccount('login');
        }
    }

    const handlechange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            setError('');
            setSignup(signupInitialValues);
            toggleAccount('login')
        } else {
            setError("Something went wrong! PLease try again later");
        }
    }

    const onValueChage = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            setError("");
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

            setAccount({ username: response.data.username, name: response.data.name });

            isUserAuthenticated(true);
            navigate('/');
        } else {
            setError('Something went wrong! Please try again later');
        }
    }

    return (
        <Component>
            <Box>
                <Box><Image src={imageURL} alt="Login_img" /></Box>
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard"
                                onChange={onValueChage}
                                name='username' label="Enter username" value={login.username} />
                            <TextField type='password' variant="standard"
                                onChange={onValueChage}
                                name='password' label="Enter password" value={login.password} />

                            {error && <Error>{error}</Error>}
                            <LoginButton variant="contained" onClick={loginUser}>Login</LoginButton>
                            <Text>OR</Text>
                            <SignUpButton onClick={handleClick}>Create an account</SignUpButton>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField
                                placeholder="Enter Your Full Name"
                                label="Name"
                                onChange={(e) => handlechange(e)}
                                name='name'
                            />
                            <TextField
                                placeholder="Enter Your username"
                                label="username"
                                onChange={(e) => handlechange(e)}
                                name='username'
                            />
                            <TextField
                                type='password'
                                placeholder="Enter Your Password"
                                label="password"
                                onChange={(e) => handlechange(e)}
                                name='password'
                            />

                            {error && <Error>{error}</Error>}
                            <SignUpButton onClick={() => signupUser()}>Sign up</SignUpButton>
                            <Text>OR</Text>
                            <LoginButton variant='contained' onClick={handleClick}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login
