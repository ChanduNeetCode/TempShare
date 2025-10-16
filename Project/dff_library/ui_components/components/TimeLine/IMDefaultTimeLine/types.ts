import { TextStyle, ViewStyle } from "react-native";

export default interface IMDefaultTimeLineProps {
    badgeContainer?: JSX.Element;
    data: IMList[];
    dashLength?: number;
    dashThickness?: number;
    dashGap?: number;

    badgesBackgroundClr?: string;
    badgesTextClr?: string;
    dashColor?: string;

    amountContainerStyle?: ViewStyle;
    amountViewStyle?: ViewStyle;
    badgeContainerStyle?: ViewStyle;
    badgeViewStyle?: ViewStyle;
    cardChildrenStyle?: ViewStyle;
    cardsContainerStyle?: ViewStyle;
    cardStyle?: ViewStyle;
    iconStyle?: ViewStyle;
    leftBorderStyle?: ViewStyle;
    mainCardStyle?: ViewStyle;
    rightIconStyle?: ViewStyle;
    titleContainerStyle?: ViewStyle;

    amountSubtitleStyle?: TextStyle;
    amountTextStyle?: TextStyle;
    badgesTextStyle?: TextStyle;
    subtitleStyle?: TextStyle;
    titleStyle?: TextStyle;
}

export interface IMList {
    id: number,
    title?: string,
    icon?: JSX.Element,
    subtitle?: string,
    status?: string,
    amount?: string,
    update?: string,
    badgeTitle?: string
}