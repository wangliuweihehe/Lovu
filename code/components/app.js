import React, { Component } from 'react';
import { Text,View,Image} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import StartUp from './startup';
import Home from './home';
import createHistory from 'history/createMemoryHistory';
import Photo from './photo';
import Message from './message';
import Time from './time';
import Anniversary from './anniversary';

const history = createHistory();

export default class Index extends Component{
	render(){
		return(
				<NativeRouter history={history}>
					<View>
						<Route path="/" render={({history}) =><StartUp startUp={this.props.startUp} history={history}/>}></Route>
						<Route path="/home" render={() => <Home homeMenus={this.props.homeMenus} />}></Route>
						<Route path="/time" render={() => <Time time={this.props.time} />}></Route>
						<Route path="/photo" render={() => <Photo photo={this.props.photo} />}></Route>
						<Route path="/message" render={() => <Message message={this.props.message} />}></Route>
						<Route path="/anniversary" render={() => <Anniversary anniversary={this.props.anniversary} />}></Route>
						
					</View>
				</NativeRouter>
			)
	}
}