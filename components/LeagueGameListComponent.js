import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  BackHandler,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { Leagues } from '../lib/info';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

class LeagueGameListComponent extends Component {
  _didFocusSubscription;
  _willBlurSubscription;

  constructor(props) {
    super(props);
    this.state = {
      ...this.props.navigation.state.params,
      events: [],
    };
    this.getSportsData = this.getSportsData.bind(this);
    this.onClickListItem = this.onClickListItem.bind(this);

    this._didFocusSubscription = props.navigation.addListener(
      'didFocus',
      payload =>
        BackHandler.addEventListener(
          'hardwareBackPress',
          this.onBackButtonPressAndroid
        )
    );
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

  componentDidMount() {
    this.getSportsData();
    this._willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      payload =>
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.onBackButtonPressAndroid
        )
    );
  }

  onBackButtonPressAndroid = () => {
    this.props.navigation.goBack();
    return true;
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  onClickListItem(event) {
    console.log('clicked list item', event);
    // todo redirect to an events page
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header} />
        <Content>
          <List>
            <View>
              {this.state.events.map(event => (
                <ListItem
                  style={styles.listItem}
                  key={event.id}
                  button={true}
                  onPress={() => this.onClickListItem(event)}
                >
                  <Text style={styles.listItemText}>{event.name}</Text>
                  <Text style={styles.listItemText}>
                    {event.display_minus_line}
                  </Text>
                </ListItem>
              ))}
            </View>
          </List>
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
  listItem: {
    flex: 1,
    flexDirection: 'column',
  },
  listItemText: {},
});

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueGameListComponent);
