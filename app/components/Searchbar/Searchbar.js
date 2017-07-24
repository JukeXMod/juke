// Searchbar Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';


export default class SearchBarr extends Component {
  render() {
    return (
    	<View>
      		<SearchBar
  placeholder='Type Here...' />

<SearchBar
  noIcon
  placeholder='Type Here...' />

<SearchBar
  round
  placeholder='Type Here...' />

<SearchBar
  lightTheme
  placeholder='Type Here...' />

     	</View>
    );
  }
}




  // skip this line if using Create React Native App
AppRegistry.registerComponent('SearchBarr', () => HelloWorldApp);