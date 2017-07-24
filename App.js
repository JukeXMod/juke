import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList } from 'react-native';
// import Avatar from './app/components/Avatar';
// import Host from './app/components/Host/Host.js';
// import UserRequest from './app/components/UserRequest/UserRequest.js';
// import SpotifySoundCloud from './app/components/SpotifySoundCloud';
// import Toolbar from './app/components/Toolbar/Toolbar.js';
// import SearchBarr from './app/components/Searchbar/Searchbar.js';
import HostClient from './app/Views/HostClientView';
import ClientQueue from './app/Views/ClientQueue';

     export default class App extends React.Component {
  render() {
    return (
      <Image style = {styles.container} source={require('./app/images/jukebox-background.jpg')} resizeMode="cover">
        <View>
         <ClientQueue />
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


// SEARCHBAR COMPONENT
//       export default class App extends React.Component {
//   render() {
//     return (
//       <Image style = {styles.container} source={require('./app/components/Avatar/images/jukebox-background.jpg')} resizeMode="cover">
//         <View>
//           <SearchBarr />
//         </View>
//       </Image>
//     );
//   }


