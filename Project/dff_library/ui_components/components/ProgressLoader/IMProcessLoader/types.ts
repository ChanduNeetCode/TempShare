import {
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface ProcessLoadersProps {
  isBackgroundTransparent?: boolean;
  isStatusBarTranslucent?: boolean;
  isShowLoadingIndicator?: boolean;

  animationType?: "none" | "slide" | "fade";

  subTitle?: string;
  title?: string;

  subTitleStyle?: TextStyle;
  titleStyle?: TextStyle;

  loaderContainerStyle?: ViewStyle;
  parentViewStyle?: ViewStyle;
  transparentStyle?: ViewStyle;

  blurEffect?: JSX.Element;
  subTitleContainer?: JSX.Element;
  titleContainer?: JSX.Element;
}
