import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
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

  render() {
	return (
		<div className="post-form mb-3">
			<div className="card card-info">
		  		<div className="card-header bg-info text-black " >
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
										className="form-control  mb-3" 
										placeholder="Insert Item's Category" 
										value={this.state.category}
										onChange={this.onChange}
									
									/>
									<p style={{fontSize: '20px'}}>Description:</p>
									<input 
										name="description"
										type="text"
										className="form-control mb-3" 
										placeholder="Insert a description"
										value={this.state.description}
										onChange={this.onChange}
									
									/>
										
									<p style={{fontSize: '20px'}}>Price:</p>
									<input 
										name="price"
										type="text" 
										className="form-control mb-3" 
										placeholder="Asked Price"
										value={this.state.description}
										onChange={this.onChange}
									/>
								</div>
								<div className="col-md-6">
									<p style={{fontSize: '20px'}}>Item Condition:</p>
									<input 
										name="item_condition"
										type="text"
										className="form-control mb-3" 
										placeholder="Insert Item Condition"
										value={this.state.item_condition}
										onChange={this.onChange}
									/>
									<p style={{fontSize: '20px'}}>City:</p>
									<input 
										name="city"
										type="text" 
										className="form-control" 
										placeholder="Add city"
										value={this.state.city}
										onChange={this.onChange}
									/>
								</div>

							</div>
			  			</div>
			  			<button type="submit" className="btn btn-dark">Post Item</button>
					</form>
		 		 </div>
			</div>
	  	</div>
	)
  }
}

export default Item