import type { StrokeColorConfigType } from '../types';

export type Config = {
  stroke?: string | number;
  strokeDashoffset: number;
};

export interface UseAnimatedValueProps {
  isClockwise?: boolean;
  isStartInPausedState?: boolean;

  activeStrokeWidth?: number;
  delay?: number;
  duration?: number;
  inActiveStrokeWidth?: number;
  initialValue?: number;
  maxValue?: number;
  radius?: number;
  value: number;

  progressFormatter?: (v: number) => number | string;

  strokeColorConfig?: StrokeColorConfigType[];

  onAnimationComplete?: () => void;
}

export interface UseCircleValuesProps {
  activeStrokeWidth: number;
  inActiveStrokeWidth: number;
  radius: number;
}
