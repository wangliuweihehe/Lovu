import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#fff4ea',
        position: 'relative',
        height: '100%'
    },
    back: {
        fontSize: 20,
        textAlign: 'center',
        position: 'absolute',
        top: 10,
        left: 10,
        color: '#ff674a'
    },
    backImg:{
        width:30,
        height:30
    },
    plusImg:{
        width:Dimensions.get('window').width*0.15,
        height:Dimensions.get('window').width*0.15,
        marginLeft:Dimensions.get('window').width*0.075,
        marginTop:10
    },
    newAlbum: {
    	width:Dimensions.get('window').width*0.3,
    	height:Dimensions.get('window').width*0.3,
    	backgroundColor:"white",
        marginBottom:Dimensions.get('window').width*0.025
    },
    newAlbumText:{
        textAlign: 'center'
    },
    album: {
    	width:Dimensions.get('window').width*0.3,
    	height:Dimensions.get('window').width*0.3,
    	backgroundColor:"white",
        marginBottom:Dimensions.get('window').width*0.025,
        position:"relative"
    },
    img:{
        width:Dimensions.get('window').width*0.3,
        height:Dimensions.get('window').width*0.3
    },
    container:{
        marginTop:60,
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent: 'space-between',
        width:Dimensions.get('window').width*0.95,
        marginLeft:Dimensions.get('window').width*0.025
    },
    albumMask:{
        height:30,
        width:"100%",
        position:"absolute",
        left:0,
        bottom:0,
        backgroundColor:"rgba(255,103,74,.6)",
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    albumMaskRightWord:{
        color:"white",
        lineHeight:20
    },
    albumMaskLeftWord:{
        color:"white",
        lineHeight:20
    }
})
export default styles
