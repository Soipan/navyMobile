import {postRequest, getRequest, customPostRequest, publicPostRequest} from '../../utilities';

export const authentication = {
  state: {
    isLoggedIn: false,
    user: {},
 },
  reducers: {
    setAuthStatusLoggedIn(state, user) {
      return {
        ...state,
        isLoggedIn: true,
        user: user,
      };
    },
    setAuthStatusLoggedOut(state, user) {
      return {
        ...state,
        isLoggedIn: false,
        user: user,
      };
    },
  },
  effects: dispatch => ({
    async signIn(credentials, rootState) {
      try {
        const response = await publicPostRequest(
          'user/login`',
          credentials,
        );
        if (response && response.data.success) {
        //   localStorage.setItem(
        //     '3bcbaf8f-5d37-419a-adff-14e949447bc1',
        //     JSON.stringify(response.data.data.user),
        //   );
        //   localStorage.setItem(
        //     '72236412-b0d9-4718-a709-9a405ddd3ce8',
        //     response.data.data.access_token,
        //   );
        //   localStorage.setItem(
        //     '8f604571-80db-4817-ba20-806ce5d067f2',
        //     response.data.data.refresh_token,
        //   );
          dispatch.authentication.setAuthStatusLoggedIn(
            response.data.data.user,
          );
          dispatch.alert.setSuccessAlert(response.data.message);
        } else {
          dispatch.alert.setFailureAlert(response.data.message);
        }
      } catch (error) {
        dispatch.alert.setAlert({type: 'Failure', message: error.message});
      }
    },
    async signUp(user, rootState) {
      try {
        const response = await publicPostRequest(
          'wellness/user/register',
          user,
        );
        if (response && response.data.success) {
          dispatch.alert.setSuccessAlert(response.data.message);
        } else {
          dispatch.alert.setFailureAlert(response.data.message);
        }
      } catch (error) {
        dispatch.alert.setFailureAlert(error.message);
      }
    },
    async signOut(user, rootState) {
      try {
        dispatch.authentication.setAuthStatusLoggedOut({});
        // localStorage.removeItem('3bcbaf8f-5d37-419a-adff-14e949447bc1');
        // localStorage.removeItem('72236412-b0d9-4718-a709-9a405ddd3ce8');
        // localStorage.removeItem('8f604571-80db-4817-ba20-806ce5d067f2');
      } catch (error) {
        dispatch.alert.setFailureAlert(error.message);
      }
    },
    async sendResetLink(user, rootState) {
      try {
        const response = await publicPostRequest('wellness/user/reset', user);
        if (response) {
          dispatch.alert.setAlert({
            type: response.data.success ? 'Success' : 'Failure',
            message: response.data.message,
          });
        }
      } catch (error) {
        dispatch.alert.setAlert({type: 'Failure', message: error.message});
      }
    },
  }),
};
