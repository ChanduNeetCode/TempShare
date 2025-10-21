import { ViewStyle, TextStyle } from 'react-native';

export interface LinearGradientProps {
  x: number;
  y: number;
}
export interface componentDisplayProps {
  id: number;

  buttonTitle?: string;
  buttonTitle2?: string;
  buttonType?: string;
  buttonType2?: string;

  buttonWidthLarge?: number;
  buttonWidthLarge2?: number;
  buttonWidthSmall?: number;
  buttonWidthSmall2?: number;

  linearGradientColorEnd: string;
  linerGradientColorStart: string;
  tallWidth1Title?: JSX.Element;
  tallWidthItem2Title?: JSX.Element;

  componentToDisplay?: JSX.Element;
  displayImage?: JSX.Element;

  end: LinearGradientProps;
  start: LinearGradientProps;
}
export interface BannersProps {
  isShowsHorizontalScrollIndicator?: boolean;
  isDisable?:boolean,

  containerStyleProps?: ViewStyle;
  tallWidthItem1ButtonContainerStyle?: ViewStyle;
  tallWidthItem1TextContainerStyle?: ViewStyle;
  tallWidthItem2ButtonContainerStyle?: ViewStyle;
  tallWidthItemImageStyle?: ViewStyle;

  tallWidthItem2ButtonTextStyle?: TextStyle;
  tallWidthItemButtonTextStyle?: TextStyle;

  data: componentDisplayProps[];

  onPress: (id: number) => void;
}
