import { TextStyle, ViewStyle } from 'react-native';

interface LinearGradientProps {
    x: number;
    y: number;
  }
export interface IMIntroductoryDrawersProps {
    isBlurOnSubmit?:boolean;
    isContextMenuHidden?:boolean;
    isDisable?: boolean;
    isStatusBarTranslucent?:boolean;
    isVisible: boolean;
    
    maxLength?:number,

    cursorColor?:string,
    keyboardType?:any,
    linearGradientColor1?:string,
    linearGradientColor2?:string,
    poweredByText?:string,
    subTitle?:string,
    title?:string,

    backGroundImage1Style?:ViewStyle,
    backGroundImage2Style?:ViewStyle,
    centerIconStyle?:ViewStyle,
    closeIconStyle?:ViewStyle,
    leftBottomImageStyle?:ViewStyle,
    leftMiddleImageStyle?:ViewStyle,
    leftTopImageStyle?:ViewStyle,
    modalContentStyle?: ViewStyle;
    modalTouchableStyleProp?: ViewStyle;
    modelcontainerStyleProp?: ViewStyle;
    rightBottomImageStyle?:ViewStyle,
    rightButtonStyle?:ViewStyle;
    rightMiddleImageStyle?:ViewStyle,
    rightTopImageStyle?:ViewStyle,
    textInputContainerStyle?:ViewStyle;
    textInputStyles?:ViewStyle,
    upiStyle?:ViewStyle,

    poweredButtonTextStyle?:TextStyle,
    subTitleTextStyle?:TextStyle,
    titleTextStyle?:TextStyle,

    backgroundImage1?: JSX.Element;
    backgroundImage2?: JSX.Element;
    blurContainer?: JSX.Element;
    centerIcon?: JSX.Element;
    closeIcon?:JSX.Element;
    leftBottomIconImage?: JSX.Element;
    leftMiddleIconImage?: JSX.Element;
    leftTopIconImage?: JSX.Element;
    rightBottomIconImage?: JSX.Element;
    rightButtonComponent?:JSX.Element;
    rightMiddleIconImage?: JSX.Element;
    rightTopIconImage?: JSX.Element;
    upiIconImage?:JSX.Element,

    end?:LinearGradientProps;
    start?:LinearGradientProps;

    onPressBlurPart?: () => void;
    handleCloseIcon?:()=>void;
    handleonChangeText?: (prop:any) => void;
    handleRightButtonPress?:() => void;
    onSubmit?: () => void;

    
    
}
