import React from 'react'
import styled from 'styled-components'
import Responsive from '../img/Responsive.svg'
import hero2 from '../img/hero2.svg'
const Service = () => {
    return (
        <>
            <ServiceContainer>
                <TextConatiner>
                    <div>What I will Provide You ?</div>
                    <span>As a front-end developer, I specialize in creating visually appealing, user-centered websites and applications using web technologies such as HTML, CSS, JavaScript, and React.js. I implement  <span style={{ color: "#72e2ae", fontSize: "22px", fontWeight: "400px" }}>Responsive Web Design</span> principles, utilizing HTML and CSS to automatically adjust the layout and elements of the website to ensure optimal viewing experience across different devices and screen sizes, including desktops, tablets, and smartphones. I focus on building single page applications that provide seamless navigation and improve user engagement. </span>
                </TextConatiner>
                <ImageConatiner>
                    <img src={Responsive} alt="" />
                </ImageConatiner>
            </ServiceContainer>
            <ServiceContainer className='Stwo'>
                <ImageConatiner>
                    <img src={hero2} alt="." style={{
                        marginLeft: "82px"
                    }} />
                </ImageConatiner>
                <TextConatiner className='Ttwo' style={{ padding: "0px 120px 0px 32px" }}>
                    <div>Expertise in building React-based applications.</div>
                    <span>As a front-end developer with extensive experience in building React-based applications, I possess a deep understanding of React.js and its ecosystem. My expertise in React includes proficiency in JSX, component lifecycle methods, Virtual DOM, state management, and more. I am well-versed in utilizing libraries and frameworks like Redux, React Router and Firebase to create efficient and maintainable code. I have experience in creating reusable components and implementing best practices in React development. Additionally, I am experienced in utilizing version control tools like Git and Github to manage and collaborate on code. </span>
                    {/* <span>As a front end developer working with React.js i'm responsible for designing and implementing UI components for web applications, providing clean code that’s also maintainable. </span> */}
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
        @media screen and (max-width: 490px) {
            font-size: 29px;
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