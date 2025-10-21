import type { TextInputProps, TextStyle } from 'react-native';
import type {SharedValue} from 'react-native-reanimated';

interface BaseProgressCircleProps extends CircleGradientProps {
  activeStrokeWidth?: number;
  inActiveStrokeOpacity?: number;
  inActiveStrokeWidth?: number;
  radius?: number;

  circleBackgroundColor?: string;
  inActiveStrokeColor?: string;

  dashedStrokeConfig?: DashedStrokeConfigType;

  strokeColorConfig?: StrokeColorConfigType[];
  strokeLinecap?: StrokeLineCapType;
}

interface BaseCircularProgressProps extends BaseProgressCircleProps {
  isClockwise?: boolean;
  isStartInPausedState?: boolean;

  delay?: number;
  duration?: number;
  initialValue?: number;
  maxValue?: number;
  rotation?: number;
  value: number;

  onAnimationComplete?: () => void;
}

interface CircularProgressProps extends BaseCircularProgressProps {
  isAllowFontScaling?: boolean;
  showProgressValue?: boolean;

  progressFormatter?: (v: number) => number | string;
}

type CircleGradientProps = {
  activeStrokeColor?: string;
  activeStrokeSecondaryColor?: string | null;
};

type DashedStrokeConfigType = {
  count: number;
  width: number;
};

type ProgressRef = {
  play: () => void;
  pause: () => void;
  reAnimate: () => void;
};

interface ProgressCircleProps extends BaseProgressCircleProps {
  animatedCircleProps: any;
}

type ProgressValueProps = {
  allowFontScaling?: boolean;

  initialValue: number;
  radius?: number;

  activeStrokeColor?: string;
  progressValueColor?: string;

  animatedTextProps: TextInputProps;
  progressValue: SharedValue<string>;
  progressValueStyle?: TextStyle;
};

type StrokeColorConfigType = {
  value: number;

  color: string;
};

type StrokeLineCapType = 'butt' | 'round' | 'square';

export type {
  CircularProgressProps,
  ProgressCircleProps,
  ProgressRef,
  ProgressValueProps,
  StrokeColorConfigType,
};
