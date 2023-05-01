import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 15px 30px;
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

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3" style={{ fontWeight: 600 }}>Create Your BLOG...</Typography>
                <Text variant="h5">
                    Welcome to our MERN stack based blogging website where users can create and publish their blogs on various categories. Our platform is designed to provide a seamless blogging experience to everyone, from professional writers to hobby bloggers.
                </Text>
                <Text variant="h5">
                    Built on the MERN stack, our website incorporates the power of React for creating dynamic user interfaces, Node.js for server-side scripting, Express.js for building APIs, and MongoDB for database management. With this powerful technology stack, we have created a platform that not only provides a seamless user experience but is also highly scalable and secure.
                </Text>
                <Text variant="h5">
                    Our platform allows users to create their accounts and publish their blogs on various categories such as technology, Music, sports, Fashion and much more. Users can also edit and delete their blogs and leave comments on other people's blogs. This feature promotes engagement and interaction within the community and helps users gain more visibility for their blogs.
                </Text>
                <Text variant="h5">
                    In addition, our platform offers a clean and user-friendly interface that makes it easy for users to navigate through the website and find the content they are interested in. The platform also includes features such as search, sorting, and filtering to help users find the blogs they are looking for.
                </Text>
                <Text variant="h5">
                    So come and join our community of bloggers and share your thoughts with the world!
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
    )
}

export default About;