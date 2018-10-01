import { buildAxios } from '../lib/requestsLib';
import { AsyncStorage } from 'react-native';

const SET_ACCESS_TOKEN = 'set_access_token';
const SET_STATE_FROM_STORAGE = 'set_state_from_storage';

function setUserAsyncStorage(state) {
  AsyncStorage.setItem('@UserStore:userState', JSON.stringify(state));
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
    case SET_ACCESS_TOKEN:
      const accessTokenState = {
        ...state,
        accessToken: action.accessToken,
        axios: buildAxios({ Authorization: `Bearer ${action.accessToken}` }),
      };
      setUserAsyncStorage(accessTokenState);
      return accessTokenState;
    case SET_STATE_FROM_STORAGE:
      const loadedState = JSON.parse(action.storageState);
      if (loadedState.accessToken) {
        return {
          ...loadedState,
          axios: buildAxios({
            Authorization: `Bearer ${loadedState.accessToken}`,
          }),
        };
      }
      return loadedState;
    default:
      return {
        axios: buildAxios(),
        ...state,
      };
  }
}

export function setAccessToken(accessToken) {
  return {
    type: SET_ACCESS_TOKEN,
    accessToken,
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
