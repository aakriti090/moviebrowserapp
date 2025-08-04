import axios from "axios";

const API_KEY = 'your_api_key';
const BASE_URL = "https://api.themoviedb.org/3";

// Fetches a list of popular movies from TMDB
export async function getMovies() {
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return response.data.results; // Return array of popular movies
}

// Fetches the list of movie genres from TMDB
export async function getGenres() {
  const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return response.data.genres; // Return array of genres
}

// Fetches movies filtered by a specific genre ID
export async function getMoviesByGenre(genreId) {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: { api_key: API_KEY, with_genres: genreId },
  });
  return response.data.results; // Return movies matching genre
}

// Fetches detailed information for a specific movie by ID
export async function getMovieDetails(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: { api_key: API_KEY },
  });
  return response.data; // Return movie details object
}

// Searches movies by a text query string
export async function searchMovies(query) {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data.results; // Return movies matching search query
}
