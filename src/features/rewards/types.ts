export interface Reward {
    id: string;
    name: string;
    needed_points: number;
    image: string;
  }
  
  export type RewardsResponse = Reward[]

  export interface RewardsQueryParams {
    page: number;
    limit: number
  }

  export interface RewardsState {
    collectedRewards: Reward[];
  }