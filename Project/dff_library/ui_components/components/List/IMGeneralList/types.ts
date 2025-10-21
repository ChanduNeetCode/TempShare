import { TextStyle, ViewStyle } from 'react-native';

export interface IList {
  key: string;
  value: string;
}
export interface IMGeneralListProps {
  content: string;
  displayKey: string;

  list: IList[];

  isSeparator?: boolean;
  isEmptyContentDisplay?:boolean;

  leftItemTextStyle?: TextStyle;
  rightItemTextStyle?: TextStyle;

  changeContainerStyle?: ViewStyle;
  itemSeparateLineStyle?: ViewStyle;
  mainContainerStyle?: ViewStyle;

  footerElement?: () => JSX.Element;
  headerElement?: () => JSX.Element;

  onPressItem?: (prop: any) => void;
}
