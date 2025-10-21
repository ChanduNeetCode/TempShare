import { TextStyle, ViewStyle } from 'react-native';

export enum statusBarInfo {
  dark='dark-content',
  default='default',
  light='light-content'
}
export interface IMNavigationBarProps {
  endCoordinates?: any;
  startCoordinates?: any;

  childProps?: JSX.Element;

  containerStyle?: ViewStyle;
  childPropStyle?: ViewStyle;
  titleViewStyle?: ViewStyle;

  headerLeftProps?: {
    imageSource?: JSX.Element;
    onPress?: () => void;
    style?: ViewStyle;
  };
  headerActionProps?: {
    imageSource?: JSX.Element;
    onPress?: () => void;
    style?: ViewStyle;
  };
  headerMenuProps?: {
    imageSource?: JSX.Element;
    onPress?: () => void;
    style?: ViewStyle;
  };

  isCardView?: boolean;
  isStatusBar?: boolean;

  linearGradientColors: string[];
  statusBarBackgroundColor?: string;
  title?: string;

  titleStyle?: TextStyle;
  statusBarColor?: statusBarInfo.dark | statusBarInfo.default | statusBarInfo.light;
}
