export const GET_REPOS = 'my-awesome-app/repos/LOAD';
export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

export default function userReducer(state = { }, action) {
  switch (action.type) {
    case GET_REPOS:
      console.log('action packed!', action)
      console.log('reducing...', { ...state, loading: true })
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export function listRepos() {
  return {
    type: GET_REPOS,
    otherThing: 'for the repo'
  };
}

