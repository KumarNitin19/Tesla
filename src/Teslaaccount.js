import { Link } from '@material-ui/core'
import ListIcon from '@material-ui/icons/List';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import styled from "styled-components";
import './teslaaccount.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './userSlice';
import Car from './Car';
import { selectCars } from './carSlice';
import { auth } from './firebase';
import { useHistory } from 'react-router';

function Teslaaccount() {
  
    const dispatch =  useDispatch();
    const cars = useSelector(selectCars);
    const user = useSelector(selectUser);
    const [burgerStatus, setBurgerStatus] = useState(false);
    const  history = useHistory();


    const logoutOfApp = () => {
           auth.signOut().then(() =>{
               dispatch(logout())
               history.push('/')
           }).catch((error) => alert(error.message))
    }




    return (


        <div className="teslaaccount__body">
            <div className="container" >
                <a>
                    <img src="/images/logo.svg" alt="" />
                </a>
                <div className="menu" >
                    {cars && cars.map((car, index) => (
                        <a key={index} href="#">{car}</a>
                    )
                    )}

                </div>

                < div className="RightMenu">
                    <a href="#">Shop</a>
                    <a href="/login" >Tesla Account</a>
                    <a href="#" onClick={logoutOfApp} >Log Out</a>
                    <CustomMenu onClick={() => setBurgerStatus(true)} />
                </div>
                <BurgerNav show={burgerStatus} >
                    <CloseWrapper>
                        <CustomClose onClick={() => setBurgerStatus(false)} />
                    </CloseWrapper>
                    {cars && cars.map((car, index) => (
                        <li key={index} ><a href="#">{car}</a></li>
                    )
                    )}
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#"></a>Used Inventory</li>
                    <li><a href="#"></a>Trade-in</li>
                    <li><a href="#"></a>None</li>
                </BurgerNav>
            </div>  
      
            <div className="teslaAccount__car">
            <div className="teslaAccount__info">
                <h4>{user?.displayName + "'s" + " " + "Tesla"}</h4>
            <div className="teslaAccount__infoRight">
                <Link>Home</Link>
                <Link>Account</Link>
                <Link>History</Link>
                <Link onClick={logoutOfApp} >Sign Out</Link>
                </div>
            </div >
            <div className="teslaAccount_carImage">
                <Car imgSrc="./images/image1.jpeg"
                    model="Model S"
                    Testdrive />
                <Car imgSrc="./images/image2.jpeg"
                    model="Model Y"
                     />
                <Car imgSrc="./images/image3.jpeg"
                    model="Model 3"
                    Testdrive />
                    </div>
                  </div>
            </div>
        

    )
}

export default Teslaaccount



const CustomMenu = styled(ListIcon)`
    max-height:60px;
            cursor:pointer;
    `

const BurgerNav = styled.div`
    postion:fixed;
    margin-right:-20px;
    background:whitesmoke;
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
            background:black;
            color:white;
            opacity:0.85;
        }
        a {
            &:hover {
                padding: 10px;
                background:black;
                color:white;
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


