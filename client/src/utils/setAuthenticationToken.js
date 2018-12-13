// import utils
import axios from 'axios'

/*
Function created in order to check if the user is logged in.
if the user is logged in, he will return a token 
this function checks if the token exists and insert it in Authorization header for each request
*/
const setAuthenticationToken = token =>{
	//check if Token exists
	if(token !== null){
		//Apply Token for each request
		axios.defaults.headers.common['Authorization'] = token
	}else{
		//Delete everything from Authorization Header
		delete axios.defaults.headers.common['Authorization']
	}
}

export default setAuthenticationToken