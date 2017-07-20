import React from 'react';
import { StyleSheet, AppRegistry, Text, View, Image } from 'react-native';
import Avatar from './app/components/Avatar';
import Host from './app/components/Avatar/host.js';
import UserRequest from './app/components/Avatar/userRequest.js';
import BackgroundImage from './app/components/Avatar/backgroundImage.js';


export default class App extends React.Component {
  render() {
    return (
      <View>
        
        <BackgroundImage />
        <Host />
        <UserRequest />

      </View>

    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
      backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',

    }
});

      // <Image style = {styles.backgroundImage} source={require('./app/components/Avatar/images/brickwall.jpg')}>
      // </Image>