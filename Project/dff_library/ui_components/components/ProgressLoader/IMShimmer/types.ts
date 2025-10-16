import {  ViewStyle } from 'react-native';

export interface IMShimmerProps {
  isEnabled: boolean;

  borderRadius?: number;
  speed?: number;

  backgroundColor?: string;
  highlightColor?: string;

  children: JSX.Element;

  style?: ViewStyle;

  direction?: 'left' | 'right';
}

