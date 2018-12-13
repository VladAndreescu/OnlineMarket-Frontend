//import utils
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

// setting initialState to null object
const initialState = {}

const middleware  = [thunk]

//creating the store for Redux and implment the extension
const  store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store