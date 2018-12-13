//import utils
import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

//combine the reducers
export default combineReducers({
	auth: authReducer,
	errors: errorReducer
})