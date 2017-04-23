import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    position:'absolute',
    top:200,
    width:'100%'
  },
  instructions: {
    width:'100%',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    position:'absolute',
    bottom:100
  },
  image:{
    width:100,
    height:100,
    position:'absolute',
    left:'50%',
    top:100,
    marginLeft:-50
  },
  bg:{
    backgroundColor:'#fff4ea',
    position:'relative',
    height: '100%'
  }
});
export default styles;