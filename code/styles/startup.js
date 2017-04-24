import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    position:'absolute',
    top:260,
    width:'100%',
    color: '#ff674a'
  },
  instructions: {
    width:'100%',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    position:'absolute',
    bottom:100,
    color: '#ff674a'
  },
  image:{
    width:160,
    height:160,
    position:'absolute',
    left:'50%',
    top:100,
    marginLeft:-80
  },
  bg:{
    backgroundColor:'#fff4ea',
    position:'relative',
    height: '100%'
  }
});
export default styles;