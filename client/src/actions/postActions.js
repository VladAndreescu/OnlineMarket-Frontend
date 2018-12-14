import axios from 'axios'

import{GET_ERRORS, ADD_POST} from './types'

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