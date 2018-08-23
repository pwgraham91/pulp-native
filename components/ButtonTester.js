import React, { Component } from 'react';
import { Button, View, Alert } from 'react-native';

export default class ButtonTester extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{padding: 10}}>
          <Button onPress={() => {
              Alert.alert('You tapped the button')
          }}
                  title="Tap this"
          />
      </View>
    );
  }
}