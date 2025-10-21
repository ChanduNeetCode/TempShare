import { TextStyle, ViewStyle } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IMPieChartProps {
  data: PieChartData[];

  colorBoxStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  dataContainerStyle?: ViewStyle;
  legendItemStyle?: ViewStyle;
  legendLabelStyle?: TextStyle;
  legendRowStyle?: ViewStyle;
  legendValueStyle?: TextStyle;
  selectedItemStyle?: ViewStyle;

  isTouchable?: boolean;

  onPress?: (total: number, angles: number[], index: number) => void;

  numberOfLines?: number;
  blurOpacity?:number;
}

export interface PieChartData {
  label: string;
  value: number;
  colors: string;
}
