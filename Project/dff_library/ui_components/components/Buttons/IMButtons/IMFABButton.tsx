/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { TouchableHighlight, TouchableOpacity, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../../atoms/colors';
import Styles from './styles';

export type Props = {
  disabled?: boolean;

  circleSize?: number;

  color?: string;
  gradiantColor?: string;
  gradiantColorTwo?: string;
  underlayColor?: string;

  buttonStyle?: ViewStyle;
  gradiantStyle?: ViewStyle;

  image?: JSX.Element;

  onPress?: any;
};

const IMFABButton: React.FC<Props> = ({
  disabled,

  circleSize = 56,
  
  color = colors.PrimaryOrange100,
  gradiantColor = colors.GradientMaroonStart,
  gradiantColorTwo = colors.SecondaryMaroon100,
  underlayColor = colors.SecondaryMaroon110,

  buttonStyle,
  gradiantStyle,

  image,

  onPress,
}) => {

  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      style={[
        {
          width: circleSize,
          height: circleSize,
          backgroundColor: color,
          borderRadius: circleSize, 
        },
        Styles.fabButtonStyle,
        buttonStyle,
      ]}
      onPress={() => onPress}

      disabled={disabled}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[gradiantColor, gradiantColorTwo]}
        style={[
          {
            width: circleSize,
            height: circleSize,
            borderRadius: circleSize,
            justifyContent: 'center',
            alignItems: 'center'
          },
          gradiantStyle,
        ]}>
        {image}
      </LinearGradient>
    </TouchableHighlight>
  );
};

export default IMFABButton;