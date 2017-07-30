import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import Host from '../../components/Host/Host.js';
import UserRequest from '../../components/UserRequest/UserRequest.js';
import { StackNavigator } from 'react-navigation';
import ClientQueue from '../ClientQueue';


 

export default class HostClient extends React.Component {

  constructor(){
    super();

  }

  someEvent() {
    // call navigate for AppNavigator here:
    this.navigator && this.navigator.dispatch({ type: 'Navigate', routeName, params });
  }
        
  render() {

    return (

        <View>
          <Host />
          <UserRequest />
          <Button onPress={() => this.props.navigation.navigate('ClientQueueView')}
        title="TESTTTTT"/>
        </View>
    );
  }
}
const AppNavigator = StackNavigator({
  ClientQueueView: { screen: ClientQueue}
});

  

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
