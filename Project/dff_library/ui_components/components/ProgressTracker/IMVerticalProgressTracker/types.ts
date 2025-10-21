import { TextStyle, ViewStyle } from 'react-native';

export interface IMVerticalTrackerProps {
  data: Data[];

  statusTitles?: {
    success: string;
    fail: string;
    inProgress: string;
    unChecked: string;
  };

  iconStyleProp?: ViewStyle;
  itemSeparatorStyle?: ViewStyle;
  renderContainerStyle?: ViewStyle;

  mainContainerStyle?: ViewStyle | ViewStyle[];

  textStyle?: TextStyle;
}

export interface Data {
  key?: number;
  title?: string | JSX.Element;
  statusCode?: 'success' | 'fail' | 'inProgress' | 'unChecked';
}
