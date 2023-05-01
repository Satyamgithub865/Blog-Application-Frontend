import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const Component = styled(AppBar)`
    background : #1a1a1a;
    color : white;
`;

const Container = styled(Toolbar)`
    justify-content : center;
    & > a {
        padding : 20px;
        color : inherit;
        text-decoration : none;
    }
`

const Header = () => {
  return (
    <div>
      <Component>
        <Container>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/contact'>CONTACT</Link>
            <Link to='/login'>LOGOUT</Link>
        </Container>
      </Component>

    </div>
  )
}

export default Header
