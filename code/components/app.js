import React, { Component } from 'react';
import { Text,View,Image} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import StartUp from './startup';
import Home from './home';
import createHistory from 'history/createMemoryHistory';

const history = createHistory();

export default class Index extends Component{
	render(){
		let homeMenus = this.props.homeMenus;
		return(
				<NativeRouter history={history}>
					<View>
						<Route exact path="/" component={StartUp}></Route>
						<Route path="/home" render={() => <Home homeMenus={homeMenus}/>}></Route>
					</View>
				</NativeRouter>
			)
	}
}