import { RootStackParamList } from "@navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EdgeInsets } from "react-native-safe-area-context";

export interface Reward {
    id: string;
    name: string;
    needed_points: number;
    image: string;
  }
  
  export interface RewardsResponse {
    results: Reward[],
    next: string | null
  }

  export interface RewardsQueryParams {
    page: number;
    limit?: number
  }

  export interface RewardsState {
    collectedRewards: Reward[];
  }

  export interface CustomImageProps {
    uri: string;
    style?: any;
  }

  export interface RewardItemProps {
    item: Reward;
    handleCollectReward?: (item: Reward) => void
  }

  export interface FloatingButtonProps {
    insets: EdgeInsets;
    onPress: () => void;
  }

  export type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'AvailableRewards'>;

 export const ITEM_HEIGHT = 120

