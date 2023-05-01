import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { movieResponse } from 'index';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/' }),
  endpoints: (builder) => ({
    getMovieSearch: builder.query<movieResponse, string>({
      query: (search) => ({
        url:`3/search/movie?api_key=482cd369cab9515bbc135ec79900dec1&language=en-US&query=${search}&page=1&include_adult=false`,
        method: 'GET',
      }),
    }),
    getMovies: builder.query<movieResponse, void>({
      query: () => ({
        url:'3/movie/popular?api_key=482cd369cab9515bbc135ec79900dec1&language=en-US&page=1',
        method: 'GET',
      }),
    }),

  }),
})


export const { useGetMovieSearchQuery, useGetMoviesQuery } = movieApi;