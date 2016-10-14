import * as types from './actionTypes';

export function appInitialized() {
  return async function(dispatch, getState) {
    // since all business logic should be inside redux actions
    // this is a good place to put your app initialization code
    dispatch(changeAppRoot('login'));
  };
}

export function changeAppRoot(root) {
  return {type: types.ROOT_CHANGED, root: root};
}

function changeUser(userId) {
  return {type: types.USER_CHANGED, user: {id: userId}};
}
export function login(userId) {
  return async function(dispatch, getState) {
    // login logic would go here, and when it's done, we switch app roots
    dispatch(changeUser(userId));

    dispatch(changeAppRoot('after-login'));
  };
}