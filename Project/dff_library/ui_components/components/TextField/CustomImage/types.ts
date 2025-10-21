import { TextStyle } from 'react-native/types';

export interface IMCustomImageProps {
  clickable: boolean;
  disableIcon?: boolean;
  textButton?: boolean;

  textButtonName?: string;

  onPress?: any;
  textIconStyle?: any;

  image: JSX.Element;
}

export type KeyboardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'number-pad'
  | 'decimal-pad';
