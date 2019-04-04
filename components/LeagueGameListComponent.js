import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Platform,
  StatusBar,
  BackHandler,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { Leagues } from '../lib/info';

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
        console.log('event', responseJson.data.results.data);
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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.events.map(function(event) {
            return { key: event.name };
          })}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
