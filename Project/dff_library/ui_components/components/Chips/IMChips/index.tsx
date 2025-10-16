import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { ChipButtonProps } from './types';

const IMChips: React.FC<ChipButtonProps> = props => {
  const {
    isDisable,
    isSelect,
    isLeftIconImage,
    isRightIconImage,

    label,

    value,

    changeStyleLabel,

    changeStyleContainer,
    changeSelectedContainer,

    addLeftIconImage,
    addRightIconImage,

    onPress,
  } = props;

  const handleChipPress = () => {
    if (onPress) onPress();
  };

  return (
      <TouchableOpacity
        disabled={isDisable}
        onPress={handleChipPress}
        key={value}
        style={[
          styles.container,
          isSelect && styles.selectedContainer,
          changeStyleContainer,
          isSelect && changeSelectedContainer,
        ]}>
        {isLeftIconImage && <>{addLeftIconImage}</>}
        {typeof label === 'string' ? (
          <Text style={[styles.label, changeStyleLabel]}>{label}</Text>
        ) : (
          label
        )}
        {isRightIconImage && <>{addRightIconImage}</>}
      </TouchableOpacity>
  );
};

export default IMChips;
