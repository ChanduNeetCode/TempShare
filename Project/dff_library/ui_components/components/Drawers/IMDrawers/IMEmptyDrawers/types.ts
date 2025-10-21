import { ViewStyle } from 'react-native';

export interface IMEmptyDrawersProps {
  isDisable?: boolean;
  visible: boolean;

  modalContentStyle?: ViewStyle;
  modelcontainerStyleProp?: ViewStyle;
  modalTouchableStyleProp?: ViewStyle;

  blurContainer?: JSX.Element;
  childProps?: JSX.Element;

  onClose?: () => void;
  onPressBlurPart?: () => void;
}
