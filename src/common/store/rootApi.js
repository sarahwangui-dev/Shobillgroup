import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { fetchToken } from '@/app/(auth)/actions';

const publicEndpoints = ['register', 'login', 'getProperties'];

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: async (headers, { endpoint }) => {
      const access_token_response = await fetchToken();
      if (!publicEndpoints.includes(endpoint)) {
        headers.set('Authorization', `Bearer ${access_token_response.value}`);
      }

      return headers;
    }
  }),
  tagTypes: ['PropertyOwner'],
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => ({ url: 'property/properties/' })
    }),
    postProperty: builder.mutation({
      query: (payload) => ({
        url: `property/properties/`,
        method: 'POST',
        body: payload
      })
    }),
    getPropertyOwners: builder.query({
      query: () => ({ url: 'property/property-owners/' }),
      providesTags: ['PropertyOwner']
    }),
    postPropertyOwner: builder.mutation({
      query: ({ payload }) => ({
        url: `property/property-owners/`,
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['PropertyOwner']
    })
  })
});

export const {
  useGetPropertiesQuery,
  usePostPropertyMutation,
  useGetPropertyOwnersQuery,
  usePostPropertyOwnerMutation
} = rootApi;
