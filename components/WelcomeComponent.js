import React, { Component } from 'react';
import { AsyncStorage, View, StyleSheet, Image } from 'react-native';
import AuthenticationOptionsComponent from './AuthenticationOptionsComponent';
import { setStateFromStorage } from '../reducers/userReducer';
import { connect } from 'react-redux';

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.loadState();
  }

  loadState = async () => {
    const savedState = await AsyncStorage.getItem('@UserStore:userState');
    if (savedState) {
      this.props.setStateFromStorage(savedState);
      if (this.props.user.userData.access_token) {
        const { navigate } = this.props.navigation;
        navigate('NflGameList');
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../static/logo/icon-left-font.png/')}
          style={{
            width: 400,
            height: 100,
            marginTop: 100,
            marginBottom: 100,
          }}
        />
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
  },
});

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  setStateFromStorage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeComponent);
