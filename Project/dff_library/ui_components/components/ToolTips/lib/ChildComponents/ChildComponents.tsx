import React, { forwardRef } from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { ChildProps } from './types';

const ChildComponents = forwardRef<TouchableOpacity, ChildProps>(
  ({ onPress, onLayout, isSelect, selectImage, unSelectImage }, ref) => (
    <TouchableOpacity
      ref={ref}
      onPress={onPress}
      style={styles.parentViewStyle}
      onLayout={onLayout}>
      <View style={styles.imageViewStyle}>
        {isSelect ? selectImage : unSelectImage}
      </View>
    </TouchableOpacity>
  ),
);

ChildComponents.displayName = 'ChildComponents';

export default ChildComponents;
