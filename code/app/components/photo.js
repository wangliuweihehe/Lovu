import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import ImagePicker from 'react-native-image-picker';
import styles from '../styles/photo';

class Photo extends Component {
    constructor(props) {
        super(props)
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.uri };
                this.setState({
                    avatarSource: source
                });
            }
        })
    }
    goBack(){
        const {history} = this.props;
        history.go(-1);
    }
    renderAlbum(album,index){
        return(
            <Link key={index} style={styles.album} >
                <TouchableOpacity >
                    <Image style={styles.img} source={album.img}/>
                    <View style={styles.albumMask}>
                        <Text style={styles.albumMaskLeftWord}>{album.title}</Text>
                        <Text style={styles.albumMaskRightWord}>{album.count}</Text>
                    </View>
                </TouchableOpacity>
            </Link>
        )
    }
    render() {
        const {albums} = this.props;
        return ( 
        	< View style={styles.bg}>
                <Text onPress={this.goBack.bind(this)} style={styles.back}>
                    <Image style={styles.backImg} source={require('../images/back.png')}/>
                </Text>
                <View style={styles.container}>
                    <TouchableOpacity onPress = { this.selectPhotoTapped.bind(this) } style={styles.newAlbum}>
                        <Image style={styles.plusImg} source={require('../images/plus.png')}/>
                        < Text style={styles.newAlbumText}> setup a new album < /Text>
                    </TouchableOpacity>
                    {albums.map((album,index)=>
                        this.renderAlbum(album,index)
                    )}
                </View>
            	
            < /View>
        )
    }
}
Photo.propTypes =  {
  albums: PropTypes.array.isRequired
}
export default Photo
