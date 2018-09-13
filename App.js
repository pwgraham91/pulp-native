import React from 'react';
import {createStackNavigator} from "react-navigation";
import WelcomeComponent from "./components/WelcomeComponent";
import InputViewComponent from "./components/InputViewComponent";
import { createNavigationReducer, createReactNavigationReduxMiddleware, reduxifyNavigator } from "react-navigation-redux-helpers";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider, connect} from 'react-redux';

const AppNavigator = createStackNavigator(
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
const navReducer = createNavigationReducer(AppNavigator)
const appReducer = combineReducers({
    nav: navReducer
});
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
