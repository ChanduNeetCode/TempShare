/* eslint-disable @typescript-eslint/no-explicit-any */
import { TouchableOpacity } from 'react-native';
import React from 'react';

import { DropdownOverlayProps } from './types';
import useStyles from './styles';

const DropdownOverlay: React.FC<DropdownOverlayProps> = props => {
  const styles = useStyles();
  const { backgroundColor = 'transparent', onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[{ ...styles.dropdownOverlay }, backgroundColor]}
      onPress={onPress}
    />
  );
};

export default DropdownOverlay;
