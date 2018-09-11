import React from 'react';
import {createStackNavigator} from "react-navigation";
import WelcomeComponent from "./components/WelcomeComponent";
import InputViewComponent from "./components/InputViewComponent";

const App = createStackNavigator(
    {
        Welcome: {
            screen: WelcomeComponent,
            navigationOptions: {
                header: null
            }
        },
        InputView: {
            screen: InputViewComponent,
            navigationOptions: {
                header: null
            }
        }
    },
);
export default App
