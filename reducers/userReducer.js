export const SET_ACCESS_TOKEN = 'set_access_token';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
}

export function setAccessToken(accessToken) {
  return {
    type: SET_ACCESS_TOKEN,
    accessToken,
  };
}
