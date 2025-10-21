import { TextStyle, ViewStyle } from 'react-native';

export interface IMOverflowDashBoardProps {
  blurAmount:number;

  list: IList[];

  isDisable?:boolean,
  isWithContextualItems?:boolean;

  appVersion?: string;
  buttonTitle?:String;
  logoutText?: string;
  profileId?:String;
  profileName?:String
  sessionTime?: string;
  subtitle?: string;
  title?: string;

  blurContainer?: JSX.Element;
  children?: JSX.Element;
  imageToDisplay?:JSX.Element;
  itemCloseImage?: JSX.Element;
  leftIcon?:JSX.Element;
  logoutImage?: JSX.Element;
  rightIcon?:JSX.Element;
  textContainer?:JSX.Element;

  appVersionTextStyle?: TextStyle;
  iconTitleStyle?: TextStyle;
  logoutDataStyle?: TextStyle;
  logoutTextStyle?:TextStyle;
  subTitleStyle?: TextStyle;
  titleStyle?: TextStyle;

  blurContainerStyle?: ViewStyle;
  closeStyle?: ViewStyle;
  flatListContainer?: ViewStyle;
  headerContainerStyle?:ViewStyle;
  headerLeftContainerStyle?:ViewStyle;
  iconContainerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  imageContainerStyle?:ViewStyle;
  lineStyle ?: ViewStyle;
  logoutImageStyle?: ViewStyle;
  logoutStyle?: ViewStyle;
  logoutStyleContainer ?: ViewStyle;
  modalParentStyle?: ViewStyle;
  textContainerStyle?: ViewStyle;

  logout: () => void;
  onPressItem: (prop: any) => void;
  onPressItemCloseImage: () => void;
  onPressSeeProfile?:()=>void;
  showMenu?: () => void;
}

export interface IList {
  name: string;

  logo: JSX.Element;
}