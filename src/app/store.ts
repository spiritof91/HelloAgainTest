import { rewardsApi } from "@features/rewards/rewardsApi";
import rewardsReducer from "@features/rewards/rewardsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [rewardsApi.reducerPath]: rewardsApi.reducer,
    rewards: rewardsReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(rewardsApi.middleware)
});
  
  setupListeners(store.dispatch);
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;