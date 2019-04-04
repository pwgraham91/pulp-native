import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, Text } from 'react-native';
import { connect } from 'react-redux';

class LeagueListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {/* todo render buttons dynamically with a leagues list */}
        <Button
          title={'NFL'}
          bordered
          light
          style={styles.buttonStyle}
          onPress={() =>
            navigate('WelcomeComp', {
              league: 'NFL',
            })
          }
        />
        <Button
          title={'NBA'}
          bordered
          light
          style={styles.buttonStyle}
          onPress={() =>
            navigate('LeagueGameList', {
              league: 'NBA',
            })
          }
        />
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

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueListComponent);
