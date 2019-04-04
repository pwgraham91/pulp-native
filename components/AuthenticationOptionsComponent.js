import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
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

  renderLoggedOut() {
    if (!this.props.user.userData) {
      const { navigate } = this.props.navigation;

      return (
        <View>
          <Button
            bordered
            light
            style={styles.buttonStyle}
            title={'Login'}
            onPress={() => navigate('LoginView')}
          />
          <Button
            bordered
            light
            style={styles.buttonStyle}
            title={'Signup'}
            onPress={() => navigate('SignupView')}
          />
        </View>
      );
    }
  }

  renderLoggedIn() {
    console.log('logged in', this.props.user);
    if (this.props.user.userData) {
      return (
        <View>
          <Button
            title={'Logout'}
            bordered
            light
            style={styles.buttonStyle}
            onPress={this.logout}
          />
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        {this.renderLoggedOut()}
        {this.renderLoggedIn()}
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
