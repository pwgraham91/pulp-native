import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
        {this.state.events.map(function(event) {
          return <Text key={`text-${event.id}`}>{event.name}</Text>;
        })}
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
