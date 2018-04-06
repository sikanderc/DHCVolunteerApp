import React, { Component } from 'react';
import { View, Button, Alert, Text, Image } from 'react-native';
import DHClogo from '../Images/DHC-wordmark-white.png'

export default class Homepage extends Component {
  render() {

    return (
      <View style={{flex: 1, alignItems:"center"}}>
        <Image style={{padding: 30, flex: 3}} source={DHClogo} aspectRatio=".9" resizeMode="contain" />
        <Text style={{flex: 1, padding: 10, fontSize: 25, textAlign: "center", color: 'white', fontWeight: 'bold'}}>
          Doctors for Healthy Communities
        </Text>
        <Text style={{flex: 1, fontSize: 20, textAlign: "center", color: 'white', fontWeight: 'bold'}}>
          Volunteer Log
        </Text>
        <Button style={{flex: 2, padding: 10}} color="#e86386" title="Login/Sign up"
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
        />
        <Text style={{textAlign: "center", padding: 20}}>
          © Doctors for Healthy Communities 2018
        </Text>
      </View>
    );
  }
}
