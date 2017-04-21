import React, { Component } from 'react';
import { Text,View,Image} from 'react-native';
import styles from '../styles/startup';

export default class Startup extends Component {
  render() {
    return (
      <View>
        <Image style={styles.image} source={require('../images/icon.png')}/>
        <Text style={styles.title}>
          LOVU
        </Text>
        <Text style={styles.instructions}>
          I love you!
        </Text>
      </View>
    );
  }
}
