import { buildAxios } from '../lib/requestsLib';
import { AsyncStorage } from 'react-native';

const SET_USER_DATA = 'set_user_data';
const SET_STATE_FROM_STORAGE = 'set_state_from_storage';
const LOGOUT = 'logout';

function setUserAsyncStorage(state) {
  AsyncStorage.setItem('@UserStore:userState', JSON.stringify(state));
}

function clearUserAsyncStorage() {
  AsyncStorage.removeItem('@UserStore:userState');
}

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case 'increment_counter':
      const incrementState = {
        ...state,
        counter: (state.counter += 1),
      };
      setUserAsyncStorage(incrementState);
      return incrementState;
    case SET_USER_DATA:
      const userState = {
        userData: action.userData,
        axios: buildAxios({
          Authorization: `Bearer ${action.userData.access_token}`,
        }),
      };
      setUserAsyncStorage(userState);
      return userState;
    case SET_STATE_FROM_STORAGE:
      const loadedState = JSON.parse(action.storageState);
      if (loadedState.userData) {
        const mystate = {
          ...loadedState,
          axios: buildAxios({
            Authorization: `Bearer ${loadedState.userData.access_token}`,
          }),
        };

        return mystate;
      }
      return loadedState;
    case LOGOUT:
      clearUserAsyncStorage();
      return {};
    default:
      return {
        axios: buildAxios(),
        ...state,
      };
  }
}

export function setUserData(userData) {
  return {
    type: SET_USER_DATA,
    userData,
  };
}

export function incrementCounterAction() {
  return {
    type: 'increment_counter',
  };
}

export function setStateFromStorage(storageState) {
  return {
    type: SET_STATE_FROM_STORAGE,
    storageState,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
