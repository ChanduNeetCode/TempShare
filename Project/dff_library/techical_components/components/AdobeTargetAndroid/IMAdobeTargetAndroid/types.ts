import { TextStyle, ViewStyle } from 'react-native';

export interface IMAdobeTargetAndroidtProp {
  imagesToDisplay?: any;

  isAboveText?: boolean;

  cardHeight?: number;
  cardHeightC?: number;
  numberOfProgressBar?: number;
  progressBarHeight?: number;
  progressBarWidth?: number;

  buttonTextC?: string;
  descriptionText?: string;
  descriptionTextC?: string;
  headingTextC?: string;
  imageUrlPropB?: string;
  titltTextA?: string;
  titleTextC?: string;

  buttonTextStyleC?: TextStyle;
  descriptionTextStyleB?: TextStyle;
  descriptionTextStyleC?: TextStyle;
  headingTextStyleC?: TextStyle;
  titleStylePropA?: TextStyle;
  titleTextStyleC?: TextStyle;

  bannerStyleC?: ViewStyle;
  bannerStylePropA?: ViewStyle;
  bannerViewContainerB?: ViewStyle;
  bannerViewStyleA?: ViewStyle;
  buttonStyleC?: ViewStyle;
  descriptionStyleC?: ViewStyle;
  mainViewContainerA?: ViewStyle;
  mainViewContainerB?: ViewStyle;
  mainViewContainerC?: ViewStyle;

  onPressBannerA?: (id: number) => void;
  onPressBannerB?: () => void;
  onPressBannerC?: () => void;
}
