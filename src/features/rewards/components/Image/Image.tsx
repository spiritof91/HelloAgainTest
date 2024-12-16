import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { CustomImageProps } from '../../types';
import styles from './Image.styles';

const defaultImage = require('./assets/reward.png');

const CustomImage: React.FC<CustomImageProps> = ({ uri, style }) => {
  const [isLoading, setIsLoading] = useState(!!uri);
  const [source, setSource] = useState<number | { uri: string }>(defaultImage);

useEffect(() => {
  if (uri && uri.length) {
    setSource({ uri })
  }
}, [uri])

  return (
    <View style={[styles.container, style]}>
      {isLoading && <ActivityIndicator size="small" style={styles.loader} />}
      <Image
        source={source}
        style={[styles.image, style]}
        onLoadEnd={() => setIsLoading(false)}
        onLoadStart={() => setIsLoading(true)}
        onError={() => {
          setSource(defaultImage);
          setIsLoading(false);
        }}
      />
    </View>
  );
};

export default CustomImage;
