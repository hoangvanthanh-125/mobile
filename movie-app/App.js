import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import DetailMovieScreen from "./screen/DetailMovieScreen";
import MovieScreen from "./screen/MovieScreen";
import SearchScreen from "./screen/SearchScreen";

const Stack = createStackNavigator();
export const MyContext = React.createContext();

export default class App extends React.Component {
  
  

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

            <NavigationContainer>
              <Stack.Navigator initialRouteName="movie">
                <Stack.Screen name="movie" component={MovieScreen} />
                <Stack.Screen name="detail" component={DetailMovieScreen}  options={({ route }) => ({ title: route.params.title })} />   
                <Stack.Screen name="search" component={SearchScreen} />
                
              </Stack.Navigator>
            </NavigationContainer>
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
