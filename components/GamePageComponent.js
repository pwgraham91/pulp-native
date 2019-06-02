import React, { Component } from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Text } from 'native-base';
import PlaceBetComponent from './PlaceBetComponent';

class GamePageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.navigation.state.params,
      userLoggedIn: this.props.user.userData !== undefined,
      user: this.props.user,
    };
  }

  componentDidMount() {
    if (this.state.userLoggedIn) {
      this.getUserBets();
    }
  }

  getUserBets() {
    this.props.user.axios
      .get(`/event/${this.state.event.id}/wager`)
      .then(responseJson => {
        console.log('user wagers', responseJson.data.results.data);
        this.setState({
          ...this.state,
          userWagers: responseJson.data.results.data,
        });
      })
      .catch(error => {
        console.log('error getting wagers', error);
      });
  }

  renderUserBets(userBets) {
    // todo: get all user bets here and render them

    if (this.state.userLoggedIn) {
      return (
        <View>
          <Text>User bets</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header} />
        <Content>
          <View>
            <Text>{this.state.event.name}</Text>
            <Text>{this.state.event.line}</Text>
          </View>
          {this.renderUserBets(this.state.userWagers)}
          <PlaceBetComponent state={this.state} />
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
