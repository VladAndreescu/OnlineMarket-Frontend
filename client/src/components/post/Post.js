import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import PostItem from '../posts/PostItem'
import ContactSeller from './ContactSeller'

import Spinner from '../../utils/Spinner'


import {getPost} from '../../actions/postActions'

class Post extends Component {

	componentDidMount(){
		this.props.getPost(this.props.match.params.id)
	}
  render() {
	  
		const {post, loading} = this.props.post

		let postValue

		if(post == null || loading === true){
			postValue = <Spinner/>
		}else{
			postValue = (
				<div>
					<PostItem post={post} displayButtons={false}/>
					<ContactSeller postId={post._id}/>
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

Post.propTypes = {
	getPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
	post: state.post
})

export default connect(mapStateToProps, {getPost})(Post)
