import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';

import appReducer from './reducers';
import {fetchResults} from './actions';

const logger = new createLogger();
const store = createStore(appReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Root store = {store}/> ,
	document.getElementById('root'));
registerServiceWorker();
