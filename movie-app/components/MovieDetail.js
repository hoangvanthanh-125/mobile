import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ListMovie } from "./ListMovie";

function MovieDetail({ movie, navigation, atWatchPage }) {
  const [actor, setActor] = useState([]);
  const [videoKey, setVideoKey] = useState("");
  const [listSimilar, setListSimilar] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=0ef54b8f9731f4b0b783ef7276c3800f&language=vi`
    )
      .then((res) => res.json())
      .then((res) => {
        setActor(res.cast);
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=0ef54b8f9731f4b0b783ef7276c3800f`
    )
      .then((res) => res.json())
      .then((res) => {
        setVideoKey(res.results[0].key);
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=0ef54b8f9731f4b0b783ef7276c3800f`
    )
      .then((res) => res.json())
      .then((res) => setListSimilar(res.results));
  }, []);
  const handleWatchMovie = () => {
    navigation.navigate("Watch", {
      videoKey,
      title: movie.title,
      movie,
    });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrap}>
        <Image
          style={styles.image}
          source={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        />
        {!atWatchPage && <TouchableOpacity
          style={styles.button}
          onPress={() => handleWatchMovie()}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Xem phim
          </Text>
        </TouchableOpacity>}
        <Text style={styles.name}>{movie.title}</Text>
      </View>

      {movie.genres && (
        <Text style={styles.title}>
          Thể loại :
          <Text style={styles.content}>
            {movie.genres.map((item, index) => (
              <Text key={item.id}>
                {item.name}
                {movie.genres.length !== index + 1 && <Text>, </Text>}
              </Text>
            ))}
          </Text>
        </Text>
      )}

      {actor.length > 0 && (
        <Text style={styles.title}>
          Diễn viên :
          <Text style={styles.content}>
            {actor.map((item, index) => (
              <Text key={item.id}>
                {item.name}
                {actor !== index + 1 && <Text>, </Text>}
              </Text>
            ))}
          </Text>
        </Text>
      )}

      {movie.release_date && (
        <Text style={styles.title}>
          Ngày ra mắt :<Text style={styles.content}>{movie.release_date}</Text>
        </Text>
      )}

      {movie.vote_average && (
        <Text style={styles.title}>
          Điểm trung bình :
          <Text style={styles.content}>{movie.vote_average}</Text>
        </Text>
      )}

      {movie.runtime && (
        <Text style={styles.title}>
          Thời lượng :
          <Text style={styles.content}>
            {movie.runtime} <Text> phút</Text>
          </Text>
        </Text>
      )}
      {movie.overview && (
        <Text style={styles.title}>
          Tóm tắt :<Text style={styles.content}>{movie.overview}</Text>
        </Text>
      )}

      {listSimilar.length > 0 && (
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.name}>Phim cùng thể loại</Text>
          <ListMovie listMovie={listSimilar} navigation={navigation} />
        </ScrollView>
      )}
    </ScrollView>
  );
}

export default MovieDetail;
const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    margin: 10,
    marginLeft: 0,
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 300,
  },
  title: {
    fontWeight: "bold",
    marginTop: 10,
  },
  content: {
    fontWeight: "normal",
  },
  button: {
    marginTop: 10,
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    width: 100,
  },
  wrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    // justifyContent:'center',
    // alignItems:'center',
    padding: 10,
  },
});
