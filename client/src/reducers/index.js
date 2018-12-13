//import utils
import {combineReducers} from 'redux'
import authReducer from './authReducer'

//combine the reducers
export default combineReducers({
	auth: authReducer
})