import * as Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList } from 'react-native';
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


     export default class App extends React.Component {
      static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigation } = this.props;
    return (
      <HostClient navigation={navigation} />
      
    );
  }
}

const SimpleApp = StackNavigator({
  HostClient: { screen: HostClient },
  ClientQueue: { screen: ClientQueue},
});


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

//<Image style = {styles.container} source={require('./app/images/jukebox-background.jpg')} resizeMode="cover">
        //<View>
        //<HostClient />
        //</View>
      //</Image>


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
// skip this line if using Create React Native App
AppRegistry.registerComponent('juke', () => HelloWorldApp);
