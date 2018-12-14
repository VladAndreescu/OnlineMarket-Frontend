import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


import {getPosts} from '../../actions/postActions';

import Spinner from '../../utils/Spinner'
import DisplayPosts from './DisplayPosts';

class Posts extends Component {
	componentDidMount(){
		this.props.getPosts()
	}
	render() {
		//using destructuring in order to retrieve posts and loading state from the post
		const {posts, loading} = this.props.post

		//declaring a value which decides if on the screen will be displayed a spinner or the actual posts 
		let postValue
		//if the posts do not exists or is loading display the spinner 
		if(posts === null || loading){
			postValue = <Spinner/>
		}else{
			//otherwise display the posts
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
// declaring the PropTypes for Posts component
Posts.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
	
}

//developed the mapStateToProps function for Posts component
//it will retrieve the current state of post
const mapStateToProps = (state) =>({
	post: state.post
})
export default connect(mapStateToProps, {getPosts})(Posts)
