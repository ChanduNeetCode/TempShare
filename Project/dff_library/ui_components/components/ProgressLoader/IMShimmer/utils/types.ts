import {  ViewStyle } from 'react-native';

export interface ShimmerProps {
  isEnabled: boolean;

  angle?: number;
  borderRadius?: number;
  speed?: number;

  backgroundColor?: string;
  highlightColor?: string;

  children: JSX.Element;

  style?: ViewStyle;

  direction?: 'left' | 'right';
}

export type ShimmerItemProps = ViewStyle & {
    children: JSX.Element;
    
    style: ViewStyle;
  };