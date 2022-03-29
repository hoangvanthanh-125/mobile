import * as React from "react";
import { Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MovieItem } from "./MovieItem";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const renderItem =
  (navigation) =>
  ({ item }) =>
    <MovieItem {...item} navigation={navigation} />;

export const ListMovie = (props) => {
  return (
    <FlatList
    numColumns={3}
    style={{
    }}
      renderItem={renderItem(props.navigation)}
      data={props.listMovie}
    />
  );
};
