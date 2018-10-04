import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'native-base';

export default class AuthenticationOptionsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
          bordered
          light
          style={styles.buttonStyle}
          onPress={() => navigate('LoginView')}
        >
          <Text style={styles.textStyle}>Login</Text>
        </Button>
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
  },
  buttonStyle: {
    width: 200,
    justifyContent: 'center',
  },
});
