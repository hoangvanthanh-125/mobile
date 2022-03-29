export const fetchListFilmApi = async() => {
  const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=0ef54b8f9731f4b0b783ef7276c3800f&language=vi&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
  const {results}= await response.json();
  return results;
}
export const fetchMovieDetailApi = async(id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0ef54b8f9731f4b0b783ef7276c3800f&language=vi`);
  return res.json();
} 