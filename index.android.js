import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

class Main extends Component{
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('RN_NavigatorDemo2', () => Main);
