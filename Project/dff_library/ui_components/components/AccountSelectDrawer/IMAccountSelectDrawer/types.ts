import { TextStyle, ViewStyle } from 'react-native/types';

export interface AccountDrawerProps {
  isCloseIcon?: boolean;
  isDisable?: boolean;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
  isStatusBarTranslucent?:boolean;
  isVisible?: boolean;

  blurContainer?: JSX.Element;
  closeIcon?: JSX.Element;
  container?: JSX.Element;

  primaryTitleTextStyle?: TextStyle;
  titleStyle?: TextStyle;

  onClickBlur?: () => void;
  onClickButton?: () => void;
  handleClose?: () => void;
  
  buttonName?: string;
  primaryTitleText?: string | null;
  title?: string;
  
  buttonStyle?: ViewStyle;
  closeIconStyle?: ViewStyle;
  modalContainer?: ViewStyle;
  modalTouchableStyle?: ViewStyle;
  modalViewStyle?: ViewStyle;
  scrollViewStyle?:ViewStyle;
  secondaryTitleStyle?: ViewStyle;

  widthOfButton?: number;
}
