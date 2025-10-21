import { TextStyle, ViewStyle } from 'react-native';

export enum statusBarInfo {
  dark='dark-content',
  default='default',
  light='light-content'
}
export interface HeaderFunctionalityProps{
  imageSource: JSX.Element;
  onPress?: () => void;
  style?: ViewStyle;
};

export interface IMCustomNavigationBarProps {
  isCardView?: boolean;
  isStatusBar?: boolean;

  linearGradientColors?: string[];
  statusBarBackgroundColor?: string;
  title?: string;

  titleStyle?: TextStyle;

  containerStyle?: ViewStyle;
  childPropStyle?: ViewStyle;
  mainContainerStyle?:ViewStyle;
  titleViewStyle?: ViewStyle;

  childProps?: JSX.Element;

  endCoordinates?: any;
  startCoordinates?: any;

  headerLeftProps?: HeaderFunctionalityProps;
  headerActionProps?: HeaderFunctionalityProps;
  headerMenuProps?: HeaderFunctionalityProps;
  
  statusBarColor?: statusBarInfo.dark | statusBarInfo.default | statusBarInfo.light;
}
