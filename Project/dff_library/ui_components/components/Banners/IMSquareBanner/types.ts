import { ViewStyle } from 'react-native';

export interface LinearGradientProps {
  x: number;
  y: number;
}
export interface BannersProps {
  linearGradientColorEnd?: string;
  linearGradientColorStart?: string;

  isDisable?:boolean,

  containerStyleProps?: ViewStyle;

  componentDisplay?: JSX.Element;

  start?: LinearGradientProps;
  end?: LinearGradientProps;

  onPress: () => void;
}
