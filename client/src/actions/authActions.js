//import utils
import {GET_ERRORS} from './types'
import axios from 'axios'

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

