import React from 'react';
import { View } from 'react-native';

import { IMShimmerProps } from './types';
import Shimmer from './utils/Shimmer';

const IMShimmer: React.FC<IMShimmerProps> = props => {
  const {
    isEnabled,

    borderRadius,
    speed,

    style,
    children,
    direction,

    backgroundColor,
    highlightColor,
  } = props;
  
  return (
    <Shimmer
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      direction={direction}
      highlightColor={highlightColor}
      isEnabled={isEnabled }
      speed={speed}>
      <View style={style}>{children}</View>
    </Shimmer>
  );
};

export default IMShimmer;
