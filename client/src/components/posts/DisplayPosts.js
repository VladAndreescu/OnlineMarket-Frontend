import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PostItem from './PostItem'

class DisplayPosts extends Component {
  	render() {
	//using destructuring in order to retrieve the posts
	const {posts} = this.props

	//loop through the posts and set each post into an PostItem Object
	return posts.map(post => <PostItem key={post._id} post={post} />)
  	}
}
// declaring the PropTypes for DisplayPosts component
DisplayPosts.propTypes ={
	posts: PropTypes.array.isRequired
}

export default DisplayPosts