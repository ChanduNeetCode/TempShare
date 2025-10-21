/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { colors } from '../../../atoms/colors';
import { actuatedNormalizeWidth } from '../../../utils/utility';
import Styles from './styles';

export type Props = {
  leftIcon?: boolean;
  rightIcon?: boolean;

  widthLarge?: number;
  widthSmall?: number;
  
  titleRecv?: string;
  type?: string;

  leftImage?:JSX.Element;
  rightImage?:JSX.Element;

  styleText?: TextStyle;
  
  buttonStyle?: ViewStyle;

  onPress?: any;
};

const IMDisabledButton: React.FC<Props> = ({
  leftIcon,
  rightIcon,

  widthLarge=actuatedNormalizeWidth(328),
  widthSmall=actuatedNormalizeWidth(156),

  titleRecv,
  type,

  leftImage,
  rightImage,

  styleText,

  buttonStyle,
  
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        Styles.buttonStyle,
        { backgroundColor: colors.PastelAmber100 },
        buttonStyle,
        {
          width: type === 'large' ? widthLarge : widthSmall,
        },
      ]}
      onPress={() => onPress(titleRecv)}
      disabled>
      {leftIcon && leftImage}
      <Text style={[Styles.buttonLarge,{ color: colors.NeutralGrey110 },styleText]}>
        {titleRecv}
      </Text>
      {rightIcon && rightImage}
    </TouchableOpacity>
  );
};

export default IMDisabledButton;
