import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { BannersProps } from './types';
import colors from '../../../atoms/colors';
import IMSquareBannerComp from './utils/IMSquareBannerComp';
import styles from './Styles';

const IMSquareBanner: React.FC<BannersProps> = props => {
  const {
    linearGradientColorEnd,
    linearGradientColorStart,

    isDisable,

    componentDisplay,

    containerStyleProps,

    start,
    end,

    onPress,
  } = props;

  const renderSquareBanner = () => {
    return (
      <TouchableOpacity
        disabled={isDisable}
        style={[styles.popOverSquareLinearContainerStyle, containerStyleProps]}
        onPress={onPress}>
        <LinearGradient
          start={start ? start : { x: 1, y: 0 }}
          end={end ? end : { x: 0, y: 1 }}
          colors={[
            linearGradientColorStart || colors.PrimaryOrange100,
            linearGradientColorEnd || colors.DarkShadeRed,
          ]}
          style={[
            styles.popOverSquareLinearContainerStyle,
            containerStyleProps,
          ]}>
          {componentDisplay || <IMSquareBannerComp />}
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return renderSquareBanner();
};
export default IMSquareBanner;
