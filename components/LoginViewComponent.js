import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { setUserData } from '../reducers/userReducer';
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
        this.props.setUserData(responseJson.data);
        const { navigate } = this.props.navigation;
        navigate('Welcome');
      })
      .catch(error => {
        console.log('login error', error);
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
        <Text>Login</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email Address"
          onChangeText={this.updateEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
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
  setUserData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginViewComponent);
