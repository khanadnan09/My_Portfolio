import React from 'react'
import styled from 'styled-components'
// import computer from '../img/computer.png'
// import gif from '../img/gif1.gif'
import Responsive from '../img/Responsive.svg'
import hero2 from '../img/hero2.svg'
const Service = () => {
    return (
        <>
            <ServiceContainer>
                <TextConatiner>
                    <div>What I will Provide You ?</div>
                    <span>I am a front-end developer builds the front-end portion of websites.I creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site also provides the power of React.js to build single page applications. </span>
                    <span style={{ color: "#72e2ae", fontSize: "22px", fontWeight: "400px" }}>Responsive Web Design.</span>
                    <span> Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones).</span>
                </TextConatiner>
                <ImageConatiner>
                    <img src={Responsive} alt="" />
                    {/* <img src={computer} alt="" /> */}
                    {/* <img src={gif} alt="" /> */}
                </ImageConatiner>
            </ServiceContainer>
            <ServiceContainer className='Stwo'>
                <ImageConatiner>
                    <img src={hero2} alt="." style={{
                        marginLeft: "82px"
                    }} />
                </ImageConatiner>
                <TextConatiner className='Ttwo' style={{ padding: "0px 120px 0px 32px" }}>
                    <div>I Worked with React Js.</div>
                    <span>ReactJS is a JavaScript library for building user interfaces, maintained by Facebook and several individual developers/companies. It is a popular, open-source, front-end JavaScript library that is prominent in the web development domain, especially for single-page applications. It is widely used to create fast and interactive UI elements for web and mobile apps. </span>
                    <span>As a front end developer working with React.js i'm responsible for designing and implementing UI components for web applications, providing clean code that’s also maintainable. </span>
                </TextConatiner>
            </ServiceContainer>
        </>
    )
}
const ServiceContainer = styled.div`
    display: flex;
    margin-bottom: 100px;
    align-items:center ;
    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
`
const TextConatiner = styled.div`
      width: 50%;
      padding: 0px 13px 0px 120px;
      @media screen and (max-width: 1200px) {
         width: 100%;
         padding-right: 100px;
    }
      @media screen and (max-width: 1200px) {
         padding: 0 20px;
    }
     div{
        font-size: 44px;
        color: #72e2ae;
        margin-bottom: 17px;
        @media screen and (max-width: 550px) {
            font-size: 36px;
       }
     }
     span{
        font-size: 17px;
        color: #fff;
        font-weight: 300;
        line-height: 33px;
        @media screen and (max-width: 480px) {
            font-size: 16px;
       }
     }
`
const ImageConatiner = styled.div`
    width: 50%;
    position: relative;
    @media screen and (max-width: 1200px) {
         width: 100%;    display: flex;
    justify-content: center;
    }
    img{
        width: 543px;
        max-width: 100%;
        margin-left: 10px;
        padding-left: 30px;
        @media screen and (max-width: 1200px) {
            margin-left: 0px;
            margin-top: 30px;
            padding:0 20px;
       }
        &:nth-child(2){
            position: absolute;
            left: 0;
            padding: 17px 21px 33px 52px;
            height: 288px;
            top: 0;
        }
    }
`
export default Service