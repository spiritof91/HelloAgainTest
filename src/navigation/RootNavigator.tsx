import { AvailableRewardsScreen, CollectedRewardsScreen } from "@features/rewards/screens";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";


const RootStack = createNativeStackNavigator({
    initialRouteName: 'AvailableRewards',
    screens: {
      AvailableRewards: AvailableRewardsScreen,
      CollectedRewards: CollectedRewardsScreen,
    },
  });

const RootNavigator = createStaticNavigation(RootStack);

export default RootNavigator