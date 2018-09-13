import React, { Component } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {apiURL} from "../appConfig";
import {listRepos} from "../reducers/userReducer";
import { connect } from 'react-redux';

class InputViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }

    componentDidMount() {
        console.log('listing!')
        this.props.listRepos()
    }

    authenticate() {
        fetch(`${apiURL}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                const accessToken = responseJson.access_token
                // todo add this to state
            })
            .catch((error) => {
                console.error('error', error)
            })
    }

    updateEmail(text) {
        this.setState({
            ...this.state,
            email: text
        });
    }

    updatePassword(text) {
        this.setState({
            ...this.state,
            password: text
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Log In</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email Address"
                    onChangeText={this.updateEmail}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={this.updatePassword}
                />
                <Button
                    style={styles.buttonStyle}
                    title="Log In"
                    onPress={this.authenticate}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 100
    },
    textInput: {
    },
    buttonStyle: {
        padding: 10,
        backgroundColor: '#202646',
        borderRadius: 5,
        width: 200,
        margin: 10
    }
});

const mapStateToProps = state => {
    console.log('mapping state', state)
  return {
    repos: 'these are repos?'
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(InputViewComponent);

