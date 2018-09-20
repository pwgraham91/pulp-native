import React from 'react';
import { createStackNavigator } from 'react-navigation';
import WelcomeComponent from './components/WelcomeComponent';
import InputViewComponent from './components/InputViewComponent';
import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import userReducer from './reducers/userReducer';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/lib/persistReducer';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist/lib/index';

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeComponent,
    navigationOptions: {
      header: null,
    },
  },
  InputView: {
    screen: InputViewComponent,
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
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, appReducer);

const store = createStore(pReducer, applyMiddleware(middleware));
const persister = persistStore(store);

const App = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
}
