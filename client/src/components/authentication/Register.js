import React, { Component } from 'react'

class Register extends Component {
	constructor(){
		super()
		this.state ={
			name: '',
			email: '',
			password: '',
			password2: '',

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
		
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		}

		console.log(newUser)
	}
	
	render() {
	return (
		<div className="registerUser">
    		<div className="container">
      			<div className="row">
        			<div className="col-md-8 m-auto">
          				<h1 className="display-3 text-center">Register</h1>
          				<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<input 
									type="text" 
									className="form-control form-control" 
									placeholder="Name" 
									name="name" 
									value={this.state.name}
									onChange={this.onChange}
									 />
							</div>
							<div className="form-group">
								<input 
									type="email" 
									className="form-control form-control" 
									placeholder="Email Address" 
									name="email" 
									value={this.state.email}
									onChange={this.onChange}
									/>
							</div>
							<div className="form-group">
								<input 
									type="password" 
									className="form-control form-control" 
									placeholder="Password" 
									name="password" 
									value={this.state.password}
									onChange={this.onChange}
									/>
							</div>
							<div className="form-group">
								<input 
									type="password" 
									className="form-control form-control" 
									placeholder="Confirm Password" 
									name="password2"
									value={this.state.password2} 
									onChange={this.onChange}
									/>
							</div>
							<div className="col-md-6 m-auto">
								<input type="submit" className="btn btn-primary btn-block "/>
							</div>
          				</form>
        			</div>
      			</div>
    		</div>
  		</div>
	)
  }
}

export default Register
