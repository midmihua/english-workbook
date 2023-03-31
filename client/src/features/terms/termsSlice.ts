import { FETCH_TERM_ITEMS_LIMIT } from '../../constants';
import { ITerm } from '../../types';
import { apiSlice, TAGS } from '../api/apiSlice';

// const termsAdapter = createEntityAdapter();
// const initialState = termsAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getTerms: builder.query<ITerm[], number | void>({
      query: (limit = FETCH_TERM_ITEMS_LIMIT) => ({
        url: `/terms`,
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
        url: `/terms/${id}`,
      }),
      providesTags: (result, error, arg) => [{ type: TAGS.TERM, id: arg }]
    }),

    addNewTerm: builder.mutation<ITerm, ITerm>({
      query: (term) => ({
        url: `/terms`,
        method: 'POST',
        body: term,
      }),
      invalidatesTags: [TAGS.TERM]
    }),

    editTerm: builder.mutation<ITerm, ITerm>({
      query: (term) => ({
        url: `/terms/${term.id}`,
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
