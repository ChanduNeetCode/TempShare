import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import { View } from 'react-native';

import { actuatedNormalizeWidth } from '../../../../../utils/utility';
import colors from '../../../../../atoms/colors'
import {CircularProgressProps} from '../types'
import { ICBankLogo } from '../../../../../atoms/icons';
import type { ProgressRef } from '../types';
import ProgressCircle from '../ProgressCircle';
import styles from './styles';
import { STRINGS } from '../constants';
import useAnimatedValue from '../hooks/useAnimatedValue';

const CircularProgress = forwardRef<ProgressRef, CircularProgressProps>(
  (props, ref) => {
    const {
      isClockwise = true,
      isStartInPausedState,
      showProgressValue = true,

      activeStrokeColor = 'green',
      circleBackgroundColor = colors.TransperantColor,

      activeStrokeWidth = actuatedNormalizeWidth(10),
      delay = 0,
      duration = 500,
      inActiveStrokeOpacity = 1,
      inActiveStrokeWidth = actuatedNormalizeWidth(10),
      initialValue = 0,
      maxValue = 100,

      radius = actuatedNormalizeWidth(60),
      rotation = 0,

      value,
      
      inActiveStrokeColor = colors.PastelAmber100,
      
      dashedStrokeConfig = { count: 0, width: 0 },

      activeStrokeSecondaryColor = null,
      strokeColorConfig = undefined,

      strokeLinecap = 'round',

      progressFormatter = (v: number) => {
        'worklet';
        return Math.round(v);
      },

      onAnimationComplete = () => null,
    } = props;

    const { animatedCircleProps, play, pause, reAnimate } = useAnimatedValue({
      activeStrokeWidth,
      delay,
      duration,
      inActiveStrokeWidth,
      initialValue,
      isClockwise,
      isStartInPausedState,
      maxValue,
      onAnimationComplete,
      progressFormatter,
      radius,
      strokeColorConfig,
      value,
    });

    useImperativeHandle(ref, () => ({
      pause,
      play,
      reAnimate,
    }));

    const styleProps = useMemo(
      () => ({
        activeStrokeColor,
        radius,
        rotation,
        showProgressValue,

      }),
      [
        activeStrokeColor,
        radius,
        rotation,
        showProgressValue,
      ],
    );

    return (
      <View style={styles(styleProps).container} testID={STRINGS.str_test_id_bar}>
        <View style={styles(styleProps).rotatingContainer}>
          <View
            style={styles(styleProps).loaderContainer}>
           <ICBankLogo
              style={styles(styleProps).logoContainer}
            />
            <ProgressCircle
              activeStrokeColor={activeStrokeColor}
              activeStrokeSecondaryColor={activeStrokeSecondaryColor}
              activeStrokeWidth={activeStrokeWidth}
              animatedCircleProps={animatedCircleProps}
              circleBackgroundColor={circleBackgroundColor}
              dashedStrokeConfig={dashedStrokeConfig}
              inActiveStrokeColor={inActiveStrokeColor}
              inActiveStrokeOpacity={inActiveStrokeOpacity}
              inActiveStrokeWidth={inActiveStrokeWidth}
              radius={radius}
              strokeLinecap={strokeLinecap}
            />
          </View>
        </View>
      </View>
    );
  },
);
CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
