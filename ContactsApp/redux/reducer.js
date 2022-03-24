import { combineReducers } from "redux";
import { ADD_CONTACT } from "./actions";

const reducer = combineReducers({
  user:userReducer,
  contacts:contactReducer
})

function userReducer (state = {},action){
switch(action.type){
  case 'a':{
    return {
      ...state,...action.payload
    }
  }
  default:return state;
}
}
function contactReducer(state = [],action){
  switch(action.type){
    case ADD_CONTACT:{
      return [...state,action.payload]
    }
    default :return state;
  }
}

export default reducer;
