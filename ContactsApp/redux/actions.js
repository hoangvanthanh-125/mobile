import { loginApi } from "../api";

export const ADD_CONTACT = "ADD_CONTACT";
export const LOGIN_SENT = "LOGIN_SENT";
export const LOGIN_FULFILLED = "LOGIN_FULFILLED";
export const LOGIN_REJECTED = "LOGIN_REJECTED";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});
export const loginAction = (email, pass) => async (dispatch) => {
  dispatch({
    type: LOGIN_SENT,
  });
  try {
    const token = await loginApi(email, pass);
    dispatch({
      type: LOGIN_FULFILLED,
      payload: {
        token,
      },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_REJECTED,
      payload: {err:error.message},
    });
  }
};
