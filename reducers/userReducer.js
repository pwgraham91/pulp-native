import { buildAxios } from '../lib/requestsLib';

export const SET_ACCESS_TOKEN = 'set_access_token';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      // todo parse access token and get info from it
      return {
        ...state,
        accessToken: action.accessToken,
        axios: buildAxios({ Authorization: `Bearer ${action.accessToken}` }),
      };
    default:
      return {
        ...state,
        axios: buildAxios(),
      };
  }
}

export function setAccessToken(accessToken) {
  return {
    type: SET_ACCESS_TOKEN,
    accessToken,
  };
}
