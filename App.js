import React from 'react';
import { createStackNavigator } from 'react-navigation';
import WelcomeComponent from './components/WelcomeComponent';
import LoginViewComponent from './components/LoginViewComponent';
import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import userReducer from './reducers/userReducer';
import SignupViewComponent from './components/SignupViewComponent';

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeComponent,
    navigationOptions: {
      header: null,
    },
  },
  LoginView: {
    screen: LoginViewComponent,
    navigationOptions: {
      header: null,
    },
  },
  SignupView: {
    screen: SignupViewComponent,
    navigationOptions: {
      header: null,
    },
  },
});
const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  user: userReducer,
  nav: navReducer,
});

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const App = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer, applyMiddleware(middleware));

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
