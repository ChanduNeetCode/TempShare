import { TextStyle, ViewStyle } from 'react-native';
import { Rect } from 'react-native-popover-view/dist/Types';

export interface IMCoachMarkProps {
  isButtons?:boolean;
  isPagination?:boolean;
  isVisible?: boolean;

  displayArea?: Pick<Rect, 'x' | 'y' | 'width' | 'height'>;

  activeDotClr?:string;
  backBtnText?:string;
  buttonGradientClrs?:[string,string];
  buttonGradientClrs2?:[string,string];
  btnGradientTxtClr?:string;
  inActiveDotClr?:string;
  linearGradientColor1?: string;
  linearGradientColor2?: string;
  nextBtnText?:string;
  popBackGroundClr?: string;

  offset?: number;
  popHeight?: number;

  activeDotStyle?: ViewStyle;
  backgroundStyle?:ViewStyle;
  buttonViewStyle?: ViewStyle;
  buttonStyle?:ViewStyle;
  coachmarkViewStyle?: ViewStyle;
  gradiantStyle?:ViewStyle;
  iconStyle?: ViewStyle;
  inactiveDotStyle?: ViewStyle;
  mainContainerProp?: ViewStyle;

  textStyleProp?: TextStyle;
  primaryStyleText?:TextStyle;
  gradiantStyleText?:TextStyle;

  children?: JSX.Element | any;
  coachMarkImg?: JSX.Element;

  linearGradientEndDimension?: any;
  linearGradientStartDimension?: any;
  placement?: any;
  textString?: any;

  hidePopover?: () => void;

  closeIconContainer?:JSX.Element;
}
