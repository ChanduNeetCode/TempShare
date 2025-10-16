export interface ViewProps {
  isClockwise?: boolean;

  activeStrokeWidth?: number;
  duration?: number;
  inActiveStrokeWidth?: number;
  radius?: number;

  activeStrokeColor?: string;
  finishStrokeColor?: string;
  inActiveStrokeColor?: string;

  onAnimationComplete: () => void;
}

