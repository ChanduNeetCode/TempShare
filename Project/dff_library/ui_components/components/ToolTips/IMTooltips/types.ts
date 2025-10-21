import {ViewStyle } from 'react-native';

export interface IMTooltipsprops {
  isCancelVisibility?: boolean;
  isSelect?: boolean;
  
  cancelIcon?: JSX.Element;
  contentText?: JSX.Element | string;
  selectImage?: JSX.Element;
  unSelectImage?: JSX.Element;

  textStyle?: object;

  backgroundViewStyle?: ViewStyle;
  containerViewStyle?:ViewStyle;
  containerStyle?:ViewStyle;
  outerPopoverStyles?: ViewStyle;
  popoverStyles?: ViewStyle;
  
  placement: any;
  
  onPress?:()=>void;
}