import { TextStyle, ViewStyle } from 'react-native';

export interface IMTimeLineProps {
  content: objectType[];

  isSeperator?: boolean;

  BoxContent: 'bullet' | 'icon' | 'number';
  Flowline?: 'dashed' | 'solid';

  FlowlineColor?: string;

  numberOfObjects: number;

  containerTextStyle?: TextStyle;
  indexTextStyle?:TextStyle;
  headerTextStyle?: TextStyle;

  bulletStyle?: ViewStyle;
  imageContainerStyle?: ViewStyle;
  separatorStyle?: ViewStyle;

  sepearateLineElement?: JSX.Element;
}

interface objectType {
  header?: JSX.Element | string;
  text: JSX.Element | string;
  icon?: JSX.Element;
  lineStyle?: ViewStyle;
}
