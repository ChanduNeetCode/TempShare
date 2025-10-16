import React, { FC } from 'react';
import { View, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { IMCustomStatusBarProps } from './types';
import styles from './styles';

const IMCustomStatusBar: FC<IMCustomStatusBarProps> = props => {
  const {
    angle,
    gradientColorsArray,
    isUseAngle,
    isTranslucent,
    linearGradientStyle,
    statusBarBackgroundColor = 'transparent',
  } = props;

  return (
    <LinearGradient
      useAngle={isUseAngle}
      angle={angle}
      colors={gradientColorsArray}
      style={[styles.linearGradientStyle, linearGradientStyle]}>
      <StatusBar
        translucent={isTranslucent}
        backgroundColor={statusBarBackgroundColor}
      />
    </LinearGradient>
  );
};

export default IMCustomStatusBar;
