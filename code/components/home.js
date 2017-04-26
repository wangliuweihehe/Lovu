import React, { Component } from 'react';
import { Text,View,Image,ListView} from 'react-native';
import {Link } from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Home extends Component {
  constructor(props) {
    super(props);
    const homeMenus = this.props.homeMenus;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(homeMenus)
    };
  }
  _renderRow(rowData){
  	return(
  	<LinearGradient colors={rowData.colors}>
		<Text>{rowData.title}</Text>
	</LinearGradient>
	)
  }
  render() {
    return (
      <View>
      	<ListView dataSource={this.state.dataSource} renderRow={(rowData) => this._renderRow(rowData)}/>
      </View>
    );
  }
}
