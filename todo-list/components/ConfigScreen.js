import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import { useSelector } from "react-redux";
import EditProfileScreen from "../screen/EditProfileScreen";
import ProfileScreen from "../screen/ProfileScreen";
import AddTodoScreen from "./../screen/AddTodoScreen";
import HomeScreen from "./../screen/HomeScreen";
import LoginScreen from "./../screen/LoginScreen";
import RegisterScreen from "./../screen/RegisterScreen";
function ConfigScreen(props) {
  const Stack = createStackNavigator();
  const { token } = useSelector((state) => state.user);

  return !token ? (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      <Stack.Screen name="Add" component={AddTodoScreen} options={({route}) => ({
        title:route?.params.title
      })} />
    </Stack.Navigator>
  );
}

export default ConfigScreen;
