import React, { Component } from 'react';
import { StyleSheet, Dimensions, Platform, Text, View, Switch, Navigator } from 'react-native';
import { DinoScroll } from './components/DinoScroll';

export default class App extends Component {

  state = {
    horizontalIsOn: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Bouncing Dinos!</Text>
        <Text>Scroll Horizontal</Text>
        <Switch
          onValueChange={(value) => this.setState({horizontalIsOn: value})}
          value={this.state.horizontalIsOn} />
        <DinoScroll horizontal={this.state.horizontalIsOn} />
      </View>
    );
  }
}

let { height, width } = Dimensions.get(`window`);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
    borderWidth: 25,
  },
  header: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 25,
  },
  dinoList: {
    padding: 10,
  },
})
