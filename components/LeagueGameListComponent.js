import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';
import { Leagues } from '../lib/info';

class LeagueGameListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.navigation.state.params,
      events: ['kkjk'],
    };
    this.getSportsData = this.getSportsData.bind(this);
  }

  getSportsData() {
    this.props.user.axios
      .get(`/event/league/${Leagues[this.state.league]}`)
      .then(responseJson => {
        this.setState({
          ...this.state,
          events: responseJson.data.results.data,
        });
      })
      .catch(error => {
        console.log('error getting events', error);
      });
  }

  // Later on in your component
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    this.getSportsData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>{this.state.league}</Title>
            </Body>
            <Right />
          </Header>

          <Content>
            <List>
              <ListItem itemDivider>
                <Text>A</Text>
              </ListItem>
              {this.state.events.map(function(event) {
                return (
                  <ListItem key={`list-item-${event.id}`}>
                    <Text key={`text-${event.id}`}>{event.name}</Text>
                  </ListItem>
                );
              })}
            </List>
          </Content>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueGameListComponent);
