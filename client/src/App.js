
//import utils
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'
import PrivateRoute from './utils/PrivateRoute'


// import components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/layout/Home'
import Login from  './components/authentication/Login'
import Register from './components/authentication/Register'

//import files
import store from './store'

//import functions
import setAuthenticationToken from './utils/setAuthenticationToken'
import {setCurrentUser, userLogout} from './actions/authActions'

//import CSS
import './App.css';

//Check if the token exists
if(localStorage.jwt_token){
	//Insert the token into Authorization Header
	setAuthenticationToken(localStorage.jwt_token)

	//Retrieve user information by decoding the token
	const decoded = jwt_decode(localStorage.jwt_token)

	//Set the value for user and isAuthenticated
	store.dispatch(setCurrentUser(decoded))

	//Check if the expiration time has passed
	const current = Date.now() / 1000
	if(decoded.exp < current){
		//Logout the user
		store.dispatch(userLogout())

		//Redirect user to login page
		window.location.href = '/login'
	}
}else{
	console.log('No user is currently logged in')
}

class App extends Component {
  render() {
    return (
		<Provider store = {store}>
			<Router>
				<div className="App">
					<Navbar/>
					<Route  exact path="/" component={Home}/> 
					<div className="container">
						<Route exact path="/register" component = {Register} />
						<Route exact path="/login" component ={Login} />
						
					</div>
					<Footer/>
				</div>
			</Router>
	  </Provider>
    );
  }
}

export default App;
