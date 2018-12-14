import axios from 'axios'

import{GET_ERRORS, ADD_POST, GET_POSTS, POST_LOADING, DELETE_POST, GET_POST} from './types'

//--------------Post Actions--------------

// Create a new post
export const createPost = postData => dispatch =>{
	//make a POST request to the database in order to create a new post
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
	//set loading state
	dispatch(setLoadingPost())
	//make a GET request to the database in order to retrieve all Posts
	axios.get('/api/posts')
		//if there is no error display the posts
		.then(res => {
			dispatch({
				type: GET_POSTS,
				payload: res.data
			})
		})
		//if there is error set the payload to null
		//So we do not have an error of undefined
		.catch(err => {
			dispatch({
				type: GET_POSTS,
				payload: null
			})
			
		})
			
}

// GET only one Post
export const getPost = (id) => dispatch =>{
	//set loading state
	dispatch(setLoadingPost())
	//make a GET request to the database in order to retrieve one Post based on the id
	axios.get(`/api/posts/${id}`)
		//if there is no error display the posts
		.then(res => {
			dispatch({
				type: GET_POST,
				payload: res.data
			})
		})
		//if there is error set the payload to null
		//So we do not have an error of undefined
		.catch(err => {
			dispatch({
				type: GET_POST,
				payload: null
			})
			
		})
			
}

//RemovePost
export const removePost = id => dispatch =>{
	//make a DELETE request to the database in order to delete the Post with the specific ID
	axios.delete(`/api/posts/${id}`)
		//if there is no error delete the post
		.then(res => {
			dispatch({
				type: DELETE_POST,
				payload: id
			})
		})
		//if there is error populate the error object in order to display it
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
	//make a POST request to the database in order to like a post with a specific ID
	axios.post(`/api/posts/like/${id}`)
		//if there is no error just display the posts
		.then(res => {
			dispatch(getPosts())
		})
		//if there is error popuate the error objesc in order to display it
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
			
		})
			
}

//Unlike a post
export const unlike = id => dispatch =>{
	//make a POST request to the database in order to unlike a post with a specific ID
	axios.post(`/api/posts/unlike/${id}`)
		//if there is no error just display the posts
		.then(res => {
			dispatch(getPosts())
		})
		//if there is error popuate the error objesc in order to display it
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
	//make a POST request to the database in order to make an offer to a post with a specific ID
	axios.post(`/api/posts/contact/${postId}`, newOffer)
		.then(res => {
			//if there is no error just display the post and populate the payload with the data
			dispatch({
				type: GET_POST,
				payload: res.data
			})
		})
		//if there is error popuate the error objesc in order to display it
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
			
		})
			
}

//Remove Offer
export const removeOffer = (postId, offerId) => dispatch =>{
	//make a DELETE request to the database in order to remove an offer from a post with a specific ID
	axios.delete(`/api/posts/contact/${postId}/${offerId}`)
		.then(res => {
			//if there is no error just display the post and populate the payload with the data
			dispatch({
				type: GET_POST,
				payload: res.data
			})
		})
		//if there is error popuate the error objesc in order to display it
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