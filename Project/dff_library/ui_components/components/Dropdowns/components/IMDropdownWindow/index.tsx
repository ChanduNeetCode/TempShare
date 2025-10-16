import React from 'react';
import { View } from 'react-native';

import { DropdownWindowProps } from './types';
import useStyles from './styles';

const DropdownWindow: React.FC<DropdownWindowProps> = props => {
  const styles = useStyles();
  const { children, layoutStyle } = props;
  return (
    <View
      style={{
        ...styles.dropdownOverlayView,
        ...styles.shadow,
        ...layoutStyle,
      }}>
      {children}
    </View>
  );
};

export default DropdownWindow;
