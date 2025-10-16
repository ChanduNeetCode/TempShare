import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IMContinuousSliderProps {
  initialValueOfSlider?: number;
  maxValue: number;
  minValue: number;
  numberOfDots: number;
  steps: number;
  widthSlider: number;

  bgColorOfTrack?: string;
  leftSideLabel?: string;
  rightSideLabel?: string;
  title?: string;

  labelStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;

  leftSideLabelStyle?: TextStyle;
  rightSideLabelStyle?: TextStyle;

  leftSideRangeLabel?: boolean;
  rightSideRangeLabel?: boolean;

  circleAnimationStyle?: ViewStyle;
  circleStyle?: ViewStyle;
  labelStylesProp?: ViewStyle;
  styleBGTrack?: ViewStyle;

  onSlider: (value: number) => void;
}
