import { TextStyle, ViewStyle } from 'react-native';

export interface IMOverflowMenuProps {
  blurAmount: number;

  list: IList[];
  listData?: IData[];

  isDisable?: boolean,
  isleftSideImage?: boolean;
  isSeparator?: boolean;
  isWithContextualItems?: boolean;

  appVersion?: string;
  logoutText?: string;
  sessionTime?: string;
  subtitle?: string;
  title?: string;

  blurContainer?: JSX.Element;
  children?: JSX.Element;
  closeIcon?: JSX.Element;
  itemCloseImage?: JSX.Element;
  logoutImage?: JSX.Element;

  appVersionTextStyle?: TextStyle;
  iconTitleStyle?: TextStyle;
  itemTextStyle?: TextStyle;
  logoutDataStyle?: TextStyle;
  logoutTextStyle?: TextStyle;
  subTitleStyle?: TextStyle;
  titleStyle?: TextStyle;

  blurContainerStyle?: ViewStyle;
  closeStyle?: ViewStyle;
  contextualItemsViewStyle?: ViewStyle;
  flatListContainer?: ViewStyle;
  footerContainerStyle?: ViewStyle;
  iconContainerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  leftIconViewStyle?: ViewStyle;
  lineStyle?: ViewStyle;
  logoutImageStyle?: ViewStyle;
  logoutStyle?: ViewStyle;
  logoutStyleContainer?: ViewStyle;
  mainContainerStyle?: ViewStyle;
  modalParentStyle?: ViewStyle;
  textContainerStyle?: ViewStyle;

  logout: () => void;
  onPressItem: (prop: any) => void;
  onPressTtemCloseImage: () => void;
  showMenu?: () => void;
}

export interface IList {
  name: string;

  logo: JSX.Element;
}

export interface IData {
  icon?: JSX.Element;

  key: string;
  subTitle?: string;
  value: string;
}