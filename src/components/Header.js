import React, {useState} from 'react';
import ListIcon from '@material-ui/icons/List';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import styled from "styled-components";
import {selectCars} from "../carSlice";
import { useSelector } from 'react-redux';
import './Header.css'



function Header() {

    const [burgerStatus,setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    return (
     
       <div className="container" >
           <a href="/">
               <img src="/images/logo.svg" alt=""/>
           </a>
           <div className="menu" >
               {cars && cars.map((car,index) => (
                  <a key={index} href="#">{car}</a>
               )
               )}
           
               </div>

               < div className="RightMenu">
                    <a href="#">Shop</a>
                    <a href="/login"  >Login</a>
                    <CustomMenu onClick={() => setBurgerStatus(true)} />
               </div>
                    <BurgerNav show={burgerStatus} >
                    <CloseWrapper>
                   <CustomClose onClick={() => setBurgerStatus(false)} />
                   </CloseWrapper>
                   {cars && cars.map((car,index) => (
                   <li key={index} ><a href="#">{car}</a></li>
               )
               )}
                   <li><a href="#">Existing Inventory</a></li>
                   <li><a href="#"></a>Used Inventory</li>
                   <li><a href="#"></a>Trade-in</li>
                   <li><a href="#"></a>None</li>
              </BurgerNav>
       </div>
             
       
    )
              
}

export default Header



const CustomMenu = styled(ListIcon)`
max-height:60px;
        cursor:pointer;
`

const BurgerNav = styled.div`
postion:fixed;
margin-right:-20px;
background:radial-gradient(#080808, #00000059);
width:300px;
height:100vh;
margin-top:92vh;
bottom:0;
list-style:none;
z-index:16;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition:transform 0.2s;
li{
    padding: 15px 0;
    font-weight:600;

    &:hover {
        padding: 10px;
        background:none;
        color:black;
        opacity:0.85;
    }
    a {
        &:hover {
            padding: 10px;
            background:none;
            color:black;
            opacity:0.85;
        }
    }
}
}


}    
`

const CustomClose = styled(CancelSharpIcon)`
        cursor:pointer;
`

const CloseWrapper = styled.div`
       display:flex;
       justify-content:flex-end;
`