import { TextStyle, ViewStyle } from 'react-native';

export interface IMPaginationProps {
    countStyleProp?:ViewStyle;

    dotStyleProp?:TextStyle;

    pageCount:number;

    leftImg:JSX.Element;
    rightImg:JSX.Element;

    onPressItem: (prop: any) => void;
}