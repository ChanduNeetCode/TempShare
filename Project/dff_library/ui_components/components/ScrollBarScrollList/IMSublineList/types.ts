import { ViewStyle } from 'react-native';

export interface IMSublineListProps {
  list: IList[];

  mainContainerStyle?: ViewStyle;
  itemSeparateLineStyle?: ViewStyle;
  itemViewStyle?: ViewStyle;
}
export interface IList {
  headline?: string;
  subline?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}
