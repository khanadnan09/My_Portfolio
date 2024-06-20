import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
const NavBar = () => {
    const [closeNavBar, setCloseNavBar] = React.useState(false)
    const closeNav = () => {
        setCloseNavBar(false)
    }
    const openNav = () => {
        setCloseNavBar(true)
    }
    return (
        <Nav>
            <Logo style={{ padding: "10px 0" }}>
                <img src={logo} alt="" />
            </Logo>
            <Menu className='MenuIcon' onClick={openNav}><ion-icon name="menu-outline"></ion-icon></Menu>
            <NavLinks id="list-example" style={{ left: closeNavBar ? "0" : "-100%" }}>
                <a href="#home" onClick={closeNav}>Home</a>
                <a href="#about" onClick={closeNav}>About Me</a>
                <a href="#skills" onClick={closeNav}>Skills</a>
                <a href="#projects" onClick={closeNav}>Projects</a>
                <span className='closeIcon' onClick={closeNav}><ion-icon name="close-outline"></ion-icon></span>
            </NavLinks>
        </Nav>
    )
}
const Menu = styled.div`
    color: #fff;
    display: none;
    align-items: center;
    font-size: 2rem;
    margin-left: auto;
    margin-right: 16px;
    @media screen and (max-width: 992px) {
     display: flex;
    }
`
const Nav = styled.div`
  display: flex;
  height: 66px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: #1d2430cc;
  position: sticky;
  top: 0;
  z-index: 99;
`
const Logo = styled.div`
     height: 66px;
    img{
        height: 100%;
    }

`
const NavLinks = styled.div`
    display: flex;
    align-items: center;
  transition: 450ms;
    justify-content: end;
    width: 100%;
    margin-right: 30px;
    opacity: 1 !important;
    span{
        color: #fff;
        font-size: 2rem;
    position: absolute;
    right: 10px;
    top: 5px;
    display: none;
    }
    @media screen and (max-width: 992px) {
        position: absolute;
        flex-direction: column;
        height: 100vh;
        justify-content: center;    
        background-color: #1b222e;
        span{
            display: block;
        }
    }
    a{
        color: #B7B7B7;
        margin: 0 13px;
        text-decoration: none;
    transition: 450ms;
        :hover{
            color: #fff;
        }
        @media screen and (max-width: 992px)  {
            margin: 13px;
            font-size: 25px;
        }
    }
`
export default NavBar