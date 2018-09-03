import React, { Component } from 'react';
import {Button, View, Alert, StyleSheet, Text, Image, WebView} from 'react-native';
import AuthenticationOptionsComponent from "./AuthenticationOptionsComponent";

export default class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { navigate } = this.props.navigation;
      return (
          <View style={styles.container}>
              <Image source={require('../static/logo/icon-left-font.png/')} style={{
                  width: 400,
                  height: 100,
                  marginTop: 100,
                  marginBottom: 100
              }} />
              <AuthenticationOptionsComponent navigation={this.props.navigation} />
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#2F3033',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});