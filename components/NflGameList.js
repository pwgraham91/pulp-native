import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'native-base';

class NflGameList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('rndering nfl');
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
        <Text>NFL</Text>
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
)(NflGameList);
