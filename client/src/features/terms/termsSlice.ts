import { createSelector } from '@reduxjs/toolkit';
import { FEATURES } from '../../shared/constants';
import { apiSlice, TAGS } from '../api/apiSlice';
import { ITerm } from './types';

// TBD
// const termsAdapter = createEntityAdapter<ITerm>({});
// const initialState = termsAdapter.getInitialState();

export const termsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTerms: builder.query<ITerm[], number | void>({
      query: (limit = FEATURES.TERMS.FETCH_LIMIT) => ({
        url: `/terms`,
        params: {
          _limit: limit,
        },
      }),
      transformResponse: (responseData: [ITerm & { _id: string }]) => {
        const loadedTerms = responseData?.map((term) => {
          term.id = term._id;
          return term;
        });
        return loadedTerms;
      },
      providesTags: (result = [], error, arg) => [
        TAGS.TERM,
        ...result.map(({ id }) => ({ type: TAGS.TERM, id })),
      ],
      keepUnusedDataFor: FEATURES.TERMS.KEEP_UNUSED_DATA_FOR,
    }),

    getTerm: builder.query<ITerm, { id: string }>({
      query: ({ id }) => ({
        url: `/terms/${id}`,
      }),
      providesTags: (result, error, arg) => [{ type: TAGS.TERM, id: arg.id }],
      keepUnusedDataFor: FEATURES.TERMS.KEEP_UNUSED_DATA_FOR,
    }),

    addNewTerm: builder.mutation<ITerm, ITerm>({
      query: (term) => ({
        url: `/terms`,
        method: 'POST',
        body: term,
      }),
      invalidatesTags: [TAGS.TERM],
    }),

    updateTerm: builder.mutation<ITerm, ITerm>({
      query: (term) => ({
        url: `/terms`,
        method: 'PATCH',
        body: term,
      }),
      invalidatesTags: (result, error, arg) => [{ type: TAGS.TERM, id: arg.id }],
    }),

    deleteTerm: builder.mutation<ITerm, { id: string }>({
      query: ({ id }) => ({
        url: `/terms/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [{ type: TAGS.TERM, id: arg.id }],
    }),
  }),
});

export const {
  useGetTermQuery,
  useGetTermsQuery,
  useAddNewTermMutation,
  useUpdateTermMutation,
  useDeleteTermMutation,
} = termsApiSlice;

// Selectors
const selectTermsResult = termsApiSlice.endpoints.getTerms.select();

export const selectAllTerms = createSelector(
  selectTermsResult,
  (allTermsResult) => allTermsResult.data ?? [],
);

export const selectTermById = createSelector(
  [selectAllTerms, (state, id) => id],
  (terms, id) => terms.find((term) => String(term.id) === String(id)),
);
