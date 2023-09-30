import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'afab3c99bc155408201e573ea3b865cf';

export async function getTrending() {
  const { data } = await axios.get(`trending/all/day?api_key=${KEY}`);
  return data;
}

export async function getSearchMovies(q) {
  const { data } = await axios.get(`search/movie?api_key=${KEY}&query=${q}`);
  return data;
}

export async function getMovieDetails(id) {
  const { data } = await axios.get(`movie/${id}?api_key=${KEY}`);
  return data;
}

export async function getMovieCredits(id) {
  const { data } = await axios.get(`movie/${id}/credits?api_key=${KEY}`);
  return data;
}

export async function getMovieReviews(id) {
  const { data } = await axios.get(`movie/${id}/reviews?api_key=${KEY}`);
  return data;
}
