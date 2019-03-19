import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
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

class LeagueGameListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.navigation.state.params,
    };
  }

  // Later on in your component
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
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
              <ListItem>
                <Text>Aaron Bennet</Text>
              </ListItem>
              <ListItem>
                <Text>Ali Connors</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text>B</Text>
              </ListItem>
              <ListItem>
                <Text>Bradley Horowitz</Text>
              </ListItem>
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
