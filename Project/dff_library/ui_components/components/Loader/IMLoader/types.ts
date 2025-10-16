import { TextStyle, ViewStyle } from 'react-native';

export interface LoaderProps {
  activityIndicatorColor: string;
  activityIndicatorSize?: number;
  loaderText?: string;

  showLoadingIndicator: boolean;

  textStyle?: TextStyle;

  blurEffect?: JSX.Element;

  loaderContainerStyle?: ViewStyle;
  loaderViewStyle?: ViewStyle;
}
