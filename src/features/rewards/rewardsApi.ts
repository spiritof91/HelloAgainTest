import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RewardsQueryParams, RewardsResponse } from "./types";

const REWARDS_API = 'https://staging.helloagain.at/api/v1/clients/5189/bounties/'
const DEFAULT_LIMIT = 20
const DEFAULT_PAGE = 1

export const rewardsApi = createApi({
    reducerPath: 'rewardsApi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: REWARDS_API
    }),
    endpoints: (builder) => ({
      getRewards: builder.query<RewardsResponse, RewardsQueryParams>({
        query: ({ page = DEFAULT_PAGE, limit = DEFAULT_LIMIT }) => {
            return ({
            url: '',
            params: {
              page,
              limit
            }
          })},
        serializeQueryArgs: ({ endpointName }) => {
            return endpointName;
        },
        merge: (currentCache, newData) => { 
            return ({
            results: [...currentCache.results, ...newData.results],
            next: newData.next,
        })},
        forceRefetch({ currentArg, previousArg }) {
            return currentArg !== previousArg;
        },
      })
    })
  });
  
  export const { useGetRewardsQuery } = rewardsApi;