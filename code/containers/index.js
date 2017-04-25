import App from '../components/app';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import Reducers from '../reducers/index';
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';
import initalState from './initalState';

const store = createStore(Reducers,initalState);

// Connected Component
const Lovu = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default class Index extends Component {
    render() {
        return (
        	< Provider store = { store } >
            	< Lovu / >
            < /Provider>
        )
    }
}
