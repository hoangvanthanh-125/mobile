import * as React from "react";
import { Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MovieItem } from "./MovieItem";
const renderItem =
  (navigation) =>
  ({ item }) =>
    <MovieItem {...item} navigation={navigation} />;

export const ListMovie = (props) => {
  return (
    <FlatList
    numColumns={2}
    style={{
    }}
      renderItem={renderItem(props.navigation)}
      data={props.listMovie}
    />
  );
};
