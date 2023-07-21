// @ts-ignore
import {API_KEY} from '@env';

const baseUrl = 'https://api.themoviedb.org/3';

///movies endpoints
const trendingMovies = `${baseUrl}/trending/movie/day?api_key=${API_KEY}`;
const upcomingMovies = `${baseUrl}/movie/upcoming?api_key=${API_KEY}`;
const topRatedMovies = `${baseUrl}/movie/top_rated?api_key=${API_KEY}`;

/// dynamic movies endpoints
const movieDetails = (id: number) => {
  return `${baseUrl}/movie/${id}?api_key=${API_KEY}`;
};

const movieCast = (id: number) => {
  return `${baseUrl}/movie/${id}/credits?api_key=${API_KEY}`;
};

const similarMovies = (id: number) => {
  return `${baseUrl}/movie/${id}/similar?api_key=${API_KEY}`;
};

// persons endpoints
const personDetails = (id: number) => {
  return `${baseUrl}/person/${id}?api_key=${API_KEY}`;
};

const personMovies = (id: number) => {
  return `${baseUrl}/person/${id}/movie_credits?api_key=${API_KEY}`;
};

// search endpoint

const searchMovie = `${baseUrl}/search/movie?api_key=${API_KEY}`;

/// images endpoints

export const image500 = (path: string) => {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : null;
};

export const image342 = (path: string) => {
  return path ? `https://image.tmdb.org/t/p/w342${path}` : null;
};

export const image185 = (path: string) => {
  return path ? `https://image.tmdb.org/t/p/w185${path}` : null;
};

export const endpoints = {
  trendingMovies,
  upcomingMovies,
  topRatedMovies,
  searchMovie,
  movieDetails,
  movieCast,
  similarMovies,
  personDetails,
  personMovies,
};
