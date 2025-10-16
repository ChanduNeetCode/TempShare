import { ViewStyle, TextStyle } from 'react-native';

export interface IMMpinDrawerProps {
  isDisable?:boolean,
  isErrorText?: boolean,
  isStatusBarTranslucent?:boolean;
  isVisible?: boolean,

  maxLength?: number;
  cardHeight?: number;

  cursorColor?: string;
  errorMessage?: string;
  linearGradientColor1?: string;
  linearGradientColor2?: string;
  mpinText?: string;
  title?: string;

  errorMsgTextStyle?: TextStyle,
  mpinTextStyle?: TextStyle,
  textInputStyle?: TextStyle,
  titleTextStyle?: TextStyle,

  bankLogoStyles?: ViewStyle,
  closeIconStyles?: ViewStyle,
  contentContainerStyle?: ViewStyle,
  contentStyle?: ViewStyle,
  eyeIconStyle?: ViewStyle,
  keyboardAvoidingStyle?: ViewStyle,
  linearGradientStyle?: ViewStyle,
  mainContainerStyle?: ViewStyle,
  modalTouchableStyle?: ViewStyle,
  otpContainerStyle?: ViewStyle,
  titleContainerStyle?: ViewStyle,

  bankLogo?: JSX.Element;
  blurContainer?: JSX.Element;
  content?: JSX.Element;
  closeimage?: JSX.Element;
  disableEyeimage?: JSX.Element;
  eyecross?: JSX.Element;
  eyeimage?: JSX.Element;

  handleBlurPart?: () => void;
  handleCloseIcon?: () => void;
  onSubmit?: () => void;
  onChange?: (a: any) => void;
}
