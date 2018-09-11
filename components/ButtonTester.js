import React, { Component } from 'react';
import { Button, View, Alert } from 'react-native';

export default class ButtonTester extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
      const { navigate } = this.props.navigation;
      return (
          <View style={{padding: 10}}>
              <Button onPress={() => {
                  Alert.alert('You tapped the button')
              }}
                      title="Tap this"
              />
              <Button
                  title="Go to Jane's profile"
                  onPress={() => navigate('InputTester_')}
              />
          </View>
      );
  }
}