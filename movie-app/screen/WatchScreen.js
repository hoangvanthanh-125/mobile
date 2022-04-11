import React from "react";
import { View } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import MovieDetail from "../components/MovieDetail";
import { ScrollView } from "react-native";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

function WatchScreen({ route }) {
  const { videoKey ,movie} = route.params;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  console.log(videoKey);
  return (
   <ScrollView  contentContainerStyle={{padding:10}}>
      <Video
      ref={video}
      source={{
        uri: `https://www.youtube.com/embed/1Z3MXc8KloU?autoplay=1`,
      }}
      useNativeControls
      resizeMode="contain"
      isLooping
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
    <MovieDetail movie={movie} atWatchPage={true} />
   </ScrollView>
  );
}

export default WatchScreen;
