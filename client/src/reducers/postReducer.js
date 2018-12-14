import {ADD_POST, POST_LOADING, GET_POSTS, DELETE_POST} from '../actions/types'


const initialState ={
	posts: [],
	post: {},
	loading: false
}

export default function(state = initialState, action){
	switch(action.type){
		case ADD_POST:
			return{
				...state,
				posts: [action.payload, ...state.posts]
			}
		case GET_POSTS:
			return{
				...state,
				posts: action.payload,
				loading: false
			}
		case DELETE_POST:
			return{
				...state,
				//remove post fast without refreshing the page
				posts: state.posts.filter(post => post._id !== action.payload)
			}
		case POST_LOADING:
			return{
				...state,
				loading: true
			}
		default:
			return state
	}

		
}