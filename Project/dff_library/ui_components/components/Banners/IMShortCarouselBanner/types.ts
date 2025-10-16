import { ViewStyle } from 'react-native';

export interface componentDisplayProps {
  isFlowerImageDisplayBottom: boolean;
  isFlowerImageDisplayTop: boolean;

  backGroundColor: string;
  description: string;

  id: number;

  component?:JSX.Element;
  iconDisplay?: JSX.Element;
}
export interface BannersProps {
  isShowsHorizontalScrollIndicator?: boolean;
  isDisable?:boolean;

  data: componentDisplayProps[];

  containerStyleProps?: ViewStyle;
  flatListContainerStyle?:ViewStyle;
  flowerImageStyle?: ViewStyle;
  shortBannerCarImageContainer?: ViewStyle;

  onPress?: (id: number) => void;
}
