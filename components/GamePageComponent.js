import React, { Component } from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Text, Body, Title } from 'native-base';
import PlaceBetComponent from './PlaceBetComponent';

class GamePageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.navigation.state.params,
      userLoggedIn: this.props.user.userData !== undefined,
      user: this.props.user,
      userWagers: [],
    };
    this.getUserBets = this.getUserBets.bind(this);
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
    if (this.state.userLoggedIn) {
      return (
        <View>
          <Title>User bets</Title>
          {userBets.map(userBet => {
            return <Text key={userBet.id}>{userBet.display_text}</Text>;
          })}
        </View>
      );
    }
  }

  render() {
    console.log('rendering', this.state.event);
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.headerTitle}>{this.state.event.name}</Title>
          </Body>
        </Header>
        <Content>
          <View>
            <Text>{this.state.event.display_minus_line}</Text>
          </View>
          {this.renderUserBets(this.state.userWagers)}
          <View style={styles.placeBet}>
            <PlaceBetComponent
              state={this.state}
              getUserBets={this.getUserBets}
            />
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
  headerTitle: {
    color: 'white',
  },
  placeBet: {
    marginBottom: 50,
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
