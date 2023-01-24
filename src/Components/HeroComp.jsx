import React from 'react'
import styled from 'styled-components'
import hero from '../img/Hero.svg';
const HeroComp = () => {
  return (
    <HeroContainer id='home'>
      <TextContainer>
        <TextWraper> Hello, I’m
          <span> Adnan Khan </span>
          Skilled Front-end Developer from India, creating stunning websites.
        </TextWraper>
        <span>Expertise in React and Front-end Development for creating interactive UI.</span>
        <ButtonContainer>
          <button>Contact Me</button>
          <a href="#projects">My Work</a>
        </ButtonContainer>
      </TextContainer>
      <ImageContainer>
        <img src={hero} alt="img" />
      </ImageContainer>
    </HeroContainer>
  )
}
const HeroContainer = styled.div`
 display: flex;
 @media screen and (max-width: 992px) {
   flex-direction: column-reverse;
      align-items: center;
 }
`
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
    span{
      color: #D6D6D6;
      font-weight: 300;
     margin-top: 10px;
    }
    ::after{
      content: "";
      position: absolute;
      height: 80%;
      width: 50%;
      z-index: -1;
      background-color: #1B222E;
      border-radius: 0px 67% 67% 0px;
      left: 0%;
      animation: float 6s ease-in-out infinite;
      @keyframes float {
          0% {
            transform: translatey(0px);
          }
          50% {
            box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
            transform: translatey(-30px);
            border-radius: 30% 67% 67% 110%;
            left: 20%;
            height: 48%;
            width: 70%;
          }
          100% {
            transform: translatey(0px);
          }
      }
    }
`
const TextWraper = styled.div`
color: #fff;
font-size: 38px;
line-height: 60px;
@media screen and (max-width: 450px) {
  font-size: 25px;line-height: 40px;
}
span{
      color: #72E2AE;
      font-weight: bold;
    }
`
const ButtonContainer = styled.div`
   margin-top: 20px;
   button{
    background-color: #72E2AE;
    border: none;
    margin-right: 20px;
    padding: 9px 12px;
    border-radius: 5px;
    color: #3F3D56;
    font-weight: 500;
    cursor: pointer;
    font-size: 16px;
    transition: 450ms; border: 2px solid #72E2AE;
    :hover{
      border: 2px solid #72E2AE;
    background-color: #fff0;
    color: #fff;
    }
   }
   a{
      background-color: #2C323C;
      color: #fff;padding: 9px 12px;
    border-radius: 5px; text-decoration: none;
      border: 2px solid #2C323C;
      :hover{
        background-color: transparent;
        color: #fff;
        border: 2px solid #000;
      }
    }
`
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
    img{
      height: inherit;
      max-height: 400px;
      width: 100%;
      animation: floating 4s ease-in-out infinite;
      @keyframes floating {
          0% {
            transform: translatey(0px);
          }
          50% {
            transform: translatey(-30px);
          }
          100% {
            transform: translatey(0px);
          }
      }
    }
`
export default HeroComp