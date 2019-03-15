import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';

class LeagueListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image
          source={require('../static/logo/icon-left-font.png/')}
          style={{
            width: 400,
            height: 100,
            marginTop: 100,
            marginBottom: 100,
          }}
        />
        {/* todo render buttons dynamically with a leagues list */}
        <Button
          bordered
          light
          style={styles.buttonStyle}
          onPress={() =>
            navigate('LeagueGameList', {
              league: 'NFL',
            })
          }
        >
          <Text style={styles.textStyle}>NFL</Text>
        </Button>
        <Button
          bordered
          light
          style={styles.buttonStyle}
          onPress={() =>
            navigate('LeagueGameList', {
              league: 'NBA',
            })
          }
        >
          <Text style={styles.textStyle}>NBA</Text>
        </Button>
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
