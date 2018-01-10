import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css'

 

const Results = ({list}) => {
	function formList(list) {
		console.log(list);

		const userList = list.map((user,index) => {
			return (
				<li key="index" className="list_item">
					<img className="avatar" src={user.avatar_url} alt="avatar" />
					<span className="username" >@{user.login}</span>
				</li>
			)
		})
		return userList;
	}
	return <ul>{ list? formList(list) : null }</ul>
};


const mapStateToProps = state => {
	return {
		list: state.search.user
	}
}

const mapDispatchToProps = dispatch => {
	return {
		refresh: (input) => {
			// return dispatch(fetchResults(input));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Results);