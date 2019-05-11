import React, { Component } from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Text } from 'native-base';

class GamePageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.navigation.state.params,
    };
    console.log('state', this.state);
  }

  render() {
    // todo: take state and render information
    // todo: get all user bets here and render them
    // todo: let the user place a bet from here
    return (
      <Container style={styles.container}>
        <Header style={styles.header} />
        <Content>
          <View>
            <Text>Game Page Component</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  header: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#2F3033',
  },
});

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePageComponent);
