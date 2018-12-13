
//import utils
import React, { Component } from 'react'
import classnames from 'classnames'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'


//import actions
import {userRegister} from '../../actions/authActions'

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

		//Create a new user based on the user inputs
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		}
		
		this.props.userRegister(newUser, this.props.history)
		
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.errors){
			this.setState({errors: nextProps.errors})
		}
	}
	
	render() {
		//using destructuring in order to retrieve the errors from the state
		const { errors } = this.state

		return (
			<div className="registerUser">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-3 text-center mb-4">Register</h1>
							<form noValidate onSubmit={this.onSubmit}>
								<div className="form-group">
									<input 
										type="text" 
										className={classnames('form-control', {
											'is-invalid': errors.name
										})}
										placeholder="Name" 
										name="name" 
										value={this.state.name}
										onChange={this.onChange}
										
										/>
										{errors.name && (<div className="invalid-feedback">{errors.name}</div>)}

								</div>
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
								<div className="form-group">
									<input 
										type="password" 
										className={classnames('form-control', {
											'is-invalid': errors.password2
										})} 
										placeholder="Confirm Password" 
										name="password2"
										value={this.state.password2} 
										onChange={this.onChange}
										
										/>
										{errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
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

Register.propTypes = {
	userRegister: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps, {userRegister} )(withRouter(Register))
