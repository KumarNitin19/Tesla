import React, { useState } from 'react'   
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import "./Signup.css";
import PublicSharpIcon from '@material-ui/icons/PublicSharp';
import { auth } from './firebase';
import { login } from './userSlice';
import styled from "styled-components";

function Signup() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();


    const signUp = (e) =>{
        e.preventDefault();
        if(!fname){
            return alert("Please Enter Your First Name!!");
        } 
        if(!lname){
            return alert("Please Enter Your Last Name!!");
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:fname
            }).then(() =>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:fname
                }))
                history.push('/teslaaccount')
            })
        }).catch((error) => alert(error.message));
    }


    return (
        <div className="signup">
             <div className="signup__header">
                <div className="signup__logo">
                    <Link>
                       <img src="./images/logo.svg" />
                    </Link>
                </div>
                <div className="signup__language">
                   <PublicSharpIcon /> <span>en-US</span>
                </div>
            </div>
            <div className="signup__info">
                <h1>Create Account</h1>
                <form className="signup__form">
                   <label htmlFor="fname">First Name</label>
                   <input type="text" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
                   <label htmlFor="lname">Last Name</label>
                   <input type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
                   <label htmlFor="email">Email Address</label>
                   <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                   <label htmlFor="password">Password</label>
                   <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                 
                   <ButtonOne  type="submit" onClick={signUp} >Create Account </ButtonOne> 
             
                </form>
            <div className="signup__divider">
                    <hr/> <span>OR</span> <hr/>
                </div>
                    <Link to='/login'>
                   <ButtonTwo type="submit" > Sign In</ButtonTwo>
                    </Link>
            </div>
        </div>
    )
}

export default Signup



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