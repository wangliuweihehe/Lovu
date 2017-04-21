import React, { Component } from 'react';
import { Text,View,Image} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import StartUp from './startup';
import Home from './home';

export default class Index extends Component{
	render(){
		return(
				<NativeRouter>
					<View>
						<Route exact path="/" component={Home}></Route>
						<Route path="/startup" component={StartUp}></Route>
					</View>
				</NativeRouter>
			)
	}
}