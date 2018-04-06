import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, Image } from 'react-native';
import Homepage from './Components/Homepage.js';
import DHClogo from './Images/DHC-wordmark-white.png'
import Amplify, { Auth } from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

export default class App extends React.Component {
  state = { // 1
    authCode: ''
  }

  onChangeText(authCode) { // 2
    this.setState({ authCode })
  }

  signUp() {
    Auth.signUp({ // 3
      username: 'myCoolUsername',
      password: 'MyCoolP@ssword2!',
      attributes: {
        phone_number: '+15555555555',
        email: 'yourcoolemail@gmail.com'
      }
    })
    .then(res => {
      console.log('successful signup: ', res)
    })
    .catch(err => {
      console.log('error signing up: ', err)
    })
  }

  confirmUser() { // 4
    const { authCode } = this.state
    Auth.confirmSignUp('myCoolUsername', authCode)
      .then(res => {
        console.log('successful confirmation: ', res)
      })
      .catch(err => {
        console.log('error confirming user: ', err)
      })
  }

  signIn() { // 1
    Auth.signIn(username, password)
      .then(user => {
      // save user in state somewhere
      })
      .catch(err => {
        console.log('error signing in: ', err)
      })
  }
  
  confirmSignIn() { // 2
    Auth.confirmSignIn(user, authCode)
      .then(user => {
        console.log('user: ', user)
      }).catch(err => {
        console.log('error confirming sign in: ', err)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={DHClogo} aspectRatio=".9" resizeMode="contain" />
        <Text style={styles.text1}>
          Doctors for Healthy Communities
        </Text>
        <Text style={styles.text2}>
          Volunteer Log
        </Text>
        <Button style={styles.button} color="#e86386"  title='Sign Up' onPress={this.signUp.bind(this)} />
        <TextInput placeholder='Input Code' onChangeText={value => this.onChangeText(value)} style={styles.input} />
        <Button title='Confirm User' onPress={this.confirmUser.bind(this)} />
        <Text style={styles.text3}>
          © Doctors for Healthy Communities 2018
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#68cded',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    padding: 30,
    flex: 3
  },
  text1: {
    flex: 1,
    padding: 10,
    fontSize: 25,
    textAlign: "center",
    color: 'white',
    fontWeight: 'bold'
  },
  text2: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    color: 'white',
    fontWeight: 'bold'
  },
  text3: {
    textAlign: "center",
    padding: 20
  },
  button: {
    flex: 2,
    padding: 10
  },
  input: {
    height: 50,
    backgroundColor: '#ededed',
    marginVertical: 10
  }
});
