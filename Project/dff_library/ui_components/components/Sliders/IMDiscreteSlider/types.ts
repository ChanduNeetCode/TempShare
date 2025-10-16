import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IMDiscreteSliderProps {
  maxValue: number;
  minValue: number;
  slideValue: number;
  steps: number;
  widthSlider: number;

  leftSideLabel?: string;
  maxTintColor?: string;
  minTintColor?: string;
  rightSideLabel?: string;
  thumbTintColor?: string;
  title?: string;

  parentViewStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;

  leftSideLabelStyle?: TextStyle;
  rightSideLabelStyle?: TextStyle;
}
