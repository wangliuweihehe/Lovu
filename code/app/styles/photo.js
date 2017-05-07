import { StyleSheet, PixelRatio } from 'react-native';

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
    newAlbum: {
    	width:200,
    	height:PixelRatio.get()*200,
    	backgroundColor:"white"
    },
    album: {
    	width:PixelRatio.getPixelSizeForLayoutSize(200),
    	height:PixelRatio.get()*200,
    	backgroundColor:"white"
    }
})
export default styles
