import React, { Component } from 'react';
import { Text,View,Image} from 'react-native';
import styles from '../styles/startup';

export default class Startup extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    /*redirect to home after 3s*/ 
    setTimeout(()=>this.props.history.push('/home'),10000); 
  }
  render() {
    return (
      <View style={styles.bg}>
        <Image style={styles.image} source={require('../images/logo.gif')}/>
        <Text style={styles.title}>LOVU</Text>
        <Text style={styles.instructions}>
          I love you!
        </Text>
      </View>
    );
  }
}
