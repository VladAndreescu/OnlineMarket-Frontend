import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Item from './Item'

import {getPosts} from '../../actions/postActions';

import Spinner from '../../utils/Spinner'
import DisplayPosts from './DisplayPosts';

class Posts extends Component {
	componentDidMount(){
		this.props.getPosts()
	}
	render() {
		const {posts, loading} = this.props.post

		let postValue

		if(posts === null || loading){
			postValue = <Spinner/>
		}else{
			postValue = <DisplayPosts posts={posts}/>
		}

		return (
		<div className="postsFeed">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						{postValue}
					</div>
				</div>  
			</div>
		</div>
		)
	}
}

Posts.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
	
}

const mapStateToProps = (state) =>({
	post: state.post
})
export default connect(mapStateToProps, {getPosts})(Posts)
