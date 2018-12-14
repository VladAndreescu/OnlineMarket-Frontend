import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {createPost} from '../../actions/postActions'



class Item extends Component {
	constructor(props){
		super(props);
		this.state ={
			category: '',
			description: '',
			item_condition: '',
			asked_price: '',
			city: '',

			errors: {}
			
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit(e){
		e.preventDefault()

		const {user} = this.props.auth
		const newPost = {
			category: this.state.category,
			description: this.state.description,
			item_condition: this.state.item_condition,
			asked_price: this.state.asked_price,
			city: this.state.city,
			name: user.name,
		}

		this.props.createPost(newPost)
		this.setState({
			category: '',
			description: '',
			item_condition: '',
			asked_price: '',
			city: ''
		})
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.errors){
			this.setState({errors: nextProps.errors})
		}
	}

  render() {

	const {errors} = this.state
	return (
		<div className="post-form mb-3">
			<div className="card card-info">
		  		<div className="card-header bg-success text-black " >
					Post an Item
		  		</div>
		  		<div className="card-body">
					<form onSubmit={this.onSubmit}>
			  			<div className="form-group">
							<div className="row">
								<div className="col-md-6">
									<p style={{fontSize: '20px'}}>Category:</p>
									<input 
										name="category" 
										type="text"
										className={classnames('form-control  mb-3', {
											'is-invalid': errors.category
										})}
										placeholder="Insert Item's Category" 
										value={this.state.category}
										onChange={this.onChange}
										
									
									/>
									{errors.category && (<div className="invalid-feedback">{errors.category}</div>)}
									<p style={{fontSize: '20px'}}>Description:</p>
									<input 
										name="description"
										type="text"
										className={classnames('form-control  mb-3', {
											'is-invalid': errors.description
										})}
										placeholder="Insert a description"
										value={this.state.description}
										onChange={this.onChange}
									
									/>
									{errors.description && (<div className="invalid-feedback">{errors.description}</div>)}
									<div className="row">
										<div className="col-md-3">
											<p style={{fontSize: '20px'}}>Price:</p>
											<input 
												name="asked_price"
												type="text"
												className={classnames('form-control  mb-3', {
													'is-invalid': errors.asked_price
												})} 
												placeholder="Price £"
												value={this.state.asked_price}
												onChange={this.onChange}
											
											/>
											{errors.asked_price && (<div className="invalid-feedback">{errors.asked_price}</div>)}
										
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<p style={{fontSize: '20px'}}>Item Condition:</p>
									<input 
										name="item_condition"
										type="text"
										className={classnames('form-control  mb-3', {
											'is-invalid': errors.item_condition
										})}
										placeholder="Insert Item Condition"
										value={this.state.item_condition}
										onChange={this.onChange}
									/>
									
									{errors.item_condition && (<div className="invalid-feedback">{errors.item_condition}</div>)}
									<p style={{fontSize: '20px'}}>City:</p>
									<input 
										name="city"
										type="text" 
										className={classnames('form-control', {
											'is-invalid': errors.city
										})}
										placeholder="Add city"
										value={this.state.city}
										onChange={this.onChange}
									/>
									{errors.city && (<div className="invalid-feedback">{errors.city}</div>)}
									
								</div>
								

							</div>
			  			</div>
			  			<button type="submit" className="btn btn-success">Post Item</button>
					</form>
		 		 </div>
			</div>
	  	</div>
	)
  }
}

Item.propTypes = {
	createPost: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
	auth: state.auth
})
export default connect(mapStateToProps, {createPost})(Item)