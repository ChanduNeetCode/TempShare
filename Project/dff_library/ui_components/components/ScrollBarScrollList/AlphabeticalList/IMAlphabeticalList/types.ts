import {
  SectionListData,
  SectionListProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface IData {
  key: string;
  logo?: any;
  isResult?: boolean;
  value: string;
}

export interface ISectionData {
  data: IData[];
  index?: number;
  title: string;
}

export interface IIndexLetterProps {
  index: number;
  item: ISectionData;
  onPress: () => void;
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
  searchContainerStyle?: ViewStyle;
  searchRenderTouchContainerStyle?: ViewStyle;
  searchRenderTouchableActiveStyle?: ViewStyle;
  scrollingIndexLetterContainerStyle?: ViewStyle;

  getItemHeight?: (sectionIndex: number, rowIndex: number) => number;
  noSearchDataView?: () => JSX.Element;
  renderCustomSectionHeader?: (section: SectionListData<IData>) => JSX.Element;
  renderCustomListHeader?: () => JSX.Element;
  renderCustomIndexLetter?: ({
    item,
    index,
    onPress,
  }: IIndexLetterProps) => JSX.Element;
  renderItemCallback?: (data: any) => void;
  renderSearchCustomItem?: (item: IData) => JSX.Element;
  searchResultCallback?: (data: any) => void;

  keyboardType?: KeyboardType;
}

export type KeyboardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'number-pad'
  | 'decimal-pad';
