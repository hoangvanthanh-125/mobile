import { combineReducers } from "redux";
import { ADD_CONTACT, LOGIN_FULFILLED, LOGIN_REJECTED } from "./actions";

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
});

function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_FULFILLED: {
      return {
        ...state,
        token: action.payload.token,
      };
    }
    case LOGIN_REJECTED: {
      return {
        ...state,
        err: action.payload.err,
      };
    }
    default:
      return state;
  }
}
function contactReducer(state = [], action) {
  switch (action.type) {
    case ADD_CONTACT: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}

export default reducer;
