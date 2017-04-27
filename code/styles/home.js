import {StyleSheet,Dimensions} from 'react-native';
const styles = StyleSheet.create({
  item:{
    width:Dimensions.get('window').width*0.9,
    height:100,
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:30,
    position:"relative"

  },
  image:{
    width:120,
    height:120,
    position:"absolute",
    left:10,
    top:10

  },
  title:{
    position:"absolute",
    top:10,
    right:20,
    fontSize:24,
    color:"white",
    lineHeight:60
  }
});
export default styles;