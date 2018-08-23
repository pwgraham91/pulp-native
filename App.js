import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import InputTester from "./components/InputTester";
import ButtonTester from "./components/ButtonTester";

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
                <ButtonTester/>
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
