import { TextStyle, ViewStyle } from 'react-native';

export interface IMNormalListProps {
  extraDataProp?: any;

  list: IList[];

  amt?: JSX.Element | string;
  date?: string;
  headingKey?: string;
  refreshUnderlayColor?: string;
  subLineKey?: JSX.Element | string;
  leftIcon?: string;
  ListHeadingTitle?: string;
  ListEndHeadingTitle?: string;
  highlightColor?: string;
  highlightIconPosition?: 'right' | 'left';
 
  amtTextStyle?: TextStyle;
  dateStyle?: TextStyle;
  headingStyle?: TextStyle;
  listEndHeaderTextStyle?: TextStyle;
  optionalContainerStyle?: TextStyle;
  subLineStyle?: TextStyle;
  
  itemViewStyle?: ViewStyle;
  touchableStyle?: ViewStyle;
  headingContainerStyleProp?: ViewStyle;
  itemSeparateLineStyle?: ViewStyle;
  listHeaderViewStyle?: ViewStyle;
  mainContainerStyle?: ViewStyle;
  rightEndText?:ViewStyle;

  disableIcon?: JSX.Element;
  highlightIcon?: JSX.Element;
  rightIconKey?: string;
  starIconKey?: string;

  isSeparator?: boolean;
  isTextWrap?: boolean;
  isListHeader?: boolean;
  isOnPressHighlight?: boolean;
  isOptionalContainer?: boolean;
  isRefresh?: boolean;

  highlightWidth?: number;
  maxToRenderPerBatch?: number;
  onEndReachedThreshold?: number;


  onItemClick?: (item: any) => void;
  onClickRightIcon?: (item: any, index: any) => void;
  getAllproducts?: () => void;
  itemOnPressCallback?: (item: any) => void;
  OnRefreshCallback?: () => void;

  footerElement?: () => JSX.Element;
  renderCustomListHeader?: () => JSX.Element;
}

export interface IList {
  active?: boolean;
  isStar?: boolean;

  id: string;
  name?: string | JSX.Element;
  forceRefresh?: number;
}
