import * as Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

// import Avatar from './app/components/Avatar';
// import Host from './app/components/Host/Host.js';
// import UserRequest from './app/components/UserRequest/UserRequest.js';
// import SpotifySoundCloud from './app/components/SpotifySoundCloud';
// import Toolbar from './app/components/Toolbar/Toolbar.js';
// import SearchBarr from './app/components/Searchbar/Searchbar.js';
import HostClient from './app/Views/HostClientView';
import ClientQueue from './app/Views/ClientQueue';
import SearchBarr from './app/components/Searchbar';

const AppNavigator = StackNavigator({
  HostClientView: { screen: HostClient },
  ClientQueueView: { screen: ClientQueue}
});

     export default class App extends React.Component {

      constructor (){
        super();
        console.warn("TEST NOAH");
      }
      static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <Image style = {styles.container} source={require('./app/images/jukebox-background.jpg')} resizeMode="cover">
        <View>
        <AppNavigator ref={nav => { this.navigator = nav; }} />
        </View>
      </Image>
    );
  }
}






export const styles = StyleSheet.create({
  
container: {
flex: 1,
width: undefined,
height: undefined,
backgroundColor:'transparent',
justifyContent: 'center',
alignItems: 'center',
  },

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('juke', () => SimpleApp);

// SEARCHBAR COMPONENT
//      export default class App extends React.Component {
//   render() {
//     return (
//       <Image style = {styles.containerr} source={require('./app/images/jukebox-background.jpg')} resizeMode="contain">
//         <View>
//         <SearchBarr />
//         </View>
//       </Image>
//     );
//   }
// }

