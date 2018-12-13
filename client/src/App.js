
//import utils
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'


// import components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/layout/Home'
import Login from  './components/authentication/Login'
import Register from './components/authentication/Register'

//import files
import store from './store'

//import CSS
import './App.css';



class App extends Component {
  render() {
    return (
		<Provider store = {store}>
			<Router>
				<div className="App">
					<Navbar/>
					{
						//surrounding the Home component with a Route because I want to display it only on a single path
					}
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
