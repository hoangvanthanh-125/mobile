import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { getList } from "./api";
import contacts, { compareName } from "./components/contact";
import AddContactScreen from "./screen/AddContactScreen";
import Contactscreen from "./screen/Contactscreen";
import DetailContactScreen from "./screen/DetailContactScreen";
import LoginScreen from "./screen/LoginScreen";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

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
      contacts: [...prev.contacts, contact],
    }));
  };
  fetchList = async () => {
    const results = await getList();
    this.setState({
      contacts: results,
    });
  };
  componentDidMount() {
    this.fetchList();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyContext.Provider
            value={{
              contacts: this.state.contacts,
              sortList: this.sortList,
              addContact: this.addContact,
            }}
          >
            <NavigationContainer>
              <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="contact" component={Contactscreen} />
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="add" component={AddContactScreen} />
                <Stack.Screen name="detail" component={DetailContactScreen} options={({route}) => ({title:route.params.name})} />
              </Stack.Navigator>
            </NavigationContainer>
          </MyContext.Provider>
        </PersistGate>
      </Provider>
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
