
//import utils
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// import components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/layout/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
		<div className="App">
			<Navbar/>
			 {
				 //surrounding the Home component with a Route because I want to display it only on a single path
			 }
			<Route path="/" component={Home}/> 
			<Footer/>
		</div>
	  </Router>
    );
  }
}

export default App;
