import * as React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

export const MovieItem = (props) => {
  const handlePress = () => {
    props.navigation.navigate("detail",{
      id:props.id,
      title:props.title
    });
  };
 
  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      style={{
        marginBottom: 20,
        padding: 10,
      }}
    >
      <Image
        style={{
          width:100,
          height: 100,
        }}
        source={`https://image.tmdb.org/t/p/w500${props?.poster_path}`}
      />
      <Text
        style={{
          width: 100,
          overflow: "hidden",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
