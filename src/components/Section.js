import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import './Section.css'

function Section({ title, backgroundImg, leftBtnText, rightBtnText, speed, power, battery, range, motor }) {
    return (
        <Wrap bgImage={backgroundImg} >
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>Order Online for Touchless Delivery</p>
                </ItemText>
                <Info>
                    {speed &&
                        <Speed>
                            <div className="motor">
                                <div className="speed">
                                    <h4>{speed}</h4>
                                    <p>0-60 mph</p>
                                </div>
                                <div className="battery">
                                    <h4>{battery}</h4>
                                    <p>Dual Motor</p>
                                </div>
                                <div className="power">
                                    <h4>{power}</h4>
                                    <p>Power</p>
                                </div>
                                <div className="range">
                                    <h4>{range}</h4>
                                    <p>Range</p>
                                </div>
                                <div className="motot">
                                    <h4>{motor}</h4>
                                    <p>Motor</p>
                                </div>
                            </div>
                        </Speed>
                    }

                </Info>
                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg" />



                </Buttons>
            </Fade>
        </Wrap>
    )
}

export default Section


const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}

`
const ItemText = styled.div`
padding-top: 16vh;
text-align:center;

@media (max-width: 700px) {
   h1 {
       font-size: 15px;
   }
   @media (max-width: 750px) {
    p {
        font-size: 10px;
        margin:0px 0px;
    }
 
`
const Info = styled.div`
   margin-top:350px;
`

const Speed = styled.div`
 display:flex;
      
h4 {
    margin: 10px 50px;
    margin-right:50px;
    font-size:25px;
    color:black;
} 
`


const ButtonGroup = styled.div`
        display:flex;
        margin-bottom: 30px;
        @media (max-width: 750px) {
            display:flex;
            margin: 0px 0px;
        }
`

const LeftButton = styled.div`
       background-color: rgba(23,26,32,0.8);
       height:40px;
       width:256px;
       color:white;
       display: flex;
       justify-content:center;
       align-items: center;
       border-radius: 100px;
       opaciity:0.85;
       text-transform : uppercase;
       font-size: 12px;
       cursor: pointer; 
       margin:8px;

       &:hover{
        background:white;
        opacity:0.65;
        color: black;
       }
       @media (max-width: 750px) {
         {
             display:flex;
             width:70px;
             height:10px;
            font-size: 6px;
            margin-top:0px;
        }
    }
    
`

const RightButton = styled(LeftButton)`
     background:white;
     opacity:0.65;
     color: black;

     &:hover{
        background-color: rgba(23,26,32,0.8);
        opacity:0.85;
        color: white;
       }

     
 `
const DownArrow = styled.img`
         height:40px;
         overflow-x:hidden;
         animation : animateDown infinite 1.5s;
         @media (max-width: 800px) {
            {
                height:15px;
                margin-top:-285px;
            }
         

`



const Buttons = styled.div`
 
`
