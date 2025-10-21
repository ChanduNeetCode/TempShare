import { TextStyle, ViewStyle } from 'react-native';

export interface IMDisclaimerInformationProps {
    height?: number;
    width?: number;

    DisclaimerType: string;
    title?: string;

    defaultTextStyleProps?: TextStyle;
    neutralTextStyleProps?: TextStyle;
    preCondSingleTextStyleProps?: TextStyle;
    positiveInlineTextStyleProps?: TextStyle;
    positiveLargeTextStyleProps?: TextStyle;
    tipsLargeTextStyleProps?: TextStyle;
    warningTextStyleProps?: TextStyle;
    titleStyleProps?: TextStyle;

    defaultContainerStyleProps?: ViewStyle;
    defaultOrangeContainerStyleProps?: ViewStyle;
    LeftImageStyle?:ViewStyle;
    neutralContainerStyleProps?: ViewStyle;
    preConfirmationSingleContainerProps?: ViewStyle;
    positiveInlineContainerStyleProps?: ViewStyle;
    positiveLargeContainerStyleProps?: ViewStyle;
    TextStyle?:ViewStyle;
    tipsLargeContainerStyleProps?: ViewStyle;
    warningContainerStyleProps?: ViewStyle;

    imageToDisplay?: JSX.Element;
    multiImage?: JSX.Element;

    message: any;
}