import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import Home from './components/Home';

export default class App extends Component {

  render() {
    return (
      <Navigator
        initialRoute={
          { title: 'Welcome to Bouncing Dinos!' }
        }
        renderScene={(route, navigator) => {
          return (
            <Home {...route} />
          );
        }}
      />
    );
  }
}
