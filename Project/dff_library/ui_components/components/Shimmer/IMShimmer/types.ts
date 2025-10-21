import { StyleProp, ViewStyle } from 'react-native';

export interface IMShimmerProps {
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element;
  enabled?: boolean;
}

export interface ShimmerProps {
  /**
   * Determines component's children.
   */
  children: JSX.Element;
  /**
   * Determines the color of placeholder.
   */
  backgroundColor?: string;
  /**
   * Determines the highlight color of placeholder. Only hex values supported (#fff, #fff0, #ffffff, #ffffff00).
   */
  highlightColor?: string;
  /**
   * Determines the animation direction, left or right
   */
  direction?: 'left' | 'right';
  /**
   * Determines if Skeleton should show placeholders or its children.
   */
  enabled?: boolean;
  /**
   * Determines the animation speed in milliseconds. Use 0 to disable animation
   */
  speed?: number;
  /**
   * Determines default border radius for placeholders from both Shimmer.Item and generated from children.
   */
  borderRadius?: number;

  angle?: number;
}
