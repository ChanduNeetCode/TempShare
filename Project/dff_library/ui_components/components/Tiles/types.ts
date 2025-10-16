import { TextStyle, ViewStyle } from 'react-native';

export type flatListObject = {
  isChip?:boolean;
  isTooltip?:boolean;

  badgesBackgroundClr?:string;
  badgesTextClr?:string;
  badgesTitle?:string;
  title: string;
  
  badgesTextStyle?:TextStyle;
  
  badgeViewStyle?:ViewStyle;
  chipContainerStyle?:ViewStyle;
  tooltipContainerStyle?:ViewStyle;

  badgesLeftIcon?: JSX.Element;
  badgesRightIcon?: JSX.Element;
  iconImage: JSX.Element;
  tooltipContent?:JSX.Element;
};

export enum TilesType {
  'StackedWithoutBackground',
  'StackedWithBackground',
  'HorizontalWithBackground',
  'HorizontalWithoutBackground',
}

export interface TilesProps {
  isChip?:boolean;
  isContainedBackGroundColor?: boolean;
  isIcon?: boolean;
  isMoreButton?: boolean;
  isSelectedStyle?: boolean;
  isTitle?: boolean;
  isTitleDescription?: boolean;
  isTooltip?:boolean;

  badgesBackgroundClr?: string;
  badgesTextClr?: string;
  badgesTitle?: string;
  cardTitle?: string;
  title?: string;
  titleDescription?: string;

  badgesTextStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  styleContainedText?: TextStyle;
  styleContainedTextStyle?: TextStyle;
  styleHorizontalTextStyle?: TextStyle;
  styleTitleStyle?: TextStyle;
  titleStyles?: TextStyle;

  badgeViewStyle?: ViewStyle;
  chipContainerStyle?: ViewStyle;
  headStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  styleContainedIconView?: ViewStyle;
  styleContainedTile?: ViewStyle;
  styleContainedTileView?: ViewStyle;
  styleContainedViewStyle?: ViewStyle;
  styleContainedViewWithBG?: ViewStyle;
  styleHorizontalViewWithBG?: ViewStyle;
  styleHorizontalViewWithOutBG?: ViewStyle;
  styleStackedMainBGViewStyle?: ViewStyle;
  styleStackedWithBG?: ViewStyle;
  tooltipContainerStyle?:ViewStyle;

  badgesLeftIcon?: JSX.Element;
  badgesRightIcon?: JSX.Element;
  cardIcon?: JSX.Element;
  icon?: JSX.Element;
  viewLessIcon?: JSX.Element;
  viewMoreIcon?: JSX.Element;
  tooltipContent?:JSX.Element;

  items?: Array<flatListObject>;

  tilesType?:
    | TilesType.HorizontalWithBackground
    | TilesType.HorizontalWithoutBackground
    | TilesType.StackedWithBackground
    | TilesType.StackedWithoutBackground;

  onClick: (index?: any) => void;
}
