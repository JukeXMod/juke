// Request Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image } from 'react-native';
import Button from 'react-native-button';


export default class UserRequest extends Component {
  render() {
    return (
    	<View style = {styles.view}>
      <Text style = {styles.request}> Request </Text>
      <Button style = {styles.button}> <Image style = {styles.turntable} source={require('../../images/vinyl2.png')} resizeMode="contain"/>
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
  request: {
    color: '#F0F3F4',
    fontSize: 50,
    fontWeight: 'bold',
  },

  button: {
    marginTop:0,
  },

  turntable: {
    marginTop: 0,
    alignSelf: 'center',
    height: 150,
    width: 150,
    marginBottom: 50,

  }
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('juke', () => HelloWorldApp);