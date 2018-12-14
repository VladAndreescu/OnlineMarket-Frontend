//import utils
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'

//import actions
import {userAuthenticate} from '../../actions/authActions'

class Login extends Component {
	constructor(){
		super()
		//initial state
		this.state ={
			email: '',
			password: '',

			errors: {}
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	//create onChange function which link the user input to the specific target in the state
	onChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	//create onSubmit function which calls the function that authenticate the user
	onSubmit(e){
		e.preventDefault();
		
		//populate the userData with the user's input
		const userData = {
			email: this.state.email,
			password: this.state.password,
		}

		//call the userAuthenticate function 
		this.props.userAuthenticate(userData)
	}


	componentWillReceiveProps(nextProps){
		//check if the user is authenticated
		//if he is than redirect him to /allposts page
		if(nextProps.auth.isAuthenticated){
			this.props.history.push('/allposts')
		}
		//check if there are any errors in user's input
		if(nextProps.errors){
			//populate the errors object with the errors received
			this.setState({errors: nextProps.errors})
		}
	}

	componentDidMount(){
		//check if the user is authenticated
		//if he is than redirect him to /allposts page
		if(this.props.auth.isAuthenticated){
			this.props.history.push('/allposts')
		}
	}
	
	render() {
		//using destructuring in order to retrieve the errors from the state
		const { errors } = this.state


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
										className={classnames('form-control', {
											'is-invalid': errors.email
										})}
										placeholder="Email Address" 
										name="email"
										value={this.state.email}
										onChange={this.onChange} 
										/>
										{errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
								</div>
								<div className="form-group">
									<input 
										type="password" 
										className={classnames('form-control', {
											'is-invalid': errors.password
										})} 
										placeholder="Password" 
										name="password"
										value={this.state.password}
										onChange={this.onChange} 
										/>
										{errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
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

// declaring the PropTypes for Login component
Login.propTypes = {
	userAuthenticate: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

//developed the mapStateToProps function for Login component
//it will retrieve the state of authentication as well as the information about the current user logged in and th errors
const mapStateToProps = (state) =>({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps, {userAuthenticate})(Login)
