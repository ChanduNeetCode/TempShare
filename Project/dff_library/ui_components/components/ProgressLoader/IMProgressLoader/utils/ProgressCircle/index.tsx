import React, { useMemo } from 'react';
import Svg, { G, Circle } from 'react-native-svg';
import Animated from 'react-native-reanimated';

import { actuatedNormalizeWidth } from '../../../../../utils/utility';
import colors from '../../../../../atoms/colors';
import type { ProgressCircleProps } from '../types';
import styles from './styles';
import {STRINGS} from '../constants'
import useCircleValues from '../../utils/hooks/useCircleValues';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  activeStrokeColor = colors.Success100,
  circleBackgroundColor = colors.TransperantColor,
  inActiveStrokeColor = colors.PastelAmber100,


  activeStrokeWidth =  actuatedNormalizeWidth(10),
  inActiveStrokeOpacity = 1,
  inActiveStrokeWidth = actuatedNormalizeWidth(10),
  radius = actuatedNormalizeWidth(60),

  strokeLinecap = 'round',

  activeStrokeSecondaryColor = null,

  dashedStrokeConfig,

  animatedCircleProps,

}: ProgressCircleProps) => {

  const viewBox = useMemo(
    () => radius + Math.max(activeStrokeWidth, inActiveStrokeWidth),
    [radius, activeStrokeWidth, inActiveStrokeWidth],
  );

  const { inactiveCircleRadius, activeCircleRadius, circleCircumference } =
    useCircleValues({
      activeStrokeWidth,
      inActiveStrokeWidth,
      radius,
    });

  const maskId = useMemo(
    () =>
      dashedStrokeConfig &&
      dashedStrokeConfig?.count > 0 &&
      dashedStrokeConfig?.width > 0
        ? 'url(#dashed-circle)'
        : undefined,
    [dashedStrokeConfig],
  );

  const strokeColor = useMemo(
    () => (activeStrokeSecondaryColor ? 'url(#grad)' : activeStrokeColor),
    [activeStrokeSecondaryColor, activeStrokeColor],
  );

  return (
    <Svg
      testID={STRINGS.str_text_id_circle}
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${viewBox * 2} ${viewBox * 2}`}
      style={styles.svg}>
      <G mask={maskId}>
        <Circle
          cx="50%"
          cy="50%"
          fill={circleBackgroundColor}
          r={inactiveCircleRadius}
          stroke={inActiveStrokeColor}
          strokeOpacity={inActiveStrokeOpacity}
          strokeWidth={inActiveStrokeWidth}
        />
        <AnimatedCircle
          animatedProps={animatedCircleProps}
          cx="50%"
          cy="50%"
          fill={colors.TransperantColor}
          r={activeCircleRadius}
          stroke={strokeColor}
          strokeDasharray={circleCircumference}
          strokeLinecap={strokeLinecap}
          strokeWidth={activeStrokeWidth}
        />
      </G>
    </Svg>
  );
};

export default ProgressCircle;
