import { ViewStyle } from "react-native";

export interface IMLineChartProps {
    LineMarkData:any;

    endOpacity?:number,
    fillOpacityFrom?:number;
    fillOpacityTo?:number;
    height:number;
    strokeWidth:number;
    startOpacity?:number,
    width:number;

    selectedValue: (value: number) => void;

    chartContainerStyle?:ViewStyle;
    
    isLineAreaRequired:boolean;

    label:string,
    colorValue:string;

    horizontalValues:Array<string>;
}
