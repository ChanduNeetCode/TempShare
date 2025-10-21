/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { Text, TextStyle, TouchableHighlight, ViewStyle } from 'react-native';

import { colors } from '../../../atoms/colors';
import { actuatedNormalizeWidth } from '../../../utils/utility';
import Styles from './styles';

export type Props = {
  disabled?:boolean;

  widthLarge?: number;
  widthSmall?: number;
 
  underlayColor?:string;
  titleRecv?: string;
  type?: string;

  styleText?: TextStyle;

  buttonStyle?: ViewStyle;

  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;

  onPress?: any;
};

const IMOutlinedButton: React.FC<Props> = ({
  disabled,

  widthLarge=actuatedNormalizeWidth(328),
  widthSmall=actuatedNormalizeWidth(156),

  underlayColor=colors.PrimaryOrange110,
  titleRecv,
  type,
 
  styleText,

  buttonStyle,

  leftIcon,
  rightIcon,

  onPress,
}) => {
  return (
    <TouchableHighlight
      disabled={disabled}
      style={[
        Styles.buttonStyle,
        Styles.outlinedButtonAddOnStyle,
        buttonStyle,
        {
          width: type === 'large' ? widthLarge : widthSmall,
        },
      ]}
      underlayColor={underlayColor}
      onPress={() => onPress(titleRecv)}>
      <>
      {leftIcon}
      <Text style={[Styles.buttonLarge, { color: colors.PrimaryOrange100 },styleText]}>
        {titleRecv}
      </Text>
      {rightIcon}
      </>
    </TouchableHighlight>
  );
};

export default IMOutlinedButton;
