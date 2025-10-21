import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';

import {
  BannersBottomFlower,
  BannersFlower,
  ShortCar,
} from '../../../atoms/icons';
import { componentDisplayProps, BannersProps } from './types';
import styles from './styles';

const IMShortCarouselBanner: React.FC<BannersProps> = props => {
  const {
    isShowsHorizontalScrollIndicator,
    isDisable,

    data,

    containerStyleProps,
    flatListContainerStyle,
    flowerImageStyle,
    shortBannerCarImageContainer,

    onPress,
  } = props;

  const renderItem = ({ item }: { item: componentDisplayProps }) => {
    return (
      <TouchableOpacity
        disabled={isDisable}
        onPress={() => {
          if (onPress) onPress(item.id);
        }}
        activeOpacity={0.8}
        style={[
          styles.shortBannerContainer,
          {
            backgroundColor: item.backGroundColor,
          },
          containerStyleProps,
        ]}>
        {item.component ? (
          item.component
        ) : (
          <>
            <View style={[styles.shortBannerImageTop, flowerImageStyle]}>
              {item.isFlowerImageDisplayTop && <BannersFlower />}
            </View>
            <View style={styles.shortBannerComponentContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>{item.description}</Text>
              </View>
              <View
                style={[
                  styles.shortBannerCarImageContainer,
                  shortBannerCarImageContainer,
                ]}>
                {item.iconDisplay || <ShortCar />}
              </View>
            </View>
            <View style={[styles.shortBannerImageBottom, flowerImageStyle]}>
              {item.isFlowerImageDisplayBottom && <BannersBottomFlower />}
            </View>
          </>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      horizontal
      renderItem={renderItem}
      contentContainerStyle={flatListContainerStyle}
      showsHorizontalScrollIndicator={isShowsHorizontalScrollIndicator || false}
    />
  );
};
export default IMShortCarouselBanner;
