import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route,  BrowserRouter as Router, Switch, Redirect  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import { auth } from './firebase';
import Login from './Login';
import Signup from './Signup';
import Teslaaccount from './Teslaaccount';
import { login, logout, selectUser } from './userSlice';

function App() {

 const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() =>{
         auth.onAuthStateChanged((userAuth) =>{
                if(userAuth){
                  dispatch(
                    login({
                    email:userAuth.email,
                    uid:userAuth.uid,
                    displayName:userAuth.displayName,
                  }))
                } else{
                  dispatch(logout())
                }
         })
  },[dispatch])

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path='/'>
      <Header/>
      < Home/>
      </Route>
      <Route exact path='/login'>
        {user ?<Redirect to='/teslaaccount'/> : <Login/>}
        </Route>
        <Route exact path='/signup' >
        <Signup/>
        </Route>
        <Route exact path='/teslaaccount' >
        {!user ?<Redirect to='/login'/> : <Teslaaccount /> }
        </Route>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
