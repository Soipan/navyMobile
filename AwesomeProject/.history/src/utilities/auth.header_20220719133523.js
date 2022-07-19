import {store} from '../redux';

export function authHeader() {
  const _store = store.getState();
  const {accessToken} = _store.authentication.user;
  return accessToken ? `Bearer ${accessToken}` : null;
}
