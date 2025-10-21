import React, { useEffect, useState } from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import { IMRadioButtonProps } from './types';
import {
  ICGeneralDisabledRadioButtonOff,
  ICGeneralRadioButtonOff,
  ICGeneralRadioButtonOn
} from '../../../atoms/icons';
import colors from '../../../atoms/colors';
import styles from './styles';

const IMSingleRadioButton: React.FC<IMRadioButtonProps> = props => {
  const {
    isDisable,
    isLeft,
    isSelect,

    tapRadioButtonColor = colors.NeutralGrey120,
    title,
    value = '',

    textStyle,

    activeTouchStyle,
    containerStyleIcon,
    containerStyleTitle,
    
    selectImage = isDisable ? <ICGeneralDisabledRadioButtonOff height={20} width={20} /> : <ICGeneralRadioButtonOff height={20} width={20} />,
    textContainer,
    unselectImage = isDisable ? <ICGeneralDisabledRadioButtonOff height={20} width={20} /> : <ICGeneralRadioButtonOn height={20} />,

    toggleState,
    onPress,
  } = props;

  const [enable, setEnable] = useState(!isSelect);

  useEffect(() => {
    setEnable(!isSelect);
  }, [isSelect]);

  const handlePress = () => {
    setEnable(!enable);
    if (toggleState) {
      toggleState(value, !enable);
    }
    if (onPress) {
      onPress(value);
    }
  };

  const iconContainer = () => {
    return (
      <TouchableHighlight
        style={[styles.touchableStyle, activeTouchStyle]}
        onPress={handlePress}
        key={value}
        underlayColor={tapRadioButtonColor}
        disabled={isDisable}>
        {enable ? selectImage : unselectImage}
      </TouchableHighlight>
    );
  };

  const titleContainer = () => {
    return (
      <TouchableOpacity
        onPress={handlePress} disabled={isDisable}>
        {textContainer || <Text style={[styles.textStyle, textStyle]}>{title}</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {isLeft ?
        <View style={[styles.container, containerStyleIcon]}>
          <View>{iconContainer()}</View>
          <View>{titleContainer()}</View>
        </View>
        :
        <View style={[styles.container, containerStyleTitle]}>
          <View>{titleContainer()}</View>
          <View>{iconContainer()}</View>
        </View>
      }
    </View>
  );
};
export default IMSingleRadioButton;
