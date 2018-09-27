import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { setAccessToken } from '../reducers/userReducer';
import { connect } from 'react-redux';

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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginViewComponent);
