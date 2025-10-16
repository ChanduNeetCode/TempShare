import { ImageSourcePropType } from "react-native";

export interface SwipeButtonProps {
  disabled?: boolean,
  disableResetOnTap?: boolean,
  enableReverseSwipe?: boolean,
  isBackgroundImage?: boolean,
  shouldResetAfterSuccess?: boolean,

  height: number,
  resetAfterSuccessAnimDelay?: number,
  swipeSuccessThreshold?: number, 
  thumbIconWidth?: number|undefined,
  titleFontSize?: number,
  titleMaxFontScale?: number,
  width: number,

  disabledRailBackgroundColor?: string,
  disabledThumbIconBackgroundColor?: string,
  disabledThumbIconBorderColor?: string,
  railBackgroundColor?: string,
  railBorderColor?: string,
  railFillBackgroundColor?: string
  railFillBorderColor?: string,
  thumbIconBackgroundColor?: string,
  thumbIconBorderColor?: string,
  title?: string,
  titleColor?: string,

  backgroundImage?: JSX.Element,

  onSwipeFail?: Function,
  onSwipeStart?: Function,
  onSwipeSuccess?: Function,

  containerStyles?: object,
  railStyles?: object,
  thumbIconStyles?: object,
  titleStyles?: object,
  
  forceReset?: any,
  thumbIconComponent?: any,
  
  thumbIconImageSource?:ImageSourcePropType,
}