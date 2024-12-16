import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RewardsQueryParams, RewardsResponse } from "./types";

const REWARDS_API_URL = 'https://staging.helloagain.at/api/v1/clients/5189/bounties/'

export const rewardsApi = createApi({
    reducerPath: 'rewardsApi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: REWARDS_API_URL
    }),
    endpoints: (builder) => ({
      getRewards: builder.query<RewardsResponse, RewardsQueryParams>({
        query: ({ page = 1, limit = 10 }) => ({
          url: 'rewards',
          params: {
            page,
            limit
          }
        }),
        serializeQueryArgs: ({ queryArgs }) => {
          return queryArgs.page;
        },
        // Merge incoming data with existing data for pagination
        merge: (currentCache, newItems) => {
          return [...currentCache, ...newItems];
        },
        // Prevent re-fetching the same page
        forceRefetch({ currentArg, previousArg }) {
          return currentArg?.page !== previousArg?.page;
        }
      })
    })
  });
  
  export const { useGetRewardsQuery } = rewardsApi;