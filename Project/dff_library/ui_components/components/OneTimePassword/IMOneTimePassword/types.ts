import { ViewStyle, TextStyle } from 'react-native';

import { keyboardType } from './utils/Constant';

export interface OtpScreenProps {
  otpInputRefs?:any;
  
  isautoFocus?:boolean;
  isDisable?:boolean;
  isResendOtpDisabled?:boolean;
  isStatusBarTranslucent?:boolean;
  isvisible?: boolean;

  keyboardVerticalOffset?: number;
  maxLength: number;

  cursorColor?: string;
  errorMessage?: string;
  otpnote?: string;
  resendotp?: string;
  successMessage?: string;
  title?: string;
  titleotp?: string;

  keyboardType: keyboardType;

  otptext?: string | JSX.Element;

  blurContainer?: JSX.Element;
  closeimage?: JSX.Element;
  disableEyeimage?: JSX.Element;
  eyecross?: JSX.Element;
  eyeimage?: JSX.Element;
  resendIcon?: JSX.Element;
  successImage?: JSX.Element;

  errorMessageText?: TextStyle;
  otpNoteTitle?: TextStyle;
  otptimeText?: TextStyle;
  otptimeText2?: TextStyle;
  resendOtpStle?: TextStyle;
  succesText?: TextStyle;
  titleOtpStyle?: TextStyle;
  titleStyle?: TextStyle;
 
  cancelImage?: ViewStyle;
  container?: ViewStyle;
  contentContainer?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  eyeIcon?: ViewStyle;
  keyboardAvoidingStyle?: ViewStyle;
  messageView?: ViewStyle;
  modalContainer?: ViewStyle;
  otpContainer?: ViewStyle;
  otpView?: ViewStyle;
  resendContainer?: ViewStyle;
  scrollviewContainer?: ViewStyle;
  textInput?: ViewStyle;

  handleBlurPart?: () => void;
  handleCancel?: () => void;
  handleSubmit?: () => void;
  onChangeText?:(a:string)=>void;
  onResendOTP?: () => void;
}
