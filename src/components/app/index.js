import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchResults } from '../../actions';
import Results from '../results';

import './style.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			list: this.props.list
		}
		this.startDispatch = this.startDispatch.bind(this);
	}

	/**
	 * get value from search box and update the local state
	 * for the box 
	 * @param {*} event 
	 */
	updateQuery(event) {
		this.setState({
			query: event.target.value
		})
	}

	startDispatch() {
		this.props.refresh(this.state.query);
	}
	
	render() {
		return (
			<main className="app">
				<div className="head">
					<h1 className="title">OctoSearch</h1>
					<div className="input">
					<button htmlFor="search-box" onClick={this.startDispatch}>
						<img className="icon" src={require('../../refresh-icon.png')} alt="" />
					</button>
						<input className="search-box" name="search-box" type="text" placeholder="type user to search for ... " value={this.state.query} onChange={event => this.updateQuery(event)} onKeyPress={event => (event.charCode == 13) ? this.startDispatch() : null} />
					</div>
				</div>
				<section className="result">
					{this.props.list.length>0 ? <Results /> :null}
				</section>
			</main>
		);
	}
}

const mapStateToProps = state => {
	console.log(state.search.user);
	return {
		list: state.search.user
	}
}

const mapDispatchToProps = dispatch => {
	return {
		refresh: (input) => {
			return dispatch(fetchResults(input));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
