import { combineReducers } from "redux";
import { FETCH_LIST_MOVIE, GET_CURRENT_MOVIE } from "./actions";

const reducer = combineReducers({
  
  movie:movieReducer
});

function movieReducer(state = {listMovie:[]},action){
  switch(action.type){
    case FETCH_LIST_MOVIE :{
      return {
        ...state,listMovie:action.payload.listMovie
      }
    }
    case GET_CURRENT_MOVIE:{
      return {
        ...state,currentMovie:action.payload.currentMovie
      }
    }
    default:return state;
  }
}

export default reducer;
