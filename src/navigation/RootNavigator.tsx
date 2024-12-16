import { AvailableRewardsScreen, CollectedRewardsScreen } from "@features/rewards/screens";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";

export type RootStackParamList = {
  AvailableRewards: undefined;
  CollectedRewards: undefined;
};

const getBaseScreenOptions = (): NativeStackNavigationOptions => ({
  headerTitleAlign: 'center',
  statusBarBackgroundColor: 'white',
  statusBarStyle: 'dark'
})

const RootStack = createNativeStackNavigator<RootStackParamList>({
    initialRouteName: 'AvailableRewards',
    screens: {
      AvailableRewards: { 
        screen: AvailableRewardsScreen,
        options: {
          ...getBaseScreenOptions(),
          headerTitle: 'Available Rewards',
        }
      },
      CollectedRewards: { 
        screen: CollectedRewardsScreen,
        options: {
          ...getBaseScreenOptions()
        }
      },
    },
  });

const RootNavigator = createStaticNavigation(RootStack);

export default RootNavigator