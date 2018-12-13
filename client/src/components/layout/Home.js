//import utils
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'

class Home extends Component {
  
	componentDidMount(){
		if(this.props.auth.isAuthenticated){
			this.props.history.push('/items')
		}
	}
	
	render() {
		return (
			<div className="home">
			<div className="dark-overlay landing-inner text-light">
			<div className="container">
				<div className="row">
				<div className="col-md-12 text-center">
					<h1 className="display-3 mb-4">MyStuff Online listing App</h1>
					<p className="lead"> Listing an item requires an account. Please create one or Login</p>
					<hr />
					<Link to="/register" className="btn btn-outline-primary btn-lg mr-2">Register</Link>
					<Link to="/login" className="btn btn-outline-light btn-lg">Login</Link>
				</div>
				</div>
			</div>
			</div>
		</div>
	)
  }
}

Home.propTypes = {
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
	auth: state.auth
})

export default connect(mapStateToProps)(Home)
