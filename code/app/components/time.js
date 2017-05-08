import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text,View,Image} from 'react-native';
import styles from '../styles/time';

class Time extends Component {
  constructor(props){
    super(props);
    const {date} = this.props;
    const dateStr = ""+date.year+"/"+date.month+"/"+date.day+" "+date.hour +":00:00";
    var dayLength = this.getDateMiners(dateStr);
    this.state = {
      dateStr:dateStr,
      dayLength: dayLength
    }
  }
  componentDidMount(){
    this.changeDate(this.state.dateStr);
  }
  componentWillUnmount(){
    this.timer && clearTimeout(this.timer);
  }
  getDateMiners(dateStr){
    const current = Date();
    const seconds = (Date.parse(current) - Date.parse(dateStr)) / 1000;
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds/3600)%24);
    return {
      days: days,
      hours:hours
    }
  }
  goBack(){
    const {history} = this.props;
    history.go(-1);
  }
  changeDate(dateStr){
    this.timer = setInterval(
      ()=>{
        const newDayLength = this.getDateMiners(dateStr);
        this.setState({dayLength:newDayLength});
      }
      ,1000)
    
  }
  render() {
    const {title} = this.props;
    const {dayLength} =this.state;
    const word  = dayLength.days+ "  days  " +dayLength.hours+"  hours";
    return (
      <View style={styles.bg}>
          <Text onPress={this.goBack.bind(this)} style={styles.goBack}>
              <Image style={styles.backImg} source={require('../images/back.png')}/>
          </Text>
          <View style={styles.titleBox}>
              <Text style={styles.title}>{title}</Text>
              <View><Text style={styles.subTitle}>{word}</Text></View>
          </View>
      </View>
    );
  }
}
Time.propTypes ={
	date:PropTypes.object.isRequired,
	title:PropTypes.string.isRequired
}
export default Time
