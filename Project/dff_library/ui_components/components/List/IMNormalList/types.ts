import { TextStyle, ViewStyle } from 'react-native';

export interface IList {
  active?: boolean;
  isStar?: boolean;

  forceRefresh?: number;
  id: string;
  name?: string | JSX.Element;
  optionalHeaderText?:JSX.Element;
}

export interface IMNormalListProps {
  extraDataProp?: any;

  defaultIndex?:number;

  list: IList[];

  date?: string;
  headingKey?: string;
  highlightColor?: string;
  itemDefaultBGC?:string;
  itemHightlightBGC?:string;
  leftIcon?: string;
  leftIconDefaultBGC?: string;
  leftIconHightlightBGC?: string;
  ListEndHeadingTitle?: string;
  ListHeadingTitle?: string;
  rightIconHightlightBGC?: string;
  rightIconKey?: string;
  starIconKey?: string;

  highlightIconPosition?: 'right' | 'left';

  amtTextStyle?: TextStyle;
  dateStyle?: TextStyle;
  headingStyle?: TextStyle;
  headingTextStyle?:TextStyle;
  listEndHeaderTextStyle?: TextStyle;
  optionalContainerStyle?: TextStyle;
  subLineStyle?: TextStyle;

  headingContainerStyleProp?: ViewStyle;
  itemSeparateLineStyle?: ViewStyle;
  itemViewStyle?: ViewStyle;
  leftIconStyles?: ViewStyle;
  listHeaderViewStyle?: ViewStyle;
  mainContainerStyle?: ViewStyle;
  rightIconStyles?: ViewStyle;
  touchableStyle?: ViewStyle;
  touchStyle?:ViewStyle;

  amt?: JSX.Element | string;
  subLineKey?: JSX.Element | string;

  disableIcon?: JSX.Element;
  highlightIcon?: JSX.Element;

  isListHeader?: boolean;
  isOnPressHighlight?: boolean;
  isOptionalContainer?: boolean;
  isRefresh?: boolean;
  isSeparator?: boolean;
  isTextWrap?: boolean;

  highlightWidth?: number;
  maxToRenderPerBatch?: number;
  onEndReachedThreshold?: number;

  getAllproducts?: () => void;
  itemOnPressCallback?: (item: any,index?:any) => void;
  onClickRightIcon?: (item: any, index: any) => void;
  onItemClick?: (item: any) => void;
  OnRefreshCallback?: () => void;

  footerElement?: () => JSX.Element;
  renderCustomListHeader?: () => JSX.Element;
}