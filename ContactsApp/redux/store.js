import { createStore } from "redux";
import { addContact } from "./actions";
import reducer from "./reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(persistedReducer,applyMiddleware(thunk))
export const persistor = persistStore(store)
export default store;

store.dispatch(addContact({
  name:"hoang van thanh",
  phone:'123456789'
}))