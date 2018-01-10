import fetch from 'cross-fetch'

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECIEVE_SEARCH = 'RECIEVE_SEARCH';

export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const RECIEVE_PROFILE = 'RECIEVE_PROFILE';

export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECIEVE_REPOS = 'RECIEVE_REPOS';

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


export function requestProfile(query) {
	return {
		type: REQUEST_PROFILE,
		query
	}
}

export function recieveProfileResult(json) {
	return {
		type: RECIEVE_PROFILE,
		result: json
	}
}

export function fetchProfile(username) {
	return function (dispatch) {
		dispatch(requestProfile(username));
		return fetch(`https://api.github.com/users/${username}`)
			.then(
			response => response.json(),
			error => console.error(error)
			)
			.then(response => dispatch(recieveProfileResult(response)))
	}
}

export function requestRepos(query) {
	return {
		type: REQUEST_REPOS,
		query
	}
}

export function recieveReposList(json) {
	return {
		type: RECIEVE_REPOS,
		result: json
	}
}

export function fetchRepoList(username) {
	return function (dispatch) {
		dispatch(requestRepos(username));
		return fetch(`https://api.github.com/users/${username}/repos`)
			.then(
			response => response.json(),
			error => console.error(error)
			)
			.then(response => dispatch(recieveReposList(response)))
	}
}

export function fetchUserInfo(username) {
	return function(dispatch) {
		return Promise.all([
			dispatch(fetchProfile),
			dispatch(fetchRepoList)
		])
	}
}
