import { ViewStyle, StyleProp, TextStyle } from 'react-native';

export interface IMFloatTextFieldsProps {
  maxLength?: number,
  numberOfLine?: number;

  activeHelperTextColor?: string;
  defaultValue?: string;
  disableContainerBC?: string;
  disableHelperTextColor?: string;
  enabledContainerBC?: string;
  errorActiveColor?: string;
  errorDisableColor?: string;
  errorHelperTextColor?: string;
  errorOutlineColor?: string;
  floatingPlaceHTC?: string;
  helperText?: string;
  label?: string;
  placeholderText?: string;
  placeHTC?: string;
  rightSideTextName?: string;
  successHelperTextColor?: string;
  successOutlineColor?: string;
  textInputCursorColor?: string;

  enabled?: boolean;
  helperTextMode?: boolean;
  isError?: boolean;
  isPlaceholderDisplayOnFocus?:boolean;
  isMultiLine?: boolean;
  leftIcon?: boolean;
  outline?: boolean,
  rightIcon?: boolean;
  separatorLine?: boolean;
  textButton?: boolean;

  errorIcon?: any;
  leftIconImage?: any;
  placeholderTextColorProp?: any;
  rightIconImage?: any;

  searchValue: (prop: string) => void;
  textInputFocusCallBack?: () => void;
  textInputFocusRemovedCallBack?: () => void;

  keyboardTypeOptions?: KeyboardType;

  helperTextContainer?: JSX.Element;

  errorIconStyle?: ViewStyle;
  helperContainerModeStyle?: ViewStyle;
  labelContainerPropStyle?: ViewStyle;
  leftIconStyle?: ViewStyle;
  mainViewStyle?: StyleProp<ViewStyle>;
  outsideViewProp?: StyleProp<ViewStyle>;
  rightIconStyle?: ViewStyle;
  separatorLineStyle?: ViewStyle;

  customImageTextStyle?: TextStyle;
  helperTextStyle?: TextStyle;
  labelTextStyle?: TextStyle;
  textInputStyle?: TextStyle;

  payeeButton?: CallableFunction;

  autoCaptialize ?: 'none' | 'sentences' | 'words' | 'characters';

}

export type KeyboardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'number-pad'
  | 'decimal-pad';
