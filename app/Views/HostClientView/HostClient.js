import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Host from '../../components/Host/Host.js';
import UserRequest from '../../components/UserRequest/UserRequest.js';


      export default class HostClient extends React.Component {
  render() {
    return (
      <Image style = {styles.container} source={require('../../images/jukebox-background.jpg')} resizeMode="cover">
        <View>
          <Host />
          <UserRequest />
        </View>
      </Image>
    );
  }
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
container: {
flex: 1,
width: undefined,
height: undefined,
backgroundColor:'transparent',
justifyContent: 'center',
alignItems: 'center',
  },

});
