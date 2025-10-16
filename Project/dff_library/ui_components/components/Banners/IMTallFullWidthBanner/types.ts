import { TextStyle, ViewStyle } from "react-native";

export interface BannersProps {
    linearGradientColorEnd?: string;
    linearGradientColorStart?: string;

    containerStyleProps?: ViewStyle;

    componentToDisplay?:JSX.Element;

    onPress: () => void;
}