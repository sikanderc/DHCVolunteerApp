import React, { Component } from 'react';
import { Image } from 'react-native';
import DHClogo from '../Images/DHC-logo-white.png'

export default class Homepage extends Component {
  render() {

    return (
      <Image source={DHClogo} style={{width: 205, height: 240}}/>
    );
  }
}
