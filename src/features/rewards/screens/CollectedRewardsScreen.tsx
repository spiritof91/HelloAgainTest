import { RootState } from "@app/store";
import { useSelector } from "react-redux";
import { ITEM_HEIGHT, Reward } from "../types";
import RewardItem from "../components/RewardItem/RewardItem";
import { FlatList } from "react-native";

const renderRewardItem = ({ item }: { item: Reward }) => {
    return <RewardItem item={item} />;
}

const getItemLayout = (data: any, index: number) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

const CollectedRewardsScreen = () => {
    const collectedRewards = useSelector((state: RootState) => 
        state.rewards.collectedRewards
      );

      return (
        <FlatList
            data={collectedRewards}
            renderItem={renderRewardItem}
            keyExtractor={(item) => item.id}
            getItemLayout={getItemLayout}
        />
      )
}

export default CollectedRewardsScreen