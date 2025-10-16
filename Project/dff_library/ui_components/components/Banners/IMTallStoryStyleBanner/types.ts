import { ViewStyle, TextStyle } from 'react-native';

export interface LinearGradientProps {
  x: number;
  y: number;
}
export interface ProgressBarProps {
  index: number;
}
export interface BannersProps {
  numberOfProgressBars: number;
  progressBarHeight?: number;
  progressBarWidth?: number;

  buttonTitle?: string;

  containerStyleProps?: ViewStyle;

  storyButtonTextStyle?: TextStyle;

  imagesToDisplay: any;

  defaultComponentToDisplay?: JSX.Element;

  end?: LinearGradientProps;
  start?: LinearGradientProps;

  onPress: (id: number) => void;
}
