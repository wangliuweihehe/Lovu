import React, { Component } from 'react';
import { Text,View,Image} from 'react-native';
import {Link } from 'react-router-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Link to="/startup">
            <Text>startUp</Text>
        </Link>
      </View>
    );
  }
}