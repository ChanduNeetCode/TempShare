import { ViewStyle } from 'react-native';

export interface IMPopoverTooltipProp {
  contentText?: JSX.Element | string;

  verticalOffset?:number;

  ui_components: JSX.Element;

  textStyle?: object;

  backgroundStyleProp?: ViewStyle;
  containerStyle?: ViewStyle;
  popoverStyles?: ViewStyle;

  placement: any;
}
