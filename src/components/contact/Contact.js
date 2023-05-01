import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://acservicegurgaon.com/wp-content/uploads/2018/02/Contact-Us-Page-Banner.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const IconWrapper = styled(Box)`
    padding: 20px;
    text-align: center;
    & > a {
        padding: 15px;
    }
`;

const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Text variant="h5">
                    Welcome to the contact page of our blogging website! We are delighted that you have taken an interest in contacting us. If you have any questions, feedback, or suggestions, please feel free to reach out to us.
                </Text>
            </Wrapper>
            <IconWrapper>
                <Link href="https://github.com/Satyamgithub865" color="inherit" target="_blank">
                    <GitHub sx={{ fontSize: 40 }} />
                </Link>
                <Link href="mailto:amangupta7808722625@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                    <Email sx={{ fontSize: 40 }} />
                </Link>
                <Link href="https://www.linkedin.com/in/satyam-kumar-676814203/" color="inherit" target="_blank">
                    <LinkedIn sx={{ fontSize: 40 }} />
                </Link>
            </IconWrapper>
        </Box>
    );
}

export default Contact;