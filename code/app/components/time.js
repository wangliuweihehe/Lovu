import React, { Component } from 'react';
import { Text,View,Image} from 'react-native';
import {Link } from 'react-router-native';

export default class Time extends Component {
  render() {
    return (
      <View>
        <Link to="/startup">
            <Text>time</Text>
        </Link>
      </View>
    );
  }
}
