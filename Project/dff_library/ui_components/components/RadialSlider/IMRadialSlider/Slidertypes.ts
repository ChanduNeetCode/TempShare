import { ViewStyle } from "react-native";

interface SliderProps {
    amountSlider: boolean,
    amountSymbol?: string,
    monthSymbol?:string,
    data: any,
    noOfDivisions?: number;
    scrollToInputText?: number | string;
    sideStarStyle?:ViewStyle;
    refs?: any,
    sliderselectedData?: (data: string) => void,
}
export default SliderProps;