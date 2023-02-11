import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b60c32a6f6f2663f6a35c755ff35b4cc';

export const getTrendingMovies = async signal => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`, {
    signal,
  });
  return response.data;
};

export const getMovieDetails = async (movieId, signal) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`, {
    signal,
  });
  return response.data;
};

export const searchMovie = async (query, signal) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`,
    {
      signal,
    }
  );
  return response.data;
};

export const getMovieCredits = async (movieId, signal) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`,
    {
      signal,
    }
  );
  return response.data;
};

export const getMovieReviews = async (movieId, signal) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`,
    {
      signal,
    }
  );
  return response.data;
};