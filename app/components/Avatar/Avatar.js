// this is where all the componenet stuff regaurding avatar will go

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native'; 


export default class Avatar extends Component {
  render() {
    return (
    	<View>
      <Text>Hello world!</Text>
     	</View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('juke', () => HelloWorldApp);
