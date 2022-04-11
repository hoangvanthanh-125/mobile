import * as React from "react";
import { Text, Image, TouchableOpacity,StyleSheet } from "react-native";

export const MovieItem = (props) => {
  const handlePress = () => {
    props.navigation.push("detail",{
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
        style = {styles.image}
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

const styles = StyleSheet.create({
  image:{
    width:150,
    height: 200,
  }
})