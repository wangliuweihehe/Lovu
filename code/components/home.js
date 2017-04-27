import React, { Component } from 'react';
import { Text,View,Image,ListView} from 'react-native';
import {Link } from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/home'

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
    var src = rowData.icon;
  	return(
      <Link to={rowData.linkTo}>
        <LinearGradient colors={rowData.colors} start={{x:0,y:0}} end={{x:1,y:1}}>
            <View style={styles.item}>
              <Image style={styles.image} source={require(src)}/>
              <Text style={styles.title}>{rowData.title}</Text>
            </View>
        </LinearGradient>
      </Link>
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
