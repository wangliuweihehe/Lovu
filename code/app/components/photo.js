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
    render() {
        return ( 
        	< View>
            	<TouchableOpacity onPress = { this.selectPhotoTapped.bind(this) }>
                    < Text > Select a Photo < /Text>
                </TouchableOpacity>
            
            < /View>
        )
    }
}

export default Photo
