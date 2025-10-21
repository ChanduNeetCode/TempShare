import { TextStyle, ViewStyle } from 'react-native';

export interface ChoiceSelectorsProps {
  butttonON?: JSX.Element;
  buttonOFF?: JSX.Element;

  listData?: IList[];
  isolatedList?: IsolatedList[];

  containerStyle?: ViewStyle;
  lineSeparatorStyleProp?: ViewStyle;
  textViewStyleProp?: ViewStyle;
  isolatedContainerStyleProp?: ViewStyle;
  isolatedcontainerInnerStyleProp?: ViewStyle;
  isolatedleftImgViewStyleProp?: ViewStyle;
  isolatedRadioStyleProp?: ViewStyle;
  isolatedTxtViewStyleProp?: ViewStyle;
  containedleftImgStyleProp?: ViewStyle;

  isolatedLabelTxtStyleProp?: TextStyle;
  isolatedBodyTxtStyleProp?: TextStyle;
  text1StyleProp?: TextStyle;
  text2StyleProp?: TextStyle;
  text3StyleProp?: TextStyle;

  isMultipleSelect: boolean;

  selectorType: string;

  cardHeight?: number;

  onPressItem: (prop: any) => void;
}
export interface IList {
  id: number;
  leftImgOff?: JSX.Element;
  leftImgOn?: JSX.Element;
  text1: string;
  text2?: string;
  text3?: string;
  isButtonPress?: boolean;
}
export interface IsolatedList {
  id: number;
  leftImgOff?: JSX.Element;
  labelTxt?: string;
  body?: string;
  isLabelPress?: boolean;
}
