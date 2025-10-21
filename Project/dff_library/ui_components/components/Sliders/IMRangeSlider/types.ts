import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface RangeSliderProps {
  maxValue: number;
  minValue: number;
  numberOfDots: number;
  steps: number;
  widthSlider: number;

  bgColorOfTrack?: string;
  title?: string;

  labelStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;

  leftSideRangeLabel?: boolean;
  rightSideRangeLabel?: boolean;

  FirstCircleAnimationStyle?: ViewStyle;
  FirstCircleStyle?: ViewStyle;
  SecondCircleAnimationStyle?: ViewStyle;
  SecondCircleStyle?: ViewStyle;
  styleBGTrack?: ViewStyle;

  onMaxSlider: (value: number) => void;
  onMinSlider: (value: number) => void;
}
