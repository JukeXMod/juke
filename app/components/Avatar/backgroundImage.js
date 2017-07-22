// Background Image Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image } from 'react-native';
import Button from 'react-native-button';
import Host from './host.js';
import UserRequest from './userRequest.js';

export default class BackgroundImage extends Component {
  render() {
    return (
        <Image style = {styles.backgroundImage} source={require('./images/brickwall.jpg')}>
     
        </Image>
    );
  }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        backgroundColor:'transparent',

    }
});



// skip this line if using Create React Native App
AppRegistry.registerComponent('juke', () => HelloWorldApp);