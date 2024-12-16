import { Reward, RewardItemProps } from "@features/rewards/types";
import { Pressable, Text, View } from "react-native";
import CustomImage from "../Image/Image";
import { useSelector } from "react-redux";
import { RootState } from "@app/store";
import styles from "./RewardItem.styles";

const RewardItem: React.FC<RewardItemProps> = ({ item, handleCollectReward }) => {
    const collectedRewards = useSelector((state: RootState) => 
        state.rewards.collectedRewards
      );
    const isCollected = collectedRewards.some(r => r.id === item.id);

    return (
      <View 
        style={[
          styles.itemContainer, 
          isCollected && handleCollectReward && styles.collectedItem
        ]}
      >
        <CustomImage 
          uri={item.image} 
          style={styles.image}
        />
        <View style={styles.itemDetails}>
          <Text numberOfLines={1} style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPoints}>
            Points needed: {item.needed_points}
          </Text>
          
          {!isCollected && handleCollectReward && (
            <Pressable 
              onPress={() => handleCollectReward(item)}
              style={styles.collectButton}
            >
              <Text style={styles.collectButtonText}>Collect</Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  };

  export default RewardItem