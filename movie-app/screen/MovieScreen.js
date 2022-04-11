import React, { useEffect } from "react";
import { StyleSheet, Text, View,Button,TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ListMovie } from "../components/ListMovie";
import { fetchListFilmAction } from "../redux/actions";
function MovieScreen({navigation}) {
  const dispatch = useDispatch();
  const {listMovie} = useSelector(state => state.movie);
   useEffect (() => {
   dispatch(fetchListFilmAction())
  },[])
  
  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('search')}>
        <Text style={styles.text}>Tìm kiếm phim</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Danh sách phim</Text>
      <View>
        <ListMovie navigation={navigation} listMovie={listMovie} />
      </View>
    </View>
  );
}

export default MovieScreen;
const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    color:'red',
    fontSize:30
  }
  ,
  button:{
    backgroundColor:'black',
    marginTop:10,
    padding:10,
    borderRadius:5
  },
  text:{
    color:'white',
    textAlign:"center"
  }
})

