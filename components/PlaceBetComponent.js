import React, { Component } from 'react';
import { Button, Picker, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Title } from 'native-base';

class PlaceBetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.state,
      betAmount: 10,
      sideSelected: this.props.state.event.team_1.id,
    };
    this.updateBetAmount = this.updateBetAmount.bind(this);
    this.placeBet = this.placeBet.bind(this);
    this.getUserBets = props.getUserBets;
  }

  updateBetAmount(text) {
    this.setState({
      ...this.state,
      betAmount: text,
    });
  }

  placeBet() {
    this.props.user.axios
      .post(
        `/event/${this.state.event.id}/wager`,
        JSON.stringify({
          team_id: this.state.sideSelected,
          amount: this.state.betAmount,
        })
      )
      .then(() => {
        this.getUserBets();
      })
      .catch(error => {
        console.log('error =>', error);
      });
  }

  static getBetAmounts() {
    return [...Array(11).keys()].filter(i => i !== 0).map(i => i * 10);
  }

  render() {
    if (this.state.userLoggedIn) {
      return (
        <View>
          <View style={styles.betAmountView}>
            <Title>Bet Amount</Title>
            <Picker
              style={styles.picker}
              selectedValue={this.state.betAmount}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ ...this.state, betAmount: itemValue })
              }
            >
              {PlaceBetComponent.getBetAmounts().map((value, index) => {
                return (
                  <Picker.Item
                    style={styles.picker}
                    key={index}
                    label={value.toString()}
                    value={value}
                  />
                );
              })}
            </Picker>
          </View>
          <Title>Choose Side</Title>
          <Picker
            style={styles.picker}
            selectedValue={this.state.sideSelected}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ ...this.state, sideSelected: itemValue })
            }
          >
            <Picker.Item
              style={styles.pickerItem}
              label={this.state.event.team_1.team_name}
              value={this.state.event.team_1.id}
            />
            <Picker.Item
              style={styles.pickerItem}
              label={this.state.event.team_2.team_name}
              value={this.state.event.team_2.id}
            />
          </Picker>
          <Button title="Place Bet" onPress={this.placeBet} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  betAmountView: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceBetComponent);
