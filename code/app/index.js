import Index from './components/index';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers/index';
import initalState from './initalState/index';

const store = createStore(Reducers,initalState);

export default class App extends Component {
    render() {
        return (
        	< Provider store = { store } >
            	< Index/ >
            < /Provider>
        )
    }
}
