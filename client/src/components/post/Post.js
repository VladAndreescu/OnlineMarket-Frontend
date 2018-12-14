import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import PostItem from '../posts/PostItem'
import ContactSeller from './ContactSeller'

import Spinner from '../../utils/Spinner'


import {getPost} from '../../actions/postActions'
import DisplayOffers from './DisplayOffers';

class Post extends Component {
	//call the function that will retrieve the specifc post based on the ID
	componentDidMount(){
		this.props.getPost(this.props.match.params.id)
	}
  render() {
	  	//using destructuring in order to retrieve the current post and the loading state
		const {post, loading} = this.props.post

		//declaring a value which decides if on the screen will be displayed a spinner
		//or the actual post followed by the input for making an offer and also followed by the view of offers
		let postValue
		//if the post does not exists or is loading display the spinner 
		if(post == null || loading === true || Object.keys(post).length === 0){
			postValue = <Spinner/>
		//otherwise display the post + make an offer input component + view all offers component
		}else{
			postValue = (
				<div>
					<PostItem post={post} displayButtons={false}/>
					<ContactSeller postId={post._id}/>
					<DisplayOffers postId={post._id} offers={post.offers} />
				</div>
				
			)
		}

		return (
			<div className="getPost">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<Link className="btn btn-success" to="/allPosts" style={{marginBottom:'15px'}}>Back</Link>
						{postValue}
					</div>
				</div>
			</div>
		</div>
		)
  }
}
// declaring the PropTypes for Post component
Post.propTypes = {
	getPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
}
//developed the mapStateToProps function for Register component
//it will retrieve the state of authentication as well as the information about the current user logged in
const mapStateToProps = (state) =>({
	post: state.post
})

export default connect(mapStateToProps, {getPost})(Post)
