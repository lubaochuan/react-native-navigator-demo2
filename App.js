import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform,
  Text,
  View,
  Switch,
  Navigator
} from 'react-native';

import { DinoScroll } from './components/DinoScroll';

export default class App extends Component {

  state = {
    horizontalIsOn: false,
  };

  render() {
    return (
      <Navigator
        initialRoute={
          {title: 'Welcome to Bouncing Dinos!'}
        }
        renderScene={(route, navigator) =>
          <View style={styles.container}>
            <Text style={styles.header}>{route.title}</Text>
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
        }
      />
    );
  }
}

let { height, width } = Dimensions.get('window');

console.log("window height:"+height);
console.log("window width:"+width);

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
