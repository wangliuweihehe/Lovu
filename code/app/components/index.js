import React, { Component } from 'react';
import { Text,View,Image} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Routes from '../routes/index';

const Index = ()=>(
	<NativeRouter>
		<View>
			{Routes.map(
				(route,index)=>
					<Route key={index} path={route.path} exact={route.exact} component={route.component}/>
			)}
		</View>
	</NativeRouter>
)

export default Index