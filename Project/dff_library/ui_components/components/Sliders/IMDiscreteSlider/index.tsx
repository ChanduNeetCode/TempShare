import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

import colors from '../../../atoms/colors';
import styles from '../utils/styles';
import { IMDiscreteSliderProps } from './types';

const IMDiscreteSlider: FC<IMDiscreteSliderProps> = props => {
  const {
    maxValue,
    minValue,
    slideValue,
    steps,
    widthSlider,

    leftSideLabel,
    maxTintColor = colors.NeutralGrey60,
    minTintColor = colors.PrimaryOrange100,
    rightSideLabel,
    thumbTintColor = colors.PrimaryOrange100,
    title,

    parentViewStyle,
    titleStyle,

    leftSideLabelStyle,
    rightSideLabelStyle,
  } = props;

  return (
    <View>
      {title ? <Text style={titleStyle}>{`${title}`}</Text> : null}

      <View style={styles.parentViewStyle}>
        <View style={styles.middlePArentViewStyle}>
          <Slider
            style={{ width: widthSlider }}
            minimumValue={minValue}
            maximumValue={maxValue}
            step={steps}
            tapToSeek
            value={slideValue}
            minimumTrackTintColor={minTintColor}
            maximumTrackTintColor={maxTintColor}
            thumbTintColor={thumbTintColor}
          />
        </View>
      </View>

      <View style={[styles.bottomLabelView, parentViewStyle]}>
        <Text style={[styles.leftSideLabelStyle, leftSideLabelStyle]}>
          {leftSideLabel}
        </Text>
        <Text style={[styles.rightSideLabelStyle, rightSideLabelStyle]}>
          {rightSideLabel}
        </Text>
      </View>
    </View>
  );
};
export default IMDiscreteSlider;
