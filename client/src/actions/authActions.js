//import utils
import axios from 'axios'
import setAuthenticationToken from '../utils/setAuthenticationToken'
import jwt_decode from 'jwt-decode'

//import types
import {GET_ERRORS} from './types'


//Register User
export const userRegister = (userData, history) => dispatch =>{
	// make a POST request to the database in order to register the user
	//redirect the user to login page
	axios.post('/api/users/register', userData)
		.then(res => history.push('/login'))
		.catch(err => 
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})	
		)
}

//Authenticate User and get hes unique Token
export const userAuthenticate = userData => dispatch =>{
	//make a POST request to the database in order to authenticate the user
	axios.post('/api/users/login', userData)
	.then(res =>{
		//use destructuring to retrieve the token from the user data
		const {token} = res.data

		// Save token in localStorage
		localStorage.setItem('jwt_token', token);

		//Insert Token into the Authorization token
		setAuthenticationToken(token);
		
		//Decode the token in order to receive the user information
		const decoded = jwt_decode(token);
	})
	.catch(err =>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	})
}

