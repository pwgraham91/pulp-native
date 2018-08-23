import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import InputTester from "./components/InputTester";

export default class App extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
            <View style={styles.container}>
                <Image source={pic} style={{
                    width: 193,
                    height: 110
                }} />
                <InputTester/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
