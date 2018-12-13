import React, { Component } from 'react'

class Home extends Component {
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
				<a href="register.html" className="btn btn-outline-primary btn-lg mr-2">Register</a>
				<a href="login.html" className="btn btn-outline-light btn-lg">Login</a>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	)
  }
}

export default Home
