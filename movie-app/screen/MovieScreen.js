import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ListMovie } from "../components/ListMovie";
import { fetchListFilmAction } from "../redux/actions";
function MovieScreen({navigation}) {
  const dispatch = useDispatch();
  const {listMovie} = useSelector(state => state.movie);
  console.log(listMovie );

   useEffect (() => {
   dispatch(fetchListFilmAction())
  },[])
  
  return (
    <View style={styles.container} >
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
})
