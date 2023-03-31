import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const TAGS = {
  TERM: 'Term',
};

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: [TAGS.TERM],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({}),
});
