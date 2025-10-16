import { ViewStyle, TextStyle } from 'react-native';
export interface ScrollPickerProps {
    highlightBorderWidth?:number;
    itemHeight: number; 
    pickerWidth?:number;
    selectedIndex: number; 
    wrapperHeight?: number; 
    
    dataSource: string[]; 
    highlightColor?: string;
    wrapperBackground?: string; 
    
    scrollViewComponent?: React.ComponentType<any>;

    activeItemTextStyle?: TextStyle; 
    itemTextStyle?: TextStyle; 

    pickerStyle?: ViewStyle; 

    onValueChange: (value: string, index: number) => void; 
    ref?: any;
}