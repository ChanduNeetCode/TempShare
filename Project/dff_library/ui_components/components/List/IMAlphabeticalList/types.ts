import {
  SectionListData,
  SectionListProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface IData {
  logo?: any;
  isResult?: boolean;
  key: string;
  value: string;
}

export interface IIndexLetterProps {
  index: number;
  item: ISectionData;
  onPress: () => void;
}

export interface ISectionData {
  data: IData[];
  index?: number;
  title: string;
}

export interface IMAlphabeticalListProps
  extends Partial<SectionListProps<IData>> {
  data: IData[];

  alphabeticalHeading?: string;
  searchPlaceHolder?: string;

  index?: string[];

  searchImage?: JSX.Element;
  selectSearchImage?: JSX.Element;
  unselectSearchImage?: JSX.Element;

  isCategorizedAtTop?: boolean;
  isLeftIcon?: boolean;
  isListIndexLetter?: boolean;
  isRadioButton?: boolean;
  isSearch?: boolean;

  indexLetterStyle?: TextStyle;
  selectedIndexLetterStyle?: TextStyle;
  titleStyle?: TextStyle;

  indexContainerStyle?: ViewStyle;
  indexLetterContainerStyle?: ViewStyle;
  letterListContainerStyle?: ViewStyle;
  mainViewStyle?: ViewStyle;
  scrollingIndexLetterContainerStyle?: ViewStyle;
  searchContainerStyle?: ViewStyle;
  searchInputContainer?: ViewStyle;
  searchRenderTouchableActiveStyle?: ViewStyle;
  searchRenderTouchContainerStyle?: ViewStyle;

  getItemHeight?: (sectionIndex: number, rowIndex: number) => number;
  noSearchDataView?: () => JSX.Element;
  renderCustomListHeader?: () => JSX.Element;
  renderCustomIndexLetter?: ({
    item,
    index,
    onPress,
  }: IIndexLetterProps) => JSX.Element;
  renderCustomSectionHeader?: (section: SectionListData<IData>) => JSX.Element;
  renderItemCallback?: (data: any) => void;
  renderSearchCustomItem?: (item: IData) => JSX.Element;
  searchResultCallback?: (data: any) => void;

  keyboardType?: KeyboardType;
}

export type KeyboardType =
  | 'decimal-pad'
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'number-pad'
  | 'phone-pad';
