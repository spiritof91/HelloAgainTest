import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";


const RootStack = createNativeStackNavigator({
    initialRouteName: 'AvailableRewards',
    screens: {
      AvailableRewards: React.Fragment,
      ClaimedRewards: React.Fragment,
    },
  });

const RootNavigator = createStaticNavigation(RootStack);

export default RootNavigator