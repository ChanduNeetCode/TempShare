/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ICBlock, ICChevronRight } from '../../../atoms/icons';
import { actuatedNormalizeWidth,actuatedNormalizeHeight } from '../../../utils/utility';
import styles from './styles';
import { colors } from '../../../atoms';
export type Props = {
  disabled?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;

  widthLarge?: number;
  widthSmall?: number;

  titleRecv?: string;
  type?: string;

  styleText?: any;

  buttonStyle?: any;

  leftImage?: JSX.Element;
  rightImage?: JSX.Element

  onPress?: any;
};

const IMSecondaryButton: React.FC<Props> = ({
  disabled,
  leftIcon,
  rightIcon,

  widthLarge=actuatedNormalizeWidth(328),
  widthSmall=actuatedNormalizeWidth(156),

  titleRecv,
  type,

  styleText,

  buttonStyle,
 
  leftImage = <ICChevronRight width={actuatedNormalizeWidth(20)} height={actuatedNormalizeHeight(20)} />,
  rightImage = <ICBlock width={actuatedNormalizeWidth(20)} height={actuatedNormalizeHeight(20)} />,

  onPress, 
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.secondaryButtonStyle,
        buttonStyle,
        { width: type === 'large' ? widthLarge : widthSmall },
      ]}
      onPress={() => onPress(titleRecv)}
      activeOpacity={1}>
      {leftIcon && leftImage}
      <Text style={[styles.buttonSmall,{color:colors.NeutralGrey140},styleText]}>{titleRecv}</Text>
      {rightIcon && rightImage}
    </TouchableOpacity>
  );
};

export default IMSecondaryButton;
