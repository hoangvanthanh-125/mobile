import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
export const Row = (props) => {
  console.log(props.navigation);
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("detail", props)}
    >
      <Text>{props.name}</Text>
      <Text>{props.phone}</Text>
    </TouchableOpacity>
  );
};
