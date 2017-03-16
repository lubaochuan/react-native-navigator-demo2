import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch
} from 'react-native';

import { DinoScroll } from './DinoScroll';

export default class Home extends Component {

  state = {
    horizontalIsOn: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.title}</Text>
        <Text>Scroll Horizontal</Text>
        <Switch
          onValueChange={(value) => this.setState({horizontalIsOn: value})}
          style={
            {marginBottom: 10}
          }
          value={this.state.horizontalIsOn} />
        <DinoScroll
          style={styles.dinoList}
          horizontal={this.state.horizontalIsOn} />
      </View>
    )
  }
}

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
