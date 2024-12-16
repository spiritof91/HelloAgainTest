import { FloatingButtonProps } from '@features/rewards/types';
import React, { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './FloatingButton.styles';

const FloatingButton: React.FC<FloatingButtonProps> = memo(({ insets, onPress }) => {
  return (
    <View
      style={[
        styles.buttonContainer,
        {
          bottom: insets.bottom + 20,
          left: insets.left + 20,
        },
      ]}
    >
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Collected Rewards</Text>
      </Pressable>
    </View>
  );
});

export default FloatingButton