import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './Components/Homepage.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Homepage/>
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
});
