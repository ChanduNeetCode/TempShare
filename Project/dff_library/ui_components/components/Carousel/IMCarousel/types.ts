import { ViewStyle } from 'react-native';

export interface componentDisplayProps {
  flowerImageDisplayTop?: boolean;
  flowerImageDisplayBottom?: boolean;

  id?: number;

  backGroundColor?: string;
  
  component?: JSX.Element;
}

export interface CarouselProps {
  isAutoPlay?: boolean;
  isDotsRequired?: boolean;
  isLoop?: boolean;

  autoPlayIntervalDuration?: number;
  defaultIndex?:number;
  inactiveSlideOpacity?:number;
  inactiveSlideScale?:number,
  spaceBetweenCards?:number;

  activeSlideAlignmentProp?:string;
  
  data: componentDisplayProps[];
  
  activeDotStyle?: ViewStyle;
  containerStyleProps?: ViewStyle;
  dotsViewStyle?: ViewStyle;
  inactiveDotStyle?: ViewStyle;
  imageViewStyle?: ViewStyle;
  mainContainerStyle?:ViewStyle;

  onPress: (id: componentDisplayProps) => void;
  onSnapToItem?: (index:React.SetStateAction<number>)=>void;
}
