import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text,View,Image,ListView} from 'react-native';
import {Link } from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/home'

class Home extends Component {
  constructor(props) {
    super(props);
  }
  renderRow(rowData, index){
    const {linkTo,start,end,locations,colors,icon} = rowData
        return(
          <Link to={linkTo}  key ={index}>
            <LinearGradient style={styles.item}
            start={start} 
            end={end}
            locations={locations}
            colors={colors}
            >
              <Image style={styles.image} source={icon} />
              <Text style={styles.title}>{rowData.title}</Text>
          </LinearGradient>
          </Link>     
       
        )
    
  }
  render() {
    const {homeMenus} = this.props;
    return (
      <View>
          {homeMenus.map((rowData,index)=>this.renderRow(rowData,index))}
      </View>
    );
  }
}
Home.propTypes =  {
  homeMenus: PropTypes.array.isRequired
}
export default Home

