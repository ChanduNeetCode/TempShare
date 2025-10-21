import { ViewStyle } from "react-native";

export interface IMBarChartProps {
   height:number,
   totalValue:number,
   width:number,

   data:any,

   colorSet:string[],

   xValueContainerStyle?:ViewStyle
   svgContainer?:ViewStyle,
   
   value:string
}
