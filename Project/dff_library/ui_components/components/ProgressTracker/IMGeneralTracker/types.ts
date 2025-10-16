import { TextStyle, ViewStyle } from "react-native";

export interface IMGeneralTrackerProps {
    isauto?:boolean;
    isdarkMode?:boolean;
    isButton?:boolean;

    autoTimeOut?:number;
    totalSteps?:number;

    barStyles?:ViewStyle;
    mainContainerStyles?:ViewStyle;
    ParentButtonStyle?:ViewStyle;

    buttonComponent?:JSX.Element;
    childProp?: JSX.Element;

    stepStyle?:TextStyle;

    onPressHandle?: (item:any)=>void;
}