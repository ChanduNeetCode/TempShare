import { ViewStyle } from 'react-native';

export interface BasicMicroInteractionsProps {
  style: ViewStyle;

  isAutoPlay: boolean;
  isLoop: boolean;

  type: string;

  colorFilters?: any;
  source?: any;

  count?: number;
}
