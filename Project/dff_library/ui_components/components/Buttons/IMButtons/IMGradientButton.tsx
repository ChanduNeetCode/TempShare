/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { colors } from '../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import Styles from './styles';

export type Props = {
  widthLarge?: number;
  widthSmall?: number;
  btnHeight?:number;
  width?:number;
  
  type?: string;
  titleRecv?: string;

  gradientColorsArray?: [string, string];

  buttonStyle?: any;

  styleText?: TextStyle;

  onPress?: any;
};

const IMGradientButton: React.FC<Props> = ({
  widthLarge=actuatedNormalizeWidth(124),
  widthSmall=actuatedNormalizeWidth(70),

  titleRecv,
  type,

  gradientColorsArray,

  buttonStyle,

  styleText,

  onPress,
}) => {
  
  return (
    <TouchableOpacity
      onPress={() => onPress(titleRecv)}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={gradientColorsArray?gradientColorsArray:[colors.GradientOrangeStart,colors.GradientOrangeEnd]}
        style={[
          Styles.gradientButtonStyle,
          buttonStyle,
          {
            minHeight: type === 'large' ? actuatedNormalizeHeight(48) : actuatedNormalizeHeight(32),
            width: type === 'large' ? widthLarge : widthSmall,
          },
        ]}>
        <Text
          style={[
            Styles.buttonLarge ,
            Styles.gradientText,
            styleText,
          ]}>
          {titleRecv}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default IMGradientButton;
