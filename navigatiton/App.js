import * as React from "react";
import { StyleSheet } from "react-native";
import { createSwitchNavigator } from "react-navigation";
import contacts, { compareName } from "./components/contact";
import AddContactScreen from "./screen/AddContactScreen";
import LoginScreen from "./screen/LoginScreen";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "react-navigation";
import Contactscreen from "./screen/Contactscreen";
import DetailContactScreen from "./screen/DetailContactScreen";

// const Appnavigator = createSwitchNavigator({
//   addContact:AddContactScreen,
//   login:LoginScreen
// })
const Stack = createStackNavigator();
export const MyContext = React.createContext();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts,
      showContact: true,
    };
  }
  toggleContact = () => {
    this.setState((prev) => ({
      ...prev,
      showContact: !prev.showContact,
    }));
  };
  sortList = () => {
    this.setState((prev) => ({
      ...prev,
      contacts: [...prev.contacts].sort(compareName),
    }));
  };
  addContact = (contact) => {
    this.setState((prev) => ({
      ...prev,
      contacts: [...prev.contacts,contact],
    }));
  }

  render() {
    return (
      <MyContext.Provider value={{ contacts: this.state.contacts ,sortList:this.sortList,addContact:this.addContact}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="contact" component={Contactscreen} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="add" component={AddContactScreen} />
            <Stack.Screen name='detail' component={DetailContactScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </MyContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  button: {
    marginBottom: 20,
    backgroundColor: "red",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
