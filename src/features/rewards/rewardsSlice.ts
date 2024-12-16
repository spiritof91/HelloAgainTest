import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reward, RewardsState } from './types';
import { RootState } from '@app/store';

const initialState: RewardsState = {
  collectedRewards: []
};

export const rewardsSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    collectReward: (state, action: PayloadAction<Reward>) => {
      const isAlreadyCollected = state.collectedRewards.some(
        reward => reward.id === action.payload.id
      );

      if (!isAlreadyCollected) {
        state.collectedRewards.push(action.payload);
      }
    }
  }
});

export const { collectReward } = rewardsSlice.actions;
export default rewardsSlice.reducer;