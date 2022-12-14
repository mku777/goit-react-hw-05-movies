import axios from 'axios';

export async function fetchTrandingFilms() {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const API_KEY = 'api_key=ec03e9e57e4c2ad62d7d835cb4534f63';
  return await axios.get(`${BASE_URL}?${API_KEY}`);
}
export async function movieSearching(searchQuery) {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const API_KEY = 'api_key=ec03e9e57e4c2ad62d7d835cb4534f63';
  return await axios.get(
    `${BASE_URL}?${API_KEY}&query=${searchQuery}&language=en-US`
  );
}

export async function getMovieDetails(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = 'api_key=ec03e9e57e4c2ad62d7d835cb4534f63';
  return await axios.get(`${BASE_URL}${id}?${API_KEY}&language=en-US`);
}

export async function getCastDetails(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = 'api_key=ec03e9e57e4c2ad62d7d835cb4534f63';
  return await axios.get(`${BASE_URL}${id}/credits?${API_KEY}&language=en-US`);
}

export async function getMovieReviews(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = 'api_key=ec03e9e57e4c2ad62d7d835cb4534f63';
  return await axios.get(`${BASE_URL}${id}/reviews?${API_KEY}&language=en-US`);
}
