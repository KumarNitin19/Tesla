import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import PublicSharpIcon from '@material-ui/icons/PublicSharp';
import { auth } from './firebase';
import { login } from './userSlice';
import { useDispatch } from 'react-redux';
import styled from "styled-components";

function Login() {

     const [email,setEmail] = useState('');
     const [password,setPassword] = useState('');
     const dispatch = useDispatch();
     const history = useHistory();

     

     const signIn = e => {
         e.preventDefault();
         auth.signInWithEmailAndPassword(email,password).then((userAuth) =>{
            dispatch(login({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:userAuth.user.displayName,
            })
            )
            history.push('/teslaaccount')
          }).catch((error) => alert(error.message))
     }

    return (
        <div className="Login">
            <div className="login__header">
                <div className="login__logo">
                    <Link to="/">
                       <img src="./images/logo.svg" />
                    </Link>
                </div>
                <div className="login__language">
                   <PublicSharpIcon /> <span>en-US</span>
                </div>
            </div>
            <div className="login__info">
                <h1>Sign-In</h1>
                <form className="login__form">
                   <label htmlFor="email">Email Address</label>
                   <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                   <label htmlFor="password">Password</label>
                   <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <ButtonOne type="submit" onClick={signIn}>Sign In</ButtonOne>
                </form>
            <div className="login__divider">
                    <hr/> <span>OR</span> <hr/>
                </div>
                    <Link to='/signup'>
                    <ButtonTwo type="submit" >Create Account</ButtonTwo>
                    </Link>
            </div>
        </div>
    )
}

export default Login




const ButtonOne = styled.div`
background-color: rgba(23,26,32,0.8);
height:40px;
width:300px;
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
 border:2px solid black;
}
@media (max-width: 900px) {
  {
      width:300px;
      height:40px;
     font-size: 13px;
     margin-top:0px;
     color:white;
     font-weight:400;
 }
}

`

const ButtonTwo = styled(ButtonOne)`
background:white;
opacity:0.65;
color: black;
border:2px solid black;

&:hover{
   background-color: rgba(23,26,32,0.8);
   opacity:0.85;
   color: white;
   border:2px solid black;
  }
`