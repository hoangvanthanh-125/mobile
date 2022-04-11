import React, { useEffect } from 'react';
import {View} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import MovieDetail from '../components/MovieDetail';
import { fetchMovieDetail } from '../redux/actions';

function DetailMovieScreen({route,navigation}) {
  const { id } = route.params;
  const dispatch = useDispatch();
  const {currentMovie} = useSelector(state => state.movie)
  useEffect(() => {
  dispatch(fetchMovieDetail(id));
  },[])
 

  return (
    <View>
      <MovieDetail atWatchPage={false} movie = {currentMovie} navigation={navigation} />
    </View>
  );
}

export default DetailMovieScreen;