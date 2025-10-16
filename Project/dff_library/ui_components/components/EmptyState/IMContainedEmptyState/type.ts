import { TextStyle, ViewStyle } from 'react-native/types';

export type Props = {
  buttonStyleProp?: TextStyle;
  sublineStyle?: TextStyle;
  titleStyle?: TextStyle;

  buttonStyle?: ViewStyle;
  buttonViewProp?: ViewStyle;
  stateStyle?: ViewStyle;

  buttonContainer?: JSX.Element;
  image?: JSX.Element;
  rightImage?:JSX.Element;

  onPress?: any;

  isButton: boolean;
  isLeftIcon?:boolean;
  isRightIcon?:boolean;

  buttonType?:string
  buttonTitle?: string;
  subline?: string;
  title?: string;
};
