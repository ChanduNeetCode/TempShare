import { TextStyle, ViewStyle } from 'react-native/types';

export interface Errorprops {
  title: string;
  description: string | JSX.Element;
  isVisible: boolean;
  isSelect?: boolean;

  buttonProps?: JSX.Element;
  blurContainer?: JSX.Element;
  childProps?: JSX.Element;
  errorIcon?: JSX.Element;
  closeIcon?: JSX.Element;

  styleDescriptionView?: ViewStyle;
  styleCenteredView?: ViewStyle;
  stylecloseIconStyle?: ViewStyle;
  styleCenteredMainView?: ViewStyle;
  styleErrorMainStyle?: ViewStyle;
  styleErrorViewStyle?: ViewStyle;
  styleErrorCircleStyle?: ViewStyle;
  styleTitleView?: ViewStyle;

  closeModal: (value: boolean) => void;
  onPress?: () => void;

  styleTitleStyle?: TextStyle;
  styleDescriptionTextStyle?: TextStyle;
}
