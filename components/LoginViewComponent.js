import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {
  incrementCounterAction,
  setAccessToken,
} from '../reducers/userReducer';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';

class LoginViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.storeData = this.storeData.bind(this);
    this.verify = this.verify.bind(this);
  }

  verify() {
    this.props.user.axios
      .get('/protected')
      .then(responseJson => {
        console.log('response', responseJson);
      })
      .catch(error => {
        console.log('error', error);
      });
  }
  authenticate() {
    this.props.user.axios
      .post('/login', JSON.stringify(this.state))
      .then(responseJson => {
        this.props.setAccessToken(responseJson.data.access_token);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  updateEmail(text) {
    this.setState({
      ...this.state,
      email: text,
    });
  }

  updatePassword(text) {
    this.setState({
      ...this.state,
      password: text,
    });
  }

  incrementCounter() {
    this.props.incrementCounterAction();
    // this._retrieveData();
  }

  storeData() {
    this._storeData();
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@UserStore:incrementer');
      const parsed = JSON.parse(value);
      console.log('valuing', parsed);
      console.log('valuing2', parsed.increment);
    } catch (error) {
      console.log('erroring', error);
      // Error retrieving data
    }
  };
  _storeData = async () => {
    try {
      console.log('storing');
      // todo move this code to the reducer and save the access token to local storage then get it on the way in for default
      await AsyncStorage.setItem(
        '@UserStore:incrementer',
        JSON.stringify({
          increment: 2,
        })
      );
    } catch (error) {
      console.log('error store', error);
      // Error saving data
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Log In</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email Address"
          onChangeText={this.updateEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={this.updatePassword}
        />
        <Button
          style={styles.buttonStyle}
          title="Log In"
          onPress={this.authenticate}
        />
        <Button
          style={styles.buttonStyle}
          title="Increment"
          onPress={this.incrementCounter}
        />
        <Button
          style={styles.buttonStyle}
          title="store"
          onPress={this.storeData}
        />
        <Button
          style={styles.buttonStyle}
          title="verify"
          onPress={this.verify}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 100,
  },
  textInput: {},
  buttonStyle: {
    padding: 10,
    backgroundColor: '#202646',
    borderRadius: 5,
    width: 200,
    margin: 10,
  },
});

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  setAccessToken,
  incrementCounterAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginViewComponent);
