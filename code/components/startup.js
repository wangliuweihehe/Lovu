import React, { Component } from 'react';
import { Text,View,Image} from 'react-native';
import styles from '../styles/startup';

export default class Startup extends Component {
  constructor(props){
    super(props);
    const startUp = this.props.startUp;
    this.state = {
      startUp :startUp
    }
  }
  componentDidMount(){
    /*redirect to home*/ 
    setTimeout(()=>this.props.history.push(this.props.startUp.redirect),this.props.startUp.showTime); 
  }
  render() {
    return (
      <View style={styles.bg}>
        <Image style={styles.image} source={require('../images/logo.gif')}/>
        <Text style={styles.title}>{this.state.startUp.title}</Text>
        <Text style={styles.instructions}>
          {this.state.startUp.subTitle}
        </Text>
      </View>
    );
  }
}
