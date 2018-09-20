import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class InputTester extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Peter?' };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Your name here"
          onChangeText={text => this.setState({ text })}
        />
        <Text>Say my name!</Text>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}
