import React from 'react'
import styled from 'styled-components'
import polygon from '../img/Polygon Luminary.svg'
import Headin from './Headin'
const AboutMe = () => {
    return (
        <AboutContainer id='about'>
            <Headin title="About Me"/>
            <AboutSection>
                <img className='polygon' src={polygon} alt="."
                    style={{
                        position: "absolute",
                        opacity: ".1",
                        width: "100%",
                        pointerEvents:"none"
                    }} />
                <ImageSection>
                    <img src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </ImageSection>
                <DetailSection>
                    <div>Hello I'm <span>Adnan Khan</span> </div>
                    <ul>
                        <li>I am a front-end developer builds the front-end portion of websites. I creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site also provides the power of React.js to build single page applications.</li>
                        <li>Age : <span>21</span> </li>
                        <li>Country : <span>India</span> </li>
                        <li>Languages : <span>English,Hindi </span></li>
                        <li>Freelance : <span>Available</span> </li>
                        <li>Full Time Job : <span>Available</span> </li>
                        <li>Skills : <span>HTML5 , CSS3 , JS , React.js ...</span> </li>
                        <li>Follow me on : <a href="/"><ion-icon name="logo-linkedin"></ion-icon></a><a target=" " href='https://github.com/khanadnan09'><ion-icon name="logo-github"></ion-icon></a></li>
                        <li><button>Download Resume</button></li>
                    </ul>
                </DetailSection>
            </AboutSection>
        </AboutContainer>
    )
}
const AboutContainer = styled.div``
const AboutSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  @media screen and (max-width: 992px) {
   flex-direction: column;
   .polygon{
       height: 300px;
       opacity: 0.3 !important;
       @media screen and (max-width: 480px) {
        opacity: 0.7 !important;
       }
   }
 }
`
const ImageSection = styled.div`
   display: flex;
   justify-content: center;
   position: relative;
    img{
    width: 400px;
    height: 500px;
    min-width: 280px;
    padding: 20px;
    border-bottom: 10px solid #72e2ae;
    border-right: 10px solid #72e2ae; 
    @media screen and (max-width: 992px) {
        height: auto;
       }
    }
    @media screen and (max-width: 992px) {
        margin: 0 10px;
       }
`
const DetailSection = styled.div`
   width: 50%;
   display: flex;
   justify-content: start;
   flex-direction: column;
   @media screen and (max-width: 992px) {
     width: 100%;
    }
   div{
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 2px;
    color: aliceblue;
    margin: 0px 0 0 20px ;
    padding-bottom: 12px;
    position: relative;
    @media screen and (max-width: 992px) {
     margin-top: 20px;
    }
 ::after{
    content: "";
    position: absolute;
    height: 8%;
    bottom: 0;
    width: 8%;
    z-index: -1;
    background-color: #72e2ae;
    left: 0%;
    animation: animat 5s ease-in-out infinite;
      @keyframes animat {
          0% {
            width: 8%;
          }
          50% {
            width: 60%;
          }
          100% {
            width: 8%;
          }
      }
    }

    span{
        color: #72E2AE;
    }
   }
   ul{
    list-style: none;
    margin:0 20px;
    @media screen and (max-width: 992px) {
     padding-left: 0;
    }
    li{
        font-size: 18px;
        color: #72E2AE;
        margin: 20px 0;
        :nth-child(1){
            color: #fff;
            font-weight: 300;    line-height: 26px;
        }
        :nth-child(8){
         display: flex;
         align-items: center;
        }
        :last-child{
         button{
            cursor: pointer;
            background-color: #009952;
            border: none;
            padding: 10px 14px;
            font-size: 17px;
            color: #fff;
            border-radius: 5px;
         }
        }
        a{
            text-decoration: none;
            ion-icon{
                font-size: 26px;
                padding: 6px 0px;
                color: #fff;
                background-color: #72E2AE;
                width: 40px;
                margin: 0 10px;
                border-radius: 5px;
                transition: 450ms;
                position: relative;
                top: 0;
                :hover{
                    top: -10px;
                background-color: #009952;
                }
            }
        }
        span{
            color: #fff;
        }
    }
   }
`
export default AboutMe