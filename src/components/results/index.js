import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css'

import { fetchProfile } from '../../actions';
 

const Results = ({list, getProfile}) => {
	function formList(list) {
		const userList = list.map((user,index) => {
			
			return (
				<li key={index} className="list_item">
					<img className="avatar" src={user.avatar_url} alt="avatar" onClick={()=>getProfile(user.login)}/>
					<span className="username" onClick={()=>getProfile(user.login)}>@{user.login}</span>
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
		getProfile: (username) => {
			console.log(username);
			return dispatch(fetchProfile(username));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Results);