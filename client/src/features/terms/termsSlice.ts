import { FETCH_TERM_ITEMS_LIMIT } from '../../shared/constants';
import { apiSlice, TAGS } from '../api/apiSlice';
import { ITerm } from './types';

const SOURCE_NAME = 'terms';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getTerms: builder.query<ITerm[], number | void>({
      query: (limit = FETCH_TERM_ITEMS_LIMIT) => ({
        url: `/${SOURCE_NAME}`,
        params: {
          _limit: limit
        }
      }),
      providesTags: (result = [], error, arg) => [
        TAGS.TERM,
        ...result.map(({ id }) => ({ type: TAGS.TERM, id }))
      ]
    }),

    getTerm: builder.query<ITerm, undefined>({
      query: (id) => ({
        url: `/${SOURCE_NAME}/${id}`,
      }),
      providesTags: (result, error, arg) => [{ type: TAGS.TERM, id: arg }]
    }),

    addNewTerm: builder.mutation<ITerm, ITerm>({
      query: (term) => ({
        url: `/${SOURCE_NAME}`,
        method: 'POST',
        body: term,
      }),
      invalidatesTags: [TAGS.TERM]
    }),

    editTerm: builder.mutation<ITerm, ITerm>({
      query: (term) => ({
        url: `/${SOURCE_NAME}/${term.id}`,
        method: 'PATCH',
        body: term
      }),
      invalidatesTags: (result, error, arg) => [{ type: TAGS.TERM, id: arg.id }]
    }),

  })
});

export const {
  useAddNewTermMutation,
  useEditTermMutation,
  useGetTermQuery,
  useGetTermsQuery,
} = extendedApiSlice;
