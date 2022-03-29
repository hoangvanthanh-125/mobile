import { fetchListFilmApi, fetchMovieDetailApi } from "../api";

export const FETCH_LIST_MOVIE = 'FETCH_LIST_MOVIE';
export const GET_CURRENT_MOVIE = 'GET_CURRENT_MOVIE '


export const fetchListFilmAction = () => async (dispatch) => {
 
  try {
    const listMovie = await fetchListFilmApi();
    dispatch({
      type:FETCH_LIST_MOVIE,
      payload: {
        listMovie,
      },
    });
  
  } catch (error) {
    console.log('loi');
  }
};
export const fetchMovieDetail = (id) => async (dispatch) => {
 
  try {
    const currentMovie = await fetchMovieDetailApi(id);
    dispatch({
      type:GET_CURRENT_MOVIE,
      payload: {
        currentMovie,
      },
    });
  
  } catch (error) {
    console.log('loi');
  }
};

