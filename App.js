import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Avatar from './app/components/Avatar';
import Host from './app/components/Avatar/host.js';
import UserRequest from './app/components/Avatar/userRequest.js';
import BackgroundImage from './app/components/Avatar/backgroundImage.js';
import Queue from './app/components/Avatar/clientQueue.js';
import Toolbar from './app/components/Avatar/toolbar.js';
import SearchBarr from './app/components/Avatar/searchbar.js';

     export default class App extends React.Component {
  render() {
    return (
      <Image style = {styles.container} source={require('./app/components/Avatar/images/jukebox-background.jpg')} resizeMode="cover">
        <View>
          <SearchBarr />
        </View>
      </Image>
    );
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <Image style = {styles.container} source={require('./app/components/Avatar/images/jukebox-background.jpg')} resizeMode="cover">
//         <View>
//         <Toolbar style = {styles.toolbar}>

//           <View title="QUEUE" style={styles.content}>
           
//             <FlatList style = {styles.list}
//           data={[
//             {key: 'PLACEHOLDER'},
//             {key: 'PLACEHOLDERR'},
//             {key: 'PLACEHOLDERRR'},
//             {key: 'PLACEHOLDERRRR'},
//             {key: 'PLACEHOLDERRRRR klasdjfkl;adsjfkl;sadjflsajlk;dfl;sadjfkljs;la'},
//             {key: 'ABCj lksdfjas;dlkjflksadjfldksjl;kfjla;sjdfljsdkl;j'},
//             {key: 'DEF'},
//             {key: 'EFG'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//           </View>

//           <View title="ADD SONG" style={styles.content}>
            
//             <Text style={styles.text}>
//               FUCK ME FUCK ME FUCK ME FUCK ME FUCK ME FUCK ME
//               </Text>
//           </View>


//         </Toolbar>
//         </View>
//       </Image>
//     );
//   }
// }


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

 

// COMPONENT BELOW RENDERS THE HOST REQUEST PAGE
//       export default class App extends React.Component {
//   render() {
//     return (
//       <Image style = {styles.container} source={require('./app/components/Avatar/images/jukebox-background.jpg')} resizeMode="cover">
//         <View>
//           <Host />
//           <UserRequest />
//         </View>
//       </Image>
//     );
//   }
// }

