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
        <TouchableOpacity key={index} style={styles.album}>
            <Image style={styles.img} source={album.img}/>
            <Text>{album.title}</Text>
            <Text>{album.count}</Text>
        </TouchableOpacity>
        )
    }
    render() {
        const {albums} = this.props;
        return ( 
        	< View style={styles.bg}>
                <Text onPress={this.goBack.bind(this)} style={styles.back}>back</Text>
            	<TouchableOpacity onPress = { this.selectPhotoTapped.bind(this) } style={styles.newAlbum}>
                    < Text > setup a new album < /Text>
                </TouchableOpacity>
                {albums.map((album,index)=>
                    this.renderAlbum(album,index)
                )}
            < /View>
        )
    }
}
Photo.propTypes =  {
  albums: PropTypes.array.isRequired
}
export default Photo
