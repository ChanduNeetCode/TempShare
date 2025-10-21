import React, { useMemo, useRef } from 'react';
import { TextInput } from 'react-native';
import Animated from 'react-native-reanimated';

import { actuatedNormalizeWidth } from '../../../../../utils/utility';
import colors from '../../../../../atoms/colors';
import type { ProgressValueProps } from '../types';
import styles from './styles';
import { STRINGS } from '../constants';

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const ProgressValue: React.FC<ProgressValueProps> = ({
  allowFontScaling = true,

  initialValue = 0,
  radius = actuatedNormalizeWidth(60),

  activeStrokeColor = colors.Black,
  progressValueColor,

  progressValueStyle = {},

  animatedTextProps,
}: ProgressValueProps) => {
  const inputRef = useRef<any>(null);

  const styleProps = useMemo(
    () => ({
      activeStrokeColor,
      progressValueColor,
      progressValueStyle,
      radius,
    }),
    [
      activeStrokeColor,
      progressValueColor,
      progressValueStyle,
      radius,
    ],
  );

  return (
    <AnimatedInput
      allowFontScaling={allowFontScaling}
      animatedProps={animatedTextProps}
      defaultValue={`${initialValue}`}
      editable={false}
      ref={inputRef}
      testID={STRINGS.str_text_id}
      underlineColorAndroid={colors.TransperantColor}
      style={[
        styles(styleProps).input,
        progressValueStyle,
        styles(styleProps).fromProps,
      ]}
    />
  );
};

export default ProgressValue;
