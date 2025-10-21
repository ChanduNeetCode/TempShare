import React, { FC } from 'react';
import { BlurView } from '@react-native-community/blur';

import { BlurEffectProps } from './types';
import styles from './styles';

const IMBlurEffect: FC<BlurEffectProps> = props => {
  const {
    _blurType,

    androidBlurRadius = 1,
    _blurAmount,

    blurStyle,
  } = props;

  return (
    <BlurView
      blurAmount={_blurAmount}
      blurRadius={androidBlurRadius}
      blurType={_blurType}
      style={[styles.absolute,blurStyle]}
    />
    
   
  );
};

export default IMBlurEffect;
