import React, { Component } from 'react';
import { Text,View,Image} from 'react-native';
import styles from '../styles/startup';

export default class Startup extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    /*redirect to home*/
    setTimeout(()=>this.props.history.push("/home"),100); 
  }
  render() {
    return (
      <View style={styles.bg}>
        <Image style={styles.image} source={require('../images/logo.gif')}/>
        <Text style={styles.title}>{this.props.startUp.title}</Text>
        <Text style={styles.instructions}>
          {this.props.startUp.subTitle}
        </Text>
      </View>
    );
  }
}
