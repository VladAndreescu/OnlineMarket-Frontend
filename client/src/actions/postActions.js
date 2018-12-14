import axios from 'axios'

import{GET_ERRORS, ADD_POST, GET_POSTS, POST_LOADING} from './types'

// Create a new post
export const createPost = postData => dispatch =>{
	axios.post('/api/posts', postData)
		.then(res => {
			dispatch({
				type: ADD_POST,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
			
		})
			
}

// GET all posts
export const getPosts = () => dispatch =>{
	dispatch(setLoadingPost())
	
	axios.get('/api/posts')
		.then(res => {
			dispatch({
				type: GET_POSTS,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch({
				type: GET_POSTS,
				payload: null
			})
			
		})
			
}

//Set Loading State
export const setLoadingPost = () =>{
	return{
		type: POST_LOADING
	}
}