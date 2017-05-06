import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text,View,Image} from 'react-native';
import {Link } from 'react-router-native';

class Message extends Component {
  render() {
    return (
      <View>
       
            <Text>message</Text>
        
      </View>
    );
  }
}
Message.propTypes ={
	date:PropTypes.object.isRequired,
	title:PropTypes.string.isRequired
}
export default Message
