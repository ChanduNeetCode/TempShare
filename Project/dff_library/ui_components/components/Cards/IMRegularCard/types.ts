import { ViewStyle } from 'react-native';

export enum regularInfo {
  'grey',
  'WhiteOutline',
  'white',
}
export interface IMRegularCardProps {
  regular: regularInfo.WhiteOutline | regularInfo.grey | regularInfo.white;

  cardBgColor?: string;

  cardHeight?: number; 

  regularCardStyleProps?: ViewStyle;
  
  children?: any;
}
