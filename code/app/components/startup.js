import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Text,View,Image} from 'react-native';
import styles from '../styles/startup';

class Startup extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const {history, delayTime,redirect} = this.props;
    /*redirect to home*/
    this.timeoutId = setTimeout(function(){
      history.push(redirect);
    },delayTime);
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutId)
  }
  render() {
    return (
      <View style={styles.bg}>
        <Image style={styles.image}  source={require('../images/logo.gif')} />
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.instructions}>
          {this.props.instructions}
        </Text>
      </View>
    );
  }
}

Startup.propTypes =  {
  title: PropTypes.string.isRequired,
  instructions:PropTypes.string.isRequired
}
export default Startup