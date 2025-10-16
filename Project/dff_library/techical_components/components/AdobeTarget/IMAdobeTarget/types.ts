import { TextStyle, ViewStyle } from 'react-native';

export interface IMAdobeTargetProp {
  // Experience-A types---------------

  onPressBannerA?: (id: number) => void;

  mainViewContainerA?: ViewStyle;
  bannerViewStyleA?: ViewStyle;
  bannerStylePropA?: ViewStyle;

  cardHeight?: number;
  numberOfProgressBar?: number;
  progressBarHeight?: number;
  progressBarWidth?: number;

  imagesToDisplay?: any;

  titleStylePropA?: TextStyle;

  titltTextA?: string;

  // Experience-B types---------------
  onPressBannerB?: () => void;

  bannerViewContainerB?: ViewStyle;
  mainViewContainerB?: ViewStyle;

  descriptionTextStyleB?: TextStyle;

  descriptionText?: string;
  imageUrlPropB?: string;

  isAboveText?: boolean;

  // Experience-C types---------------
  onPressBannerC?: () => void;

  mainViewContainerC?: ViewStyle;
  bannerStyleC?: ViewStyle;
  buttonStyleC?: ViewStyle;
  descriptionStyleC?: ViewStyle;

  buttonTextStyleC?: TextStyle;
  descriptionTextStyleC?: TextStyle;
  headingTextStyleC?: TextStyle;
  titleTextStyleC?: TextStyle;

  buttonTextC?: string;
  descriptionTextC?: string;
  titleTextC?: string;
  headingTextC?: string;

  cardHeightC?: number;
}
