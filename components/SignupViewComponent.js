import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { setUserData } from '../reducers/userReducer';
import { connect } from 'react-redux';

class LoginViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      email: '',
      password: '',
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate() {
    this.props.user.axios
      .post('/create_user', JSON.stringify(this.state))
      .then(responseJson => {
        this.props.setUserData(responseJson.data);
        const { navigate } = this.props.navigation;
        navigate('Welcome');
      })
      .catch(error => {
        console.log('signup error', error);
      });
  }

  updateUsername(text) {
    this.setState({
      ...this.state,
      username: text,
    });
  }

  updateName(text) {
    this.setState({
      ...this.state,
      name: text,
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
        <Text>Sign Up</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={this.updateUsername}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={this.updateName}
        />
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
          title="Sign Up"
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
