import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { CustomImageProps } from '../../types';
import styles from './Image.styles';

const CustomImage: React.FC<CustomImageProps> = ({ uri, style }) => {
  const [source, setSource] = useState<number | { uri: string }>(require('./assets/reward.png')); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadImage = async () => {
      try {
        if (uri) {
            await Image.prefetch(uri)
        }
        if (isMounted && uri) {
          setSource({ uri });
        }
      } catch (error) {
        console.error('Image loading error:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [uri]);

  return (
    <View style={[styles.container, style]}>
      {isLoading && <ActivityIndicator size='small' style={styles.loader} />}
      <Image
        source={source}
        style={[style, isLoading && styles.hidden]}
      />
    </View>
  );
};

export default CustomImage;
