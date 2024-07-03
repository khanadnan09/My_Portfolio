import React, { useEffect } from 'react'
import styled from 'styled-components'
import polygon from '../img/Polygon Luminary.svg'
import Headin from './Headin'
import Resume from '../img/Adnan_Frontend_Dev_Resume.pdf'
import myPic from '../img/myPic.png'
import AOS from "aos";
import "aos/dist/aos.css";
const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <AboutContainer id='about'>
            <Headin title="About Me" />
            <AboutSection>
                <img className='polygon' src={polygon} alt="."
                    style={{
                        position: "absolute",
                        opacity: ".1",
                        width: "100%",
                        pointerEvents: "none"
                    }} />
                <ImageSection data-aos="fade-right"
                    data-aos-easing="ease-in-sine">
                    <img src={myPic} alt="" />
                </ImageSection>
                <DetailSection data-aos="fade-left"
                    data-aos-easing="ease-in-sine">
                    <div>Hello I'm <span>Adnan Khan</span> </div>
                    <ul>
                        <li>I am a highly proficient front-end developer with a strong foundation in HTML, CSS and JavaScript, utilizing the latest web technologies to create responsive, interactive user interfaces. My expertise in React.js allows me to efficiently build dynamic, single page applications for seamless user experience.</li>
                        <li>Age : <span>21</span> </li>
                        <li>Country : <span>India</span> </li>
                        <li>Languages : <span>English,Hindi </span></li>
                        <li>Freelance : <span>Available</span> </li>
                        <li>Full Time Job : <span>Available</span> </li>
                        <li>Skills : <span>HTML5 , CSS3 , JS , React.js ...</span> </li>
                        <li>Follow me on : <a href="https://www.linkedin.com/in/adnan-khan-b40b5a30a/"><ion-icon name="logo-linkedin"></ion-icon></a><a target=" " href='https://github.com/khanadnan09'><ion-icon name="logo-github"></ion-icon></a></li>
                        <li><a href={Resume} download="Adnan_Frontend_Dev_Resume.pdf"><button>Download Resume</button></a></li>
                    </ul>
                </DetailSection>
            </AboutSection>
        </AboutContainer>
    )
}
const AboutContainer = styled.div`
     overflow-x: hidden;
`
const AboutSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  @media screen and (max-width: 992px) {
   flex-direction: column;
   .polygon{
       height: 300px;
       opacity: 0.3 !important;
   }
 }
`
const ImageSection = styled.div`
   display: flex;
   justify-content: center;
   position: relative;
   display: flex;
    align-items: center;
    img{
        padding: 15px;
         width: 500px;
         height: 500px;
         min-width: 280px;
         border: 7px solid #1b222e;
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
    padding-left: 0;
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