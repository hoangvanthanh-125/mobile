import { combineReducers } from "redux";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  ADD_TODO,
  FETCH_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  UPDATE_USER,
  LOG_OUT,
} from "./actions";

const reducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

function userReducer(state = { user: null, token: null }, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      console.log(action.payload.user._id);

      return {
        ...state,
        user: action.payload.user,
        error: "",
        token: action.payload.token,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case UPDATE_USER:{
      return {
        ...state,
        user:action.payload.newUser
      }
    }
    case LOG_OUT:{
      return {
        ...state,
        user:null,
        token:null
      }
    }
    default:
      return state;
  }
}
function todoReducer(state = { listTodo: [] }, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        listTodo: [action.payload.todo].concat([...state.listTodo]),
      };
    }
    case FETCH_TODO: {
      return {
        ...state,
        listTodo: action.payload.listTodo,
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      const newListTodo = state.listTodo.filter((item) => item._id != id);
      return {
        ...state,
        listTodo: newListTodo,
      };
    }
    case UPDATE_TODO: {
      const { id, newTodo } = action.payload;
      const index = state.listTodo.findIndex((item) => item._id == id);
      state.listTodo[index] = { ...state.listTodo[index], ...newTodo };
      return { ...state };
    }
    default:
      return state;
  }
}
export default reducer;
