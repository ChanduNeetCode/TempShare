import { TextStyle, ViewStyle } from 'react-native';

export interface DataTableProps {
  isShowHorizontalScrollIndicator?:boolean;
  data: IList[];
  dataTableType: string;

  height?: number;
  numberOfColumns: number;
  width?: number;
  widthForData?: number;

  cellContainerStyleProps?: ViewStyle;
  containerStyleProps?: ViewStyle;
  dataContainerStyleProps?: ViewStyle;
  titleContainerStyleProps?: ViewStyle;
  titleContainerStylePropsFirstIndex?:ViewStyle;
  titleContainerStylePropsVertical?:ViewStyle;

  bodyTextStyleProps?: TextStyle;
  titleTextStyleProps?: TextStyle;
}

export interface IList {
  index?: number;
  header?: string;
  values?: any;
}
