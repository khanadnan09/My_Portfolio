import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = (props) => {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return (
        <Project data-aos="zoom-in">
            <div><img src={props.img} alt="/" /></div>
            <section>
                <span>{props.name}</span>
                <span>{props.desc}</span>
                <Buttons>
                    <a href={props.href} target=" ">View Demo</a>
                    <a href={props.github} target=" ">Github <ion-icon name="logo-github" style={{ paddingLeft: "10px" }}></ion-icon></a>
                </Buttons>
            </section>
        </Project>
    )
}
const Buttons = styled.div`
  margin-top: 20px;display: flex;
 a{
    background-color: #009952;
    text-decoration: none;
    margin: 0 10px 0 0;
    color: #fff;
    padding: 8px 16px;
    border-radius: 5px;
    display: flex;
    width: fit-content;
    align-items: center;
 }
`
const Project = styled.div`
    width: 350px;min-width: 280px;
    height: fit-content;
    margin: 10px 20px 30px;
    background-color: #1B222E;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    overflow: hidden;
    transition: 450ms;
    :hover{
        transform: scale(1.08);
        img{
         transform: scale(1.2);
       } 
    }
    div{
        overflow: hidden;
        position: relative;
    }
   img{
    transition: 450ms;height: 350px; width: 100%;overflow: hidden;
   } 
   section{ 
    span{
        padding-bottom:7px;
        color: #fff;
        :nth-child(1){
            display: block;
            padding-top: 10px;
            font-size: 18px;
        }
        :nth-child(2){
            color: #a3a3a3;
            font-size: 16px;
            font-weight: 300;
            line-height: 22px;
        }
    }
   }
`
export default ProjectCard