import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {Link} from 'react-router-dom'
import Posts from './Posts';

import {removePost, like, unlike} from '../../actions/postActions'
import Post from '../post/Post';




class PostItem extends Component {
  
	onDeleteClick(id){
		this.props.removePost(id)
	}

	onLikeClick(id){
		this.props.like(id)
	}

	onUnlikeClick(id){
		this.props.unlike(id)
	}
	
	render() {

	const {post, auth, displayButtons} = this.props


	return (
	  <div className="card card-body mb-3">
        <div className="row">
            <div className="col-md-2">
                  <h4 className="text-center " style={{textDecoration: 'underline'}}>{post.name}</h4>
                </div>
                <div className="col-md-4">
					<p 
						style={{
							fontSize: '20px',
							textDecoration: 'underline'
						}}
						>Category:
					</p>
                  	<p className="lead">{post.category}</p>
					<p style={{
							fontSize: '20px',
							textDecoration: 'underline',
							paddingTop: '1cm'
						}}
						>Price:
					</p>
                  	<p className="lead">{post.asked_price}</p>
				</div>
				<div className="cold-md-4">
					<p style={{
							fontSize: '20px',
							textDecoration: 'underline',
						}}
						>Description:
					</p>
                  	<p className="lead">{post.description}</p>
					<p style={{
							fontSize: '20px',
							textDecoration: 'underline',
							paddingTop: '1cm'
						}}
						>City:
					</p>
                  	<p className="lead">{post.city}</p>
				</div>
				<div className="cold-md-5">
					<p 
						style={{
							marginLeft: '50px',
							fontSize: '20px',
							textDecoration: 'underline'
						}}
						>Item Condition:
					</p>
                  	<p className="lead" style={{marginLeft: '50px'}}>{post.item_condition}</p>
				</div>
				{displayButtons ? (
						<div 
							className="col-md-10"
							style={{paddingTop:'1cm'}}
						>	
				  			<button 
				  				style={{
						  		marginLeft: '30px'
								}}
								type="button" 
								onClick={this.onLikeClick.bind(this, post._id)}
								className="btn btn-light mr-3 ">
									<i className="text-info fas fa-thumbs-up"></i>
									<span className="badge badge-light">{post.likes.length}</span>
                  			</button>
				  			<button 
					  			type="button" 
					  			onClick={this.onUnlikeClick.bind(this, post._id)}
					  			className="btn btn-light mr-5">
                    				<i className="text-secondary fas fa-thumbs-down"></i>
                  			</button>
                  			<Link to={`/post/${post._id}`} className="btn btn-info mr-5">
                    			Contact Seller
                  			</Link>
				  			{post.user === auth.user.id ? (
					  			<button 
						  			type="button"
						  			className="btn btn-danger"
						  			onClick={this.onDeleteClick.bind(this, post._id)}>
						  				<i className="fas fa-times"/>
						 		 </button>
				  			) : null}
                		</div>
					): null}
              </div>
            </div>
	)
  }
}


PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	removePost: PropTypes.func.isRequired,
	like: PropTypes.func.isRequired,
	unlike: PropTypes.func.isRequired
}

PostItem.defaultProps = {
	displayButtons: true
}

const mapStateToProps = (state) =>({
	auth: state.auth
})
export default connect(mapStateToProps, {removePost, like, unlike})(PostItem)
