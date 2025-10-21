import { ViewStyle } from 'react-native';

export interface IMCustomStatusBarProps {
  angle: number;
  gradientColorsArray: [string, string];
  isUseAngle: boolean;
  isTranslucent?: boolean;
  linearGradientStyle?: ViewStyle;
  statusBarBackgroundColor?: string;
}
