import { TextStyle, ViewStyle } from 'react-native';

export interface IMChevronListProps {
  displayKey: string;
  rightSideImage?: string;

  isleftSideImage?: boolean;
  isSeparator?: boolean;

  list: IList[];

  itemTextStyle?: TextStyle;
  
  itemSeparateLineStyle?: ViewStyle;
  leftIconViewStyle?: ViewStyle;
  mainContainerStyle?: ViewStyle;

  footerElement?: () => JSX.Element;
  headerElement?: () => JSX.Element;

  onPressItem?: (prop: any) => void;
}

export interface IList {
  key: string;
  value: string;
}
