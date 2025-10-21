import { ImageSourcePropType } from "react-native";

export interface SwipeThumbProps{
    disabled: boolean,
    disableResetOnTap: boolean,
    enableReverseSwipe?: boolean,
    screenReaderEnabled: boolean,
    shouldResetAfterSuccess: boolean,

    layoutWidth: number,
    resetAfterSuccessAnimDelay:number,
    swipeSuccessThreshold:number,
    thumbIconHeight:number,
    thumbIconWidth?: number,

    disabledThumbIconBackgroundColor: string,
    disabledThumbIconBorderColor: string,
    railFillBackgroundColor: string,
    railFillBorderColor:string, 
    thumbIconBackgroundColor: string,
    thumbIconBorderColor: string,
    title?: string, 

    forceReset: ()=>void,
    onSwipeFail:()=>void,
    onSwipeStart:()=>void,
    onSwipeSuccess: ()=>void,

    railStyles: object,
    thumbIconStyles: object,

    thumbIconComponent: any,
    
    thumbIconImageSource?: ImageSourcePropType,
}