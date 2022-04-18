import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  NavigationActions,
  StackActions,
  CommonActions,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";
import { Provider, useSelector } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import RegisterScreen from "./screen/RegisterScreen";
import AddTodoScreen from "./screen/AddTodoScreen";
import ConfigScreen from "./components/ConfigScreen";

export default function App() {
  //   const resetAction = CommonActions.reset({
  //     index: 0,
  //     routes: [{ name: 'Home' }]
  // });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ConfigScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
