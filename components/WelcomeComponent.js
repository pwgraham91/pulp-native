import React, { Component } from 'react';
import {Button, View, Alert, StyleSheet, Text} from 'react-native';

export default class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { navigate } = this.props.navigation;
      return (
          <View style={styles.container}>
              <Text>Pulp Sports</Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});