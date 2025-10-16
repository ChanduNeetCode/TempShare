import { ViewStyle } from 'react-native';

export interface IMInfoCardProps {
  children?: JSX.Element;
  LeftImage?: JSX.Element;
  RightImage?: JSX.Element;

  cardHeight?: number;
  type?: number;

  typeClr?: string;

  infoCardInnerStyleProp?: ViewStyle;
  infoCardsStyleProp?: ViewStyle;
  infoCardViewStyleProp?: ViewStyle;
  LeftImageStyle?: ViewStyle;
  RightImageStyle?: ViewStyle;
  TextStyle?: ViewStyle;
}
