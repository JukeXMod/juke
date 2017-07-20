// Request Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image } from 'react-native';
import Button from 'react-native-button';


export default class UserRequest extends Component {
  render() {
    return (
    	<View style = {styles.view}>
      <Text style = {styles.request}> Request </Text>
      <Button style = {styles.button}> <Image style = {styles.turntable} source={require('./images/turntable.jpg')} resizeMode="contain"/>
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
  request: {
    color: 'blue',
    marginTop: 700,
    fontSize: 30,
  },

  button: {
    marginTop:10,
  },

  turntable: {
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