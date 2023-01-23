import React from 'react'
import styled from 'styled-components'

const Headin = (props) => {
  return (
    <Header><span>{props.title}</span></Header>
  )
}
const Header = styled.div`
 display: flex;
 justify-content: center;
 font-size: 30px;
 font-weight: bolder;
 margin-bottom: 50px;
 color: #fff;
 border-top: 2px solid #fff;
 padding: 46px 0 0 0;
 @media screen and (max-width: 480px) {
    font-size: 23px;
       }
  span{
     border: 2px solid #009952;
     padding: 7px 20px;
     @media screen and (max-width: 992px) {
      padding: 0px 17px;
       }
     position: relative;
     ::after{
        content: "";
      position: absolute;
      height: 100%;
      width: 50%;
      z-index: -1;
      background-color: #009952;
      left: 0%;
      top: 0;
     }
 }
`
export default Headin