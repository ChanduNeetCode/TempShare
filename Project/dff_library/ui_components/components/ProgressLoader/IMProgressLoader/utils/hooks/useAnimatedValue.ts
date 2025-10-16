import { useCallback, useEffect, useMemo } from 'react';
import {
  createAnimatedPropAdapter,
  Easing,
  interpolateColor,
  processColor,
  runOnJS,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { actuatedNormalizeWidth } from '../../../../../utils/utility';
import { STRINGS } from '../constants';
import { UseAnimatedValueProps, Config } from './types';
import useCircleValues from './useCircleValues';

export default function useAnimatedValue({
  isClockwise,
  isStartInPausedState,

  activeStrokeWidth = actuatedNormalizeWidth(10),
  delay = 0,
  duration,
  inActiveStrokeWidth = actuatedNormalizeWidth(10),
  initialValue = 0,
  maxValue = 100,
  radius = actuatedNormalizeWidth(60),
  value,

  
  progressFormatter = (v: number) => {
    STRINGS.str_worklet;
    return Math.round(v);
  },
  
  strokeColorConfig = undefined,

  onAnimationComplete = () => null,

}: UseAnimatedValueProps) {

  const paused = useSharedValue(<boolean>isStartInPausedState);
  const animatedValue = useSharedValue(initialValue);
  const { circleCircumference } = useCircleValues({
    radius,
    activeStrokeWidth,
    inActiveStrokeWidth,
  });

  const pause = useCallback(() => {
    paused.value = true;
  }, [paused]);

  const play = useCallback(() => {
    paused.value = false;
  }, [paused]);

  const resetAnimatedValue = useCallback(() => {
    paused.value = false;
    animatedValue.value = initialValue;
  }, [animatedValue, initialValue, paused]);

  const animateValue = useCallback(() => {
    animatedValue.value = withDelay(
      delay,
      withTiming(value, { duration, easing: Easing.linear }, isFinished => {
        if (isFinished) {
          runOnJS(onAnimationComplete)?.();
        }
      }),
    );
  }, [animatedValue, delay, duration, paused, value]);

  const reAnimate = () => {
    resetAnimatedValue();
    animateValue();
  };

  const sortedStrokeColors = useMemo(() => {
    if (!strokeColorConfig) {
      return null;
    }
    return strokeColorConfig.sort((a, b) => a.value - b.value);
  }, [strokeColorConfig]);

  const colors = useMemo(() => {
    if (!sortedStrokeColors) {
      return null;
    }
    return sortedStrokeColors.map(item => item.color);
  }, [sortedStrokeColors]);

  const values = useMemo(() => {
    if (!sortedStrokeColors) {
      return null;
    }
    return sortedStrokeColors.map(item => item.value);
  }, [sortedStrokeColors]);

  const animatedCircleProps = useAnimatedProps(
    () => {
      let biggestValue: number = Math.max(initialValue, maxValue);
      biggestValue = biggestValue <= 0 ? 1 : biggestValue;
      const maxPercentage: number = isClockwise
        ? (100 * animatedValue.value) / biggestValue
        : (100 * -animatedValue.value) / biggestValue;
      const config: Config = {
        strokeDashoffset:
          circleCircumference - (circleCircumference * maxPercentage) / 100,
      };
      const strokeColor =
        colors && values
          ? interpolateColor(animatedValue.value, values, colors)
          : undefined;
      if (strokeColor) {
        config.stroke = strokeColor;
      }
      return config;
    },
    [],
    createAnimatedPropAdapter(
      props => {
        if (Object.keys(props).includes(STRINGS.str_stroke)) {
          props.stroke = {
            type: 0,
            payload: processColor(Number(props.stroke)),
          };
        }
      },
      [STRINGS.str_stroke],
    ),
  );

  useEffect(() => {
    animateValue();
  }, [animateValue]);

  const progressValue = useDerivedValue(() => {
    return `${progressFormatter(animatedValue.value)}`;
  });

  const animatedTextProps = useAnimatedProps(() => {
    return {
      text: progressValue.value,
    } as any;
  });

  return {
    animatedCircleProps,
    animatedTextProps,
    pause,
    play,
    progressValue,
    reAnimate,
  };
}
