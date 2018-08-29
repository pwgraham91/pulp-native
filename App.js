import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import InputTester from "./components/InputTester";
import ButtonTester from "./components/ButtonTester";
import {createStackNavigator} from "react-navigation";
import WelcomeComponent from "./components/WelcomeComponent";

const App = createStackNavigator(
    {
        Welcome: {
            screen: WelcomeComponent,
            navigationOptions: {
                header: null
            }
        },
        InputTester_: { screen: InputTester }
    },
);
export default App
