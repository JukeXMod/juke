// Request Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image } from 'react-native';
import Button from 'react-native-button';


export default class UserRequest extends Component {
  render() {
    return (
    	<View style = {styled.view}>
      Test

     	</View>
    );
  }
}

export const styled = StyleSheet.create({
  view: {
  	flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('juke', () => HelloWorldApp);