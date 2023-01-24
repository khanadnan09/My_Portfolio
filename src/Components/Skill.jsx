import React from 'react'
import styled from 'styled-components'
import Headin from './Headin'
import bootstarp from '../img/bootstarp.png'
import figma from '../img/figma.png'
import firebase from '../img/firebase.png'
import Styled from '../img/styledComponent.png'
import Redux from '../img/Redux.png'
import Router from '../img/react-router.png'
import Github from '../img/github.png'
import Git from '../img/git.png'
import Service from './Service'

const Skill = () => {
  return (
    <>
      <SkillConatiner id='skills'>
        <Headin title="Skills & Technologies" />
        <LanguageContainer>
          <Language><ion-icon name="logo-html5"></ion-icon>HTML5</Language>
          <Language><ion-icon name="logo-css3"></ion-icon>CSS3</Language>
          <Language><ion-icon name="logo-javascript"></ion-icon>JavaScript</Language>
          <Language><ion-icon name="logo-react"></ion-icon>React.Js</Language>
        </LanguageContainer>
        <Technologies>
          <Tech>
            <div><img src={Redux} alt="." />Redux<span style={{ marginLeft: "auto" }}>50%</span></div>
            <Bar>
              <span style={{ width: "50%" }}></span>
            </Bar>
          </Tech>
          <Tech>
            <div><img src={Router} alt="." />React-Router<span style={{ marginLeft: "auto" }}>60%</span></div>
            <Bar>
              <span style={{ width: "60%" }}></span>
            </Bar>
          </Tech>
          <Tech>
            <div><img src={bootstarp} alt="." />BootStrap<span style={{ marginLeft: "auto" }}>80%</span></div>
            <Bar>
              <span style={{ width: "80%" }}></span>
            </Bar>
          </Tech>
          <Tech>
            <div><img src={Styled} alt="." />Styled Components<span style={{ marginLeft: "auto" }}>80%</span></div>
            <Bar>
              <span style={{ width: "80%" }}></span>
            </Bar>
          </Tech>
          <Tech>
            <div><img src={figma} alt="." />Figma<span style={{ marginLeft: "auto" }}>50%</span></div>
            <Bar>
              <span style={{ width: "50%" }}></span>
            </Bar>
          </Tech>
          <Tech>
            <div><img src={firebase} alt="." />Firebase<span style={{ marginLeft: "auto" }}>40%</span></div>
            <Bar>
              <span style={{ width: "40%" }}></span>
            </Bar>
          </Tech>
          <Tech>
            <div><img src={Github} alt="." />GitHub <span style={{ marginLeft: "auto" }}>80%</span></div>
            <Bar>
              <span style={{ width: "80%" }}></span>
            </Bar>
          </Tech>
          <Tech>
            <div><img src={Git} alt="." />Git<span style={{ marginLeft: "auto" }}>80%</span></div>
            <Bar>
              <span style={{ width: "80%" }}></span>
            </Bar>
          </Tech>
        </Technologies>
        <Service />
      </SkillConatiner>
    </>
  )
}
const Technologies = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 50px 100px;
    flex-wrap: wrap;
    @media screen and (max-width: 992px) {
      margin: 50px 0px;
       }
`
const Tech = styled.div`
   width: 100%;
   margin: 16px 20px;
   div{
    display: flex;
    align-items: center;
    color: #fff;
    margin-bottom: 10px;
   }
 img{
    height: 30px;
    width: 30px;
    object-fit: contain;
    margin-right: 10px;
 }
`
const Bar = styled.div`
      width: 100%;
    height: 17px;
    border: 2px solid #161c28;
    position: relative;
    border-radius: 23px;
    background-color: #2e3136;
   span{
    position: absolute;
    height: 100%;
    background: -webkit-linear-gradient( 0deg,rgb(21 131 80) 0%,rgb(114 226 174) 100% );
    border-radius: 23px;
   }
`
const SkillConatiner = styled.div`
    margin-top: 100px;
`
const LanguageContainer = styled.div`
   display: flex;
   justify-content: space-evenly;
   flex-wrap: wrap;
    gap: 30px;
`
const Language = styled.div`
   border: 1px solid #091122;
    padding: 30px;
    background-color: #091122;
    border-radius: 50%;
    margin-top: 10px;
    animation: water-wave 6s linear infinite;
    color: #72E2AE;display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500; 
    @media screen and (max-width: 480px) {
         padding: 20px;
       }
   @keyframes water-wave {
          0% {
            border-radius: 89% 74% 74% 106% / 41% 61% 51% 101%;
    box-shadow: 2px 2px 0px 5px #000;
          }
          25% {
            border-radius: 30% 77% 40% 55% / 50% 30% 70% 48%;
    box-shadow: 6px 5px 0px 11px #030a1a;
          }
          50% {
            border-radius: 3% 97% 15% 85% / 72% 0% 100% 28%;
    box-shadow: 6px 5px 0px 11px #030a1a;
          }
          75% {
            border-radius: 47% 64% 52% 100% / 56% 40% 68% 52%;
    box-shadow: 2px 2px 0px 5px #000;
          }
          100% {
            border-radius: 89% 74% 74% 106% / 41% 61% 51% 101%;
    box-shadow: 2px 2px 0px 5px #000;
          }
          }
    ion-icon{
        height: 100px;
        width: 100px;
        color: #fff;
        margin-bottom: 10px;
        @media screen and (max-width: 480px) {
          height: 90px;
          width: 90px;
       }
    }
`
export default Skill