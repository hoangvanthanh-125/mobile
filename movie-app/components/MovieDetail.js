import React, { useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height
function MovieDetail({ movie }) {
  useEffect(() => {
    console.log(movie);
  }, []);
  return (
    <View>
      <Image
        style={{
          width,
          height: 300,
        }}
        source={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
      />
      <Text>{movie.title}</Text>
      <Text>Tóm tắt : {movie.overview}</Text>
    </View>
  );
}

export default MovieDetail;
