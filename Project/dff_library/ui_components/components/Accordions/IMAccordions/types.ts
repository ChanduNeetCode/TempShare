import { TextStyle, ViewStyle } from 'react-native';

export interface flatListObject {
  isTooltip?:boolean;

  id: number;

  text?: string;
  tooltipContent?:string;

  tooltipContentStyle?:TextStyle;
  
  image?: JSX.Element;
}
export interface AccordionItem {
  isContentJSX: boolean;
  isDisableToggle?: boolean;
  isMainTooltip?:boolean;
  isOpen: boolean;
 
  id?: number;

  mainTooltipContent?:string;
  subtitle?: string;

  content?: JSX.Element | flatListObject[];
  title?: string | JSX.Element;

  selectTitleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
  mainTooltipTextStyle?:TextStyle;
  unselectTitleStyle?: TextStyle;

  mainTooltipStyle?:ViewStyle;

  image?: JSX.Element;
  rightSelectImage?: JSX.Element;
  rightUnselectImage?: JSX.Element;
  selectIconImage?: JSX.Element;
  unselectIconImage?: JSX.Element;
}

export interface IMAccordionProps {
  isFlatlistAccordian?: boolean;
  isFlatlistLastline?:boolean;
  isHighlighted?:boolean;
  isMultipleOpenAllowed?: boolean;
  isWithoutIcon?: boolean;
  isSeperateToggle?: boolean;
  
  textHighlightString?: string;

  refs?: any;

  items: AccordionItem[];

  contentItemTapFunction?: (prop: any) => void;
  toggleCloseFunc?: (prop: AccordionItem, index: number) => void;
  toggleOpenFunc?: (prop:AccordionItem,index:number) => void;
  toggleFunc?: (prop: AccordionItem, index: number) => void;

  backgroundHighlightColor?:ViewStyle;
  cardContentStyle?:ViewStyle;
  flatListAccordionContainerStyle?:ViewStyle;
  headerStyle?: ViewStyle;
  innerSeperationLineStyle?:ViewStyle;
  selectedparentstyle?: ViewStyle;
  titleViewStyle?:ViewStyle;
  unselectedparentstyle?: ViewStyle;
  
  redirectionTextProp?: TextStyle;

  itemSeperatorComponent?:JSX.Element;
  onViewableItemsChanged?:any;
  viewabilityConfig?:any;
  getItemLayout?:any;
  }
