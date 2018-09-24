import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class AuthenticationOptionsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigate('LoginView')}
        >
          <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: '#202646',
    borderRadius: 5,
    width: 200,
    margin: 10,
  },
});
