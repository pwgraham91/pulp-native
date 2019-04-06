import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { setUserData } from '../reducers/userReducer';
import { connect } from 'react-redux';

class LoginViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
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
        navigate('LeagueGameList');
      })
      .catch(error => {
        console.log('signup error', error);
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
      <View>
        <Text>Sign up</Text>
      </View>
      // <Container style={styles.container}>
      //   <Form>
      //     <Item>
      //       <Input
      //         style={styles.textInput}
      //         placeholder="Name"
      //         onChangeText={this.updateName}
      //       />
      //     </Item>
      //     <Item>
      //       <Input
      //         style={styles.textInput}
      //         placeholder="Email Address"
      //         onChangeText={this.updateEmail}
      //       />
      //     </Item>
      //     <Item>
      //       <Input
      //         style={styles.textInput}
      //         placeholder="Password"
      //         secureTextEntry={true}
      //         onChangeText={this.updatePassword}
      //       />
      //     </Item>
      //     <Button
      //       style={styles.buttonStyle}
      //       title="Sign Up"
      //       onPress={this.authenticate}
      //     />
      //   </Form>
      // </Container>
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
