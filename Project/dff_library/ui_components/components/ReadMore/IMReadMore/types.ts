import { TextStyle, ViewStyle } from 'react-native';

export interface IMReadMoreProps {
  ellipsis?: string;
  seeMoreText?: string;
  seeLessText?: string;

  debounceSeeMoreCalc?: number;
  numberOfLines?: number;
  seeMoreOverlapCount?: number;

  animate?: boolean;
  collapsed?: boolean;
  debug?: any;
  expandOnly?: boolean;
  newLine?:boolean;

  //customTextComponent?: Text,
  TextComponent?: any;

  children?: any;
  allowFontScaling?: any;

  style?: TextStyle;
  seeMoreStyle?: TextStyle;
  seeLessStyle?: TextStyle;
  ellipsisStyle?:TextStyle;

  seeMoreContainerStyleSecondary?: ViewStyle;
  wrapperStyle?: ViewStyle;

  textLessMore?: JSX.Element;

  onExpand?: () => void;
  onCollapse?: () => void;
  onReady?: () => void;
  onSeeMore?: () => void;
  onSeeLess?: () => void;
}
export interface Line {
  text?: string;
}
