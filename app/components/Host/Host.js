// Host Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image } from 'react-native';
import Button from 'react-native-button';


export default class Host extends Component {
  render() {
    return (
    	<View style = {styles.view}>
      <Text style = {styles.host}> Host </Text>
      <Button style = {styles.button}> <Image style = {styles.jukebox} source={require('../../images/jukebox1.png')} resizeMode="stretch"/>
  	</Button>

     	</View>
    );
  }
}

export const styles = StyleSheet.create({
  view: {
  	flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  host: {
    color: '#F0F3F4',
    fontSize: 50,
    fontWeight: 'bold',

  },

  button: {
  	marginTop: 0,
  },

  jukebox: {
  	marginTop: 0,
  	alignSelf: 'center',
    height: 150,
    width: 150,

  }
});




