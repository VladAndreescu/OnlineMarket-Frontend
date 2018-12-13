import React, { Component } from 'react'

class Login extends Component {
	constructor(){
		super()
		this.state ={
			email: '',
			password: '',

			errors: {}
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	//create onChange function
	onChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	//create onSubmit function
	onSubmit(e){
		e.preventDefault();
		
		//display the existing user
		const newUser = {
			email: this.state.email,
			password: this.state.password,
		}

		console.log(newUser)
	}
	
	render() {
		return (
			<div className="loginUser">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-3 text-center" >Log In</h1>
					
							<form onSubmit={this.onSubmit}>
								<div className="form-group">
									<input 
										type="email" 
										className="form-control" 
										placeholder="Email Address" 
										name="email"
										value={this.state.email}
										onChange={this.onChange} 
										/>
								</div>
								<div className="form-group">
									<input 
										type="password" 
										className="form-control" 
										placeholder="Password" 
										name="password"
										value={this.state.password}
										onChange={this.onChange} 
										/>
								</div>
								<div className="col-md-6 m-auto">
									<input type="submit" className="btn btn-info btn-block mt-4" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login
