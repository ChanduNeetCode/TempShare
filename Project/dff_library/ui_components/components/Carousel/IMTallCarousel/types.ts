import { ViewStyle } from 'react-native';

export interface componentDisplayProps1 {
  flowerImageDisplayTop?: boolean;
  flowerImageDisplayBottom?: boolean;

  id: number;

  backGroundColor: string;

  component: JSX.Element;
}

export interface CarouselProps {
  isAutoPlay?: boolean;
  isDotsRequired?: boolean;
  isLoop?: boolean;

  autoPlayIntervalDuration?: number;
  defaultIndex?:number;
  inactiveSlideOpacity?: number;
  inactiveSlideScale?:number;
  spaceBetweenCards?:number;
  activeSlideAlignmentProp?:string;
  data: componentDisplayProps1[];

  activeDotStyle?: ViewStyle;
  containerStyleProps?: ViewStyle;
  dotsViewStyle?: ViewStyle;
  inactiveDotStyle?: ViewStyle;
  mainContainerStyle?:ViewStyle;

  onPress: (val: componentDisplayProps1) => void;
  onSnapToItem?: (index:React.SetStateAction<number>)=>void;
}
