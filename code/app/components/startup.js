import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Text,View,Image} from 'react-native';
import styles from '../styles/startup';

export default class Startup extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
    console.log("init")
  }
  componentDidMount(){
    /*redirect to home*/
    // setTimeout(()=>this.props.history.replace('/home'),10000);
  }
  handleClick() {
    console.log(this.props)
    this.props.history.push('/home')
    console.log(22222222)
  }
  render() {
    return (
      <View onClick={this.handleClick}>
        
        <Text >startup</Text>
        <Text  onPress={this.handleClick.bind(this)}>
          startup
        </Text>
      </View>
    );
  }
}
