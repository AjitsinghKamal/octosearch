import fetch from 'cross-fetch'

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECIEVE_SEARCH = 'RECIEVE_SEARCH';

export function requestSearch(query) {
	return {
		type: REQUEST_SEARCH,
		query
	}
}

export function recieveSearchResult(results) {
	return {
		type: RECIEVE_SEARCH,
		results: results.items
	}
}

export function fetchResults(query) {
	return function(dispatch) {
		dispatch(requestSearch(query));
		return fetch(`https://api.github.com/search/users?q=${query}`)
		.then(
			response => response.json(),
			error => console.error(error)
		)
		.then(response => dispatch(recieveSearchResult(response)))
	}
}