import { combineReducers } from 'redux';

import {
	REQUEST_SEARCH,
	RECIEVE_SEARCH
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

const appReducer = combineReducers({
	search
})
export default appReducer;