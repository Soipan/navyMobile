import { postRequest } from "../../utilities";

export const alert = {
  state: {
    type: null,
    message: null,
  },
  reducers: {
    setFailureAlert(state, message) {
      return {
        ...state,
        type: "Failure",
        message: message,
      };
    },
    setAlert(state, payload) {
      return {
        ...state,
        type: payload.type,
        message: payload.message,
      };
    },
    setSuccessAlert(state, message) {
      return {
        ...state,
        type: "Success",
        message: message,
      };
    },
    clearAlert(state, message) {
      return {
        ...state,
        type: null,
        message: null,
      };
    },
  },
  effects: (dispatch) => ({}),
};
