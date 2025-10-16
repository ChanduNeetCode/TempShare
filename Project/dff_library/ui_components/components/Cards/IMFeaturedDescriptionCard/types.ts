import { ViewStyle } from 'react-native';

export enum featuredInfo {
  'type1',
  'type2',
  'type3',
}
export interface IMFeaturedProps {
  linearGradientColor1?: string;
  linearGradientColor2?: string;
  typeClr?: string;

  alignItems?: ViewStyle;
  bottomLeftImgStyle?: ViewStyle;
  bottomRightImgStyle?: ViewStyle;
  featuredCardStyleProp?: ViewStyle;
  LeftTopStyle?: ViewStyle;

  children?: JSX.Element;
  ImageBottomLeft?: JSX.Element;
  ImageBottomRight?: JSX.Element;
  ImageLeftTop?: JSX.Element;
  ImageRightTop?: JSX.Element;

  type: featuredInfo.type1 | featuredInfo.type2 | featuredInfo.type3;
  
  linearGradientEndDimension?: any;
  linearGradientStartDimension?: any;
}
