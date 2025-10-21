import { TextStyle, ViewStyle } from 'react-native/types';

export interface IMTextFieldsProps {
  activeHelperTextColor?: string;
  cursorColor?: string;
  defaultValue?: string;
  disableContainerBC ?: string,
  disableHelperTextColor?: string;
  enabledContainerBC ?: string;
  errorActiveColor ?: string
  errorDisableColor ?: string,
  errorHelperTextColor ?: string;
  errorOutlineColor?: string;
  helperText?: string;
  label?: string;
  placeholderText?: string;
  placeholderTxtColor?: string;
  successHelperTextColor?: string;
  successOutlineColor?: string;
  textButtonName?: string;

  leftIcon?: boolean;
  enabled?: boolean;
  helperTextMode?: boolean;
  isError?: boolean;
  isPlaceholderDisplayOnFocus?:boolean;
  outline?: boolean;
  rightIcon?: boolean;
  separatorLine?: boolean;
  textButton?: boolean;
  multiLine?:boolean;
  showKeyboard?:boolean;

  maxLength?: number;
  numberOfLine?:number;
  
  helperTextStyle?: TextStyle;
  textInputStyle?: TextStyle;
  textIconStyle?: TextStyle;

  containerPropStyle?: ViewStyle;
  disableMainView?:ViewStyle;
  labelPropStyle?: ViewStyle;
  lefticonPropStyle?: ViewStyle;
  helperContainerModeStyle?: ViewStyle;
  mainViewStyleProp?: ViewStyle;
  outsideViewProp?:ViewStyle;
  rightIconStyle?: ViewStyle;
  leftIconStyle?: ViewStyle;

  errorIcon?: any;
  helperTextContainer?: JSX.Element
  leftIconImage?: any;
  rightIconImage?: any;

  payeeButton?: CallableFunction;

  searchValue?: (prop: string) => void;
  textInputFocusCallBack?: () => void;

  keyboardTypeOptions?: KeyboardType;

  autoCaptialize ?: 'none' | 'sentences' | 'words' | 'characters';

}

export type KeyboardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'number-pad'
  | 'decimal-pad';

