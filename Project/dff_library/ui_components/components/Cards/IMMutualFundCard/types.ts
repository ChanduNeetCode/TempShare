import { TextStyle, ViewStyle } from "react-native";

export interface IMMutualFundCardProps {
    isleftIcon?:boolean,
    isRightIcon?:boolean,

    cardWidth?:number;
    noOfDigitsDisplay?:number,

    backgroundClr?:string,
    subTitle?:string,
    title?:string,
    
    subTitleStyle?:TextStyle,
    titleStyle?:TextStyle,
    
    cardContainerStyle?:ViewStyle,
    dotsStyle?:ViewStyle,
    leftIconStyle?:ViewStyle,
    rightIconStyle?:ViewStyle,
    textContainerStyle?:ViewStyle,

    leftIcon?:JSX.Element,
    rightIcon?:JSX.Element,
};
  