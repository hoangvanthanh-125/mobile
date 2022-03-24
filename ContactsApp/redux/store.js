import { createStore } from "redux";
import { addContact } from "./actions";
import reducer from "./reducer";

const store = createStore(reducer)
export default store;

store.dispatch(addContact({
  name:"hoang van thanh",
  phone:'123456789'
}))