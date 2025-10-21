import { TextStyle, ViewStyle } from 'react-native/types';

export type Props = {
  isButton:boolean;
  isButtonLeftIcon?:boolean;
  isButtonRightIcon?:boolean;

  buttonStyleProp?: ViewStyle;
  stateStyle?: ViewStyle;
  
  titleStyle?: TextStyle;
  sublineStyle?: TextStyle;

  buttonType?:string;
  buttonTitle?: string;
  subline?: string;
  title?: string;

  buttonContainer?: JSX.Element;
  image?: JSX.Element;

  onPress?: any;
  buttonTextStyle?:any;
};
