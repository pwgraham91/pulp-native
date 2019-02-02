import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'native-base';
import { logout } from '../reducers/userReducer';
import { connect } from 'react-redux';

class AuthenticationOptionsComponent extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
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
        <Button
          bordered
          light
          style={styles.buttonStyle}
          onPress={() => navigate('SignupView')}
        >
          <Text style={styles.textStyle}>Signup</Text>
        </Button>
        <Button bordered light style={styles.buttonStyle} onPress={this.logout}>
          <Text style={styles.textStyle}>Logout</Text>
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
    marginBottom: 20,
  },
});

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationOptionsComponent);
