import { TextStyle, ViewStyle } from 'react-native';
import { keyboardType } from '../utils/Constant';

interface GcaAlphabets {
  firstAlphabet: string;
  secondAlphabet: string;
  thirdAlphabet: string;
}
export interface IMGCAProp {
  isautoFocus?: boolean;
  isCCA?: boolean;
  isGCA?: boolean;
  isTitle?: boolean;

  letterSpacing?: number;
  maxLength?: number;

  cursorColor?: string;
  enterPinText?: string;
  subtitle?: string;
  title?: string;

  keyboardType?: keyboardType;

  dropdownComponentStyle?: ViewStyle;
  mainContainerStyleProp?: ViewStyle;
  parentContainer?: ViewStyle;

  alphabetTextStyle?: TextStyle;
  pinTextStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  textInputContainer?: ViewStyle;
  textStyle?: TextStyle;
  titleStyle?: TextStyle;

  alphabets?: GcaAlphabets;

  inputFirstCallback?: (data: string) => void;
  inputSecondCallback?: (data: string) => void;
  inputThirdCallback?: (data: string) => void;
  inputResultCallback?: (data: string) => void;
  onSubmitCallBack?: () => void;

  dropdowncomponent?: JSX.Element;
  hideIconContainer?: JSX.Element;
  showIconContainer?: JSX.Element;
}
