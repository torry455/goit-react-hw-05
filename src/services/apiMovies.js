// Api key = c4d5022504eabeeeb65d32dc0812cc71

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

const params = {
  language: "en-US",
  include_adult: false,
  page: 1,
};

const options = {
  headers: {
    Authorization:
      " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGQ1MDIyNTA0ZWFiZWVlYjY1ZDMyZGMwODEyY2M3MSIsInN1YiI6IjY2MGE4MWFjMzU4MThmMDE0OTM4YWFjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pp8e2RLXUAsTSihLcdKZi__mZGJXVpPwWQIQtgyBqPE",
  },
};

const apiMovies = async () => {
  const urlMovie = `${BASE_URL}trending/movie/day?${params}`;
  const { data } = await axios.get(urlMovie, options);
  return data;
};

const apiMoviesById = async (movieId) => {
  const urlId = `${BASE_URL}movie/${movieId}${params}`;
  const { data } = await axios.get(urlId, options);
  return data;
};

const apiMovieCast = async (movieId) => {
  const urlCast = `${BASE_URL}movie/${movieId}/credits?${params}`;
  const { data } = await axios.get(urlCast, options);
  return data;
};

const apiMovieReviews = async (movieId) => {
  const urlReviews = `${BASE_URL}movie/${movieId}/reviews?${params}`;
  const { data } = await axios.get(urlReviews, options);
  return data;
};

const apiMoviesByQuery = async (query) => {
  const urlQuery = `${BASE_URL}search/movie?query=${query}&${params}`;
  const { data } = await axios.get(urlQuery, options);
  return data;
};

export {
  apiMovies,
  apiMoviesById,
  apiMoviesByQuery,
  apiMovieCast,
  apiMovieReviews,
};