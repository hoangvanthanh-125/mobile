import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { TextInput, StyleSheet,Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { ListMovie } from "../components/ListMovie";

function SearchScreen({navigation}) {
  const [text, setText] = useState("");
  const [listMovie, setListMovie] = useState([]);
  const [descripttion ,setDescription] = useState('');
  const [total,setTotal] = useState(0);
  const handleSubmit = async () => {
    if (text) {
      let response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=0ef54b8f9731f4b0b783ef7276c3800f&language=vi&page=1&include_adult=false&query=${text}`
      );

       const { results,total_results} = await response.json();
      
       setListMovie(results);
       setTotal(total_results);
       
    }
  };
  useEffect(() => {
    if(text){
      setDescription(<Text>Có <Text style={{color:'red'}}>{total}</Text> kết quả tìm kiếm cho <Text style={{color:'red'}}>{text}</Text></Text>)
    }

  },[total])
  return (
    <View style={styles.container}>
      
      <View style={styles.wrapRow}>
        <TextInput
          onChangeText={(text) => setText(text)}
          style={styles.input}
          placeholder="Tìm phim"
        />
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.text}>Tìm</Text>
        </TouchableOpacity>
        
      </View>
      <Text>{descripttion}</Text>
      <ListMovie navigation={navigation} listMovie={listMovie} />
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
    borderColor: "gray",
    borderRadius:5
  },
  wrapRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  button:{
    backgroundColor:'black',
    borderRadius:5,
    padding:3,
    flex:0.2,
  },
  text:{
    color:'white',
    textAlign:'center'
  },
  container:{
    justifyContent:'center',
    alignItems:'center',
  },
});
