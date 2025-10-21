import { TextStyle, ViewStyle } from 'react-native';

interface LinearGradientProps {
  x: number;
  y: number;
}

export interface IMIndicativeDrawersProps {
  isDisable?: boolean;
  isLinearGradient?: boolean;
  isStatusBarTranslucent?:boolean;
  visible: boolean;

  linearGradientColor1?:string,
  linearGradientColor2?:string,
  indicativeColor?: string;
  subTitle?: string;
  title?: string;

  SubTextStyle?: TextStyle;
  TitleStyle?: TextStyle;

  closeContent?: ViewStyle;
  closeContentChild?: ViewStyle;
  iconfloatStyle?: ViewStyle;
  modalcontentPropStyle?: ViewStyle;
  modalTouchableStyleProp?: ViewStyle,
  modelcontainerPropStyle?: ViewStyle;
  statuscontentPropStyle?: ViewStyle;
  titleindicativePropStyle?: ViewStyle;

  blurContainer?: JSX.Element;
  childProps?: JSX.Element;
  indicativeIcon?: JSX.Element;
  image?: JSX.Element;

  end?:LinearGradientProps;
  start?:LinearGradientProps;
 
  onClose?: () => void;
  onCloseModal?: () => void;
}
