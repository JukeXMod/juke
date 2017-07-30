// Request Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image } from 'react-native';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';


export default class UserRequest extends Component {

static navigationOptions = {
      title: 'Noah Testing'
    };


  render() {
    return (
    	<View >
      <Text > Request </Text>
      <Button> <Image style = {styles.turntable} source={require('../../images/vinyl2.png')} resizeMode="contain"/>
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


