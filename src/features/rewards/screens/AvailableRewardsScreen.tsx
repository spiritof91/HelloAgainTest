import { RootState } from "@app/store";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetRewardsQuery } from "../rewardsApi";
import { collectReward } from "../rewardsSlice";
import { NavigationProps, Reward } from "../types";
import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import RewardItem from "../components/RewardItem/RewardItem";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import { useNavigation } from "@react-navigation/native";

const ITEM_HEIGHT = 120
const LIST_CONTENT_PADDING = 80

const getItemLayout = (data: any, index: number) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

const AvailableRewardsScreen = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const insets = useSafeAreaInsets()
    const navigation = useNavigation<NavigationProps>()
  
    const { 
      data = { next: null, results: [] }, 
      isLoading, 
      isError,
      isFetching
    } = useGetRewardsQuery({ page });

    const { next, results } = data

    const handleCollectReward = useCallback((reward: Reward) => {
        dispatch(collectReward(reward));
      }, [dispatch]);
    
    const loadMoreRewards = useCallback(() => {
        if (!isFetching && next) {
          setPage(prevPage => prevPage + 1);
        }
    }, [isFetching, next]);
  
    const renderRewardItem = useCallback(({ item }: { item: Reward }) => {
        return <RewardItem item={item} handleCollectReward={handleCollectReward} />;
    }, [handleCollectReward]);

    const onButtonPress = useCallback(() => {
        navigation.navigate('CollectedRewards')
    }, [navigation])
  
    if (isLoading && results.length === 0) {
      return <ActivityIndicator size="large" style={styles.loader} />;
    }
  
    if (isError) {
      return <Text style={styles.errorText}>Couldn't load rewards</Text>;
    }
  
    return (
        <SafeAreaView>
            <FlatList
                data={results}
                renderItem={renderRewardItem}
                keyExtractor={(item) => item.id}
                onEndReached={loadMoreRewards}
                getItemLayout={getItemLayout}
                ListFooterComponent={
                isFetching ? <ActivityIndicator size="small" /> : null
                }
                contentContainerStyle={{
                    paddingBottom: insets.bottom + LIST_CONTENT_PADDING,
                }}
            />
            <FloatingButton insets={insets} onPress={onButtonPress} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
      marginTop: 20
    }
  });

export default AvailableRewardsScreen