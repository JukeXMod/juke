// Host Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image } from 'react-native';
import Button from 'react-native-button';


export default class Host extends Component {
  render() {
    return (
    	<View style = {styles.view}>
      <Text style = {styles.host}> Host </Text>
      <Button style = {styles.button}> <Image style = {styles.jukebox} source={require('./images/jukebox.jpeg')} resizeMode="stretch"/>
  	</Button>

     	</View>
    );
  }
}

export const styles = StyleSheet.create({
  view: {
  	flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  host: {
  	color: 'red',
  	marginTop: 200,
  	fontSize: 30,
  },

  button: {
  	marginTop:10,
  },

  jukebox: {
  	marginTop: 200,
  	alignSelf: 'center',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 75,

  }
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('juke', () => HelloWorldApp);