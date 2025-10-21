import { ViewStyle } from 'react-native';

export interface IMGroupListProps {
  content: List[];

  highlightColor?: string;

  highlightWidth?: number;

  isSeparator?: boolean;

  itemSeparateLineStyle?: ViewStyle;
  mainContainerStyle?: ViewStyle;

  onPressItem?: (prop: any) => void;

  footerElement?: () => JSX.Element;
  headerElement?: () => JSX.Element;
}
export interface List {
  main: JSX.Element;
  sub?: JSX.Element;

  mainTextContainerStyle?: ViewStyle;
  subTextContainerStyle?: ViewStyle;
}
