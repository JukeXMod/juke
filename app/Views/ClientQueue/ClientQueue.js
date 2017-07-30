import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList } from 'react-native';
// import SpotifySoundCloud from '../components/SpotifySoundCloud/SpotifySoundCloud.js';
import Toolbar from '../../components/Toolbar/Toolbar.js';
import { StackNavigator } from 'react-navigation';




export default class ClientQueue extends React.Component {

  render() {
    return (
      <Image style = {styles.container} source={require('../../images/jukebox-background.jpg')} resizeMode="cover">
        <View>
        <Toolbar style = {styles.toolbar}>

          <View title="QUEUE" style={styles.content}>
           
            <FlatList style = {styles.list}
          data={[
            {key: 'PLACEHOLDER'},
            {key: 'PLACEHOLDERR'},
            {key: 'PLACEHOLDERRR'},
            {key: 'PLACEHOLDERRRR'},
            {key: 'PLACEHOLDERRRRR klasdjfkl;adsjfkl;sadjflsajlk;dfl;sadjfkljs;la'},
            {key: 'ABCj lksdfjas;dlkjflksadjfldksjl;kfjla;sjdfljsdkl;j'},
            {key: 'DEF'},
            {key: 'EFG'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
          </View>

          <View title="ADD SONG" style={styles.content}>
            
            <Text style={styles.text}>
            TEST TEST TEST TEST TEST TEST TEST TEST
              </Text>
          </View>


        </Toolbar>
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