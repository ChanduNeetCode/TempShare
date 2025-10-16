import { TextStyle, ViewStyle } from 'react-native';

export interface HscItem {
  title?: string | JSX.Element;
  subTitle?: string | JSX.Element;
}

interface LinearGradientProps {
  x: number;
  y: number;
}

export interface IMHorizontalStackedViewProps {
  items: HscItem[];

  isTouchableDisable?: boolean;

  touchableFunc?: (item: any) => void;

  containerStyle?: ViewStyle;
  separatorLineStyle?: ViewStyle;
  renderItemStyle?: ViewStyle;

  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;

  start?: LinearGradientProps;
  end?: LinearGradientProps;

  linearGradinentStyleProps?: ViewStyle;

  linearGradientColorStart?: string;
  linearGradientColorEnd?: string;
}
