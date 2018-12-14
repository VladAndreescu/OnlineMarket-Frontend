import axios from 'axios'

import{GET_ERRORS, ADD_POST, GET_POSTS, POST_LOADING, DELETE_POST, GET_POST} from './types'

//--------------Post Actions--------------

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

// GET only one Post
export const getPost = (id) => dispatch =>{
	dispatch(setLoadingPost())

	axios.get(`/api/posts/${id}`)
		.then(res => {
			dispatch({
				type: GET_POST,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch({
				type: GET_POST,
				payload: null
			})
			
		})
			
}

//RemovePost
export const removePost = id => dispatch =>{
	axios.delete(`/api/posts/${id}`)
		.then(res => {
			dispatch({
				type: DELETE_POST,
				payload: id
			})
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
			
		})
			
}

//--------------Follow a post action--------------
// Fallowing a post is done by clicking on the like button

//Like a post
export const like = id => dispatch =>{
	axios.post(`/api/posts/like/${id}`)
		.then(res => {
			dispatch(getPosts())
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
			
		})
			
}

//Unlike a post
export const unlike = id => dispatch =>{
	axios.post(`/api/posts/unlike/${id}`)
		.then(res => {
			dispatch(getPosts())
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
			
		})
			
}

//--------------Make an offer action--------------

// Make an offer
export const makeOffer = (postId, newOffer) => dispatch =>{
	axios.post(`/api/posts/contact/${postId}`, newOffer)
		.then(res => {
			dispatch({
				type: GET_POST,
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


//Set Loading State
export const setLoadingPost = () =>{
	return{
		type: POST_LOADING
	}
}