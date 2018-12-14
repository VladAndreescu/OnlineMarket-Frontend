//import utils
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


//import actions
import {userLogout} from '../../actions/authActions'


class Navbar extends Component {
	
	onLogoutClick(e){
		e.preventDefault()
		this.props.userLogout()
	}
	
	render() {
	
	const {isAuthenticated} = this.props.auth

	const loggedInLinks = (
		<ul className="navbar-nav ml-auto">
			<li className="nav-item">
            	<Link to="/items" className="nav-link" >List an Item</Link>
          	</li>
          	<li className="nav-item">
            	<Link to="/" onClick={this.onLogoutClick.bind(this)} className="nav-link">Log out</Link>
          	</li>
          	
        </ul>

	)

	const guestLinks = (
		<ul className="navbar-nav ml-auto">
          	<li className="nav-item">
            	<Link to="/register" className="nav-link">Register</Link>
          	</li>
          	<li className="nav-item">
            	<Link to="/login" className="nav-link" >Login</Link>
          	</li>
    	</ul>
	)

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    		<div className="container">
      			<Link to="/" className="navbar-brand" >MyStuff</Link>
      			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        			<span className="navbar-toggler-icon"></span>
      			</button>

      			<div className="collapse navbar-collapse" id="mobile-nav">
        			<ul className="navbar-nav mr-auto">
          				<li className="nav-item">
            				<Link to="/allposts" className="nav-link" > View Listed Items </Link>
         				 </li>
        			</ul>
					{isAuthenticated ? loggedInLinks : guestLinks}
        			
      			</div>
    		</div>
  		</nav>
	)
  }
}

Navbar.propTypes = {
	userLogout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
	auth: state.auth
})

export default connect(mapStateToProps, {userLogout})(Navbar)
