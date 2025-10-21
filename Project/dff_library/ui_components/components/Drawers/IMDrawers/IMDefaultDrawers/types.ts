import { TextStyle, ViewStyle } from 'react-native';

export interface IMDefaultDrawersProps {
  isDisable?: boolean;
  isStatusBarTranslucent?:boolean;
  expandable: boolean;
  visible: boolean;

  maxSwipeHeight?: number;
  minModalHeight?: number;

  title?: string;

  expandableIconChildStyle?: ViewStyle;
  expandableiconContentStyle?: ViewStyle;
  modalContentStyle?: ViewStyle;
  modalTouchableStyleProp?: ViewStyle;
  modelcontainerStyleProp?: ViewStyle;
  titleChildPartOneStyle?: ViewStyle;
  titleChildPartThreeStyle?: ViewStyle;
  titleChildPartTwoStyle?: ViewStyle;
  titleContentStyle?: ViewStyle;

  titleStyleProp?: TextStyle;

  blurContainer?: JSX.Element;
  childProps?: JSX.Element;
  expandableIcon?: JSX.Element;
  LeftImage?: JSX.Element;
  RightImage?: JSX.Element;

  onClose?: () => void;
  onIconPress?: () => void;
  onPressBlurPart?: () => void;
}
