import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import hero from '../img/Hero.svg';
import AOS from "aos";
import "aos/dist/aos.css";

const HeroComp = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <HeroContainer id='home'>
      <TextContainer>
        <TextWrapper data-aos="fade-right">
          Hello, I’m <span>Adnan Khan</span>, a skilled Front-end Developer from India, creating stunning websites.
        </TextWrapper>
        <span data-aos="fade-up"
          data-aos-duration="2000">Expertise in React and Front-end Development for creating interactive UI.</span>
        <ButtonContainer data-aos="fade-up"
          data-aos-duration="2000">
          <a href='https://www.linkedin.com/in/adnan-khan-b40b5a30a/'>Contact Me</a>
          <a href="#projects">My Work</a>
        </ButtonContainer>
      </TextContainer>
      <ImageContainer data-aos="fade-down" data-aos-duration="2000">
        <img src={hero} alt="img" />
      </ImageContainer>
      <FloatingIcons>
        <IconWrapper>
          <ion-icon name="logo-html5"></ion-icon>
        </IconWrapper>
        <IconWrapper>
          <ion-icon name="logo-css3"></ion-icon>
        </IconWrapper>
        <IconWrapper>
          <ion-icon name="logo-javascript"></ion-icon>
        </IconWrapper>
        <IconWrapper>
          <ion-icon name="logo-react"></ion-icon>
        </IconWrapper>
        <IconWrapper>
          <ion-icon name="logo-github"></ion-icon>
        </IconWrapper>
      </FloatingIcons>

    </HeroContainer>
  )
}

const FloatingIcons = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const IconWrapper = styled.div`
  ion-icon {
    font-size: 2.7rem;
    color: #72E2AE;
    animation: ${floatAnimation} 3s ease-in-out infinite;
    margin: 0 10px;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  position: relative;
  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  svg{
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
`;

const TextContainer = styled.div`
  width: 50%;
  position: relative;
  padding: 0 31px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 992px) {
    width: 95%;
    padding: 0;
    height: 546px;
    position: relative;
    top: -100px;
    margin-bottom: -104px;
  }
  span {
    color: #D6D6D6;
    font-weight: 300;
    margin-top: 10px;
  }
  ::after {
    content: "";
    position: absolute;
    height: 80%;
    width: 50%;
    z-index: -1;
    background-color: #1B222E;
    border-radius: 0px 67% 67% 0px;
    left: 0%;
    animation: float 6s ease-in-out infinite;
  }
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
      transform: translateY(-30px);
      border-radius: 30% 67% 67% 110%;
      left: 20%;
      height: 48%;
      width: 70%;
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const TextWrapper = styled.div`
  color: #fff;
  font-size: 38px;
  line-height: 60px;
  @media screen and (max-width: 450px) {
    font-size: 25px;
    line-height: 40px;
  }
  span {
    color: #72E2AE;
    font-weight: bold;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  a:nth-child(1) {
    background-color: #72E2AE;
    border: none;
    margin-right: 20px;
    padding: 9px 12px;
    border-radius: 5px;
    color: #3F3D56;
    font-weight: 500;
    cursor: pointer;
    font-size: 16px;
    transition: 450ms;
    border: 2px solid #72E2AE;
    :hover {
      border: 2px solid #72E2AE;
      background-color: #fff0;
      color: #fff;
    }
  }
  a {
    background-color: #2C323C;
    color: #fff;
    padding: 9px 12px;
    border-radius: 5px;
    text-decoration: none;
    border: 2px solid #2C323C;
    :hover {
      background-color: transparent;
      color: #fff;
      border: 2px solid #000;
    }
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 66px);
  position: relative;
  @media screen and (max-width: 992px) {
    width: 90%;
    min-height: 200px;
    max-height: 470px;
  }
  @media screen and (max-width: 420px) {
    max-height: 320px;
  }
  img {
    height: inherit;
    max-height: 400px;
    width: 100%;
    animation: floating 4s ease-in-out infinite;
  }
  @keyframes floating {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default HeroComp;
