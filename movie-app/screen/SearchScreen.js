import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, StyleSheet } from "react-native";
import { Button } from "react-native";
import { ListMovie } from "../components/ListMovie";

function SearchScreen(props) {
  const [text, setText] = useState("");
  const [listMovie, setListMovie] = useState([]);
  const handleSubmit = async () => {
    if (text) {
      let response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=0ef54b8f9731f4b0b783ef7276c3800f&language=vi&page=1&include_adult=false&query=${text}`
      );
    
    const { results } = await response.json();
    setListMovie(results);
    }
  };
  return (
    <View>
      <View style={styles.wrapRow}>
        <TextInput
          onChangeText={(text) => setText(text)}
          style={styles.input}
          placeholder="Tìm phim"
        />
        <Button
          style={{ width: 150 }}
          title="Tìm"
          onPress={() => handleSubmit()}
        />
       
      </View>
      <ListMovie listMovie={listMovie} />
    </View>
  );
}

export default SearchScreen;
const styles = StyleSheet.create({
  input: {
    width: 200,
    marginRight: 10,
    flex: 1,
    borderWidth: 1,
    borderColor: "violet",
  },
  wrapRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
