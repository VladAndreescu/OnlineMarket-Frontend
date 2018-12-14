
//importing utils
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classnames from 'classnames'

//importing actions
import {makeOffer} from '../../actions/postActions'



class ContactSeller extends Component {
	constructor(props){
		super(props);
		//initial state
		this.state ={
			value: '',
			text: '',
			errors: {}
			
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	//create onChange function which link the user input to the specific target in the state
	onChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	//create onSubmit function which calls the function that creates a new offer for a post based on the postId
	onSubmit(e){
		e.preventDefault()

		//using destructuring in order to retrieve current user and postId
		const {user} = this.props.auth
		const {postId} = this.props

		//Create a new offer based on the user inputs
		const newOffer ={
			value: this.state.value,
			text: this.state.text,
			name: user.name,
		}
		this.props.makeOffer(postId, newOffer)
		//refresh the inputs after the offer was created
		this.setState({
			value: '',
			text: ''
		})
	}
	//populate the error object if there are errors
	componentWillReceiveProps(nextProps){
		if(nextProps.errors){
			this.setState({errors: nextProps.errors})
		}
	}

  render() {
	//using destructuring in order to retrieve the errors
	const {errors} = this.state
	
	return (
		<div className="contact-seller mb-3">
			<div className="card card-info">
		  		<div className="card-header bg-success text-black " >
					Send an offer
		  		</div>
		  		<div className="card-body">
					<form onSubmit={this.onSubmit}>
			  			<div className="form-group">
							<div className="row">
								<div className="col-md-3">
									<p style={{fontSize: '20px'}}>Value:</p>
									<input 
										name="value" 
										type="text"
										className={classnames('form-control mb-3', {
											'is-invalid': errors.value
										})}
										placeholder="Insert a value" 
										value={this.state.value}
										onChange={this.onChange}
									/>
									{errors.value && (<div className="invalid-feedback">{errors.value}</div>)}
								</div>
								<div className="col-md-5 " style={{marginLeft: '100px'}}>
									<p style={{fontSize: '20px'}}>Offer:</p>
									<input 
										name="text"
										type="text"
										className={classnames('form-control mb-3', {
											'is-invalid': errors.text
										})}
										placeholder="Send an offer"
										value={this.state.text}
										onChange={this.onChange}
									/>
									{errors.text && (<div className="invalid-feedback">{errors.text}</div>)}
								</div>
							</div>
									
			  			</div>
			  			<button type="submit" className="btn btn-success">Make Offer</button>
					</form>
		 		 </div>
			</div>
	  	</div>
	)
  }
}
// declaring the PropTypes for ContactSeller component
ContactSeller.propTypes = {
	auth: PropTypes.object.isRequired,
	postId: PropTypes.string.isRequired,
	errors: PropTypes.object.isRequired
	
}
//developed the mapStateToProps function for ContactSeller component
//it will retrieve the state of authentication as well as the information about the current user logged in and th errors
const mapStateToProps = (state) =>({
	auth: state.auth,
	errors: state.errors
})
export default connect(mapStateToProps,{makeOffer} )(ContactSeller)