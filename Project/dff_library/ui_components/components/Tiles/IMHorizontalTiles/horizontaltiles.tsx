import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { TilesProps, TilesType } from '../types';
import styles from '../utils/styles';

const IMHorizontalTiles: React.FC<TilesProps> = props => {
  const {
    isSelectedStyle,

    tilesType,

    cardTitle,

    styleHorizontalTextStyle,

    styleHorizontalViewWithBG,
    styleHorizontalViewWithOutBG,

    cardIcon,

    onClick,
  } = props;

  return (
    <>
      {tilesType == TilesType.HorizontalWithBackground ? (
        <TouchableOpacity
          onPress={onClick}
          style={[styles.horizontalViewWithBG, styleHorizontalViewWithBG]}>
          {cardIcon}
          <Text
            style={[
              styles.horizontalTextStyle,
              isSelectedStyle && styleHorizontalTextStyle,
            ]}>
            {cardTitle}
          </Text>
        </TouchableOpacity>
      ) : tilesType == TilesType.HorizontalWithoutBackground ? (
        <TouchableOpacity
          onPress={onClick}
          style={[
            styles.horizontalViewWithOutBG,
            styleHorizontalViewWithOutBG,
          ]}>
          {cardIcon}
          <Text
            style={[
              styles.horizontalTextStyle,
              isSelectedStyle && styleHorizontalTextStyle,
            ]}>
            {cardTitle}
          </Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};
export default IMHorizontalTiles;
