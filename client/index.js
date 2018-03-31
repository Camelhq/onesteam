import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { addPosts } from './actions/index';
import thunk from 'redux-thunk';
import  { Provider } from 'react-redux';
import { composeWithDevtools } from 'redux-devtools-extension'
import App from "./components/App";
// import configureStore from './redux/store';
import './scss/main.scss';
import { ADD_POSTS } from './actions/index';
//https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel

const store = createStore(rootReducer, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

// store.dispatch({type: "ADD_POSTS"})
// console.log(addPosts(ADD_POSTS))

//https://www.youtube.com/watch?v=w9-1T1D0xlQ

const app = document.getElementById('app');
ReactDOM.render(
		<Provider store={store}>
        <App />
    </Provider>
        ,
    app);
