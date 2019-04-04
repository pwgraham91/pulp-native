import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Platform,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { Leagues } from '../lib/info';

class LeagueGameListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.navigation.state.params,
      events: [],
    };
    this.getSportsData = this.getSportsData.bind(this);
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

  // Later on in your component
  componentDidMount() {
    this.getSportsData();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          {this.state.events.map(function(event) {
            return <Text key={`text-${event.id}`}>{event.name}</Text>;
          })}
        </View>
        <Button // todo override the android back button to do this
          title={'Back'}
          bordered
          light
          onPress={() => this.props.navigation.goBack()}
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
