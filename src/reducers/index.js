import { combineReducers } from 'redux';

import {
	REQUEST_SEARCH,
	RECIEVE_SEARCH,
	REQUEST_PROFILE,
	RECIEVE_PROFILE
} from '../actions';

function search( state= {
	isFetching: false,
	user: []
}, action) {
	switch(action.type) {
		case REQUEST_SEARCH:
			return Object.assign({}, state, {isFetching: true});
		case RECIEVE_SEARCH:
			return Object.assign({}, state, {
				isFetching: false,
				user: action.results
			});
		default:
			return state;
	}
}

function profile(state={isFetching: false, profile: {}}, action) {
	console.log(action.result);
	switch (action.type) {
		case REQUEST_PROFILE:
			return Object.assign({}, state, { isFetching: true });
		case RECIEVE_PROFILE:
			console.log(action.result);
		
			return Object.assign({}, state, {
				isFetching: false,
				profile: action.result
			});
		default:
			return state;
	}
}

const appReducer = combineReducers({
	search,
	profile
})
export default appReducer;