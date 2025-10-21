import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedProps,
  runOnJS,
} from 'react-native-reanimated';

import colors from '../../../atoms/colors';
import { NUMBERS } from '../utils/constants';
import styles from '../utils/styles';
import { IMContinuousSliderProps } from '../IMContinuousSlider/types';

const ATextInput = Animated.createAnimatedComponent(TextInput);

const IMContinuousSlider: React.FC<IMContinuousSliderProps> = props => {
  const {
    initialValueOfSlider = 0,
    maxValue,
    minValue,
    numberOfDots,
    steps,
    widthSlider,

    bgColorOfTrack = colors.NeutralGrey60,
    leftSideLabel,
    rightSideLabel,
    title,

    labelStyle,
    titleStyle,

    leftSideLabelStyle,
    rightSideLabelStyle,

    leftSideRangeLabel,
    rightSideRangeLabel,

    circleAnimationStyle,
    circleStyle,
    labelStylesProp,
    styleBGTrack,

    onSlider,
  } = props;

  const WIDTH = widthSlider;
  const MAX_WIDTH = WIDTH - NUMBERS.CIRCLE_SIZE / 2;
  const initialValue = Math.round(
    MAX_WIDTH / (maxValue / initialValueOfSlider),
  );

  const x = useSharedValue(0);
  const x2 = useSharedValue(initialValue);
  const sc2 = useSharedValue(3);
  const color = useSharedValue(colors.NeutralGrey130);
  const isCircleActive = useSharedValue(false);

  const gestureHandler2 = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      isCircleActive.value = false;
      ctx.startX = x2.value;
      color.value = colors.PrimaryOrange100;
    },
    onActive: (event, ctx) => {
      x2.value =
        ctx.startX + event.translationX < x.value
          ? x.value
          : ctx.startX + event.translationX > MAX_WIDTH
          ? MAX_WIDTH
          : ctx.startX + event.translationX;
      sc2.value = 7;
      color.value = colors.PrimaryOrange100;
      isCircleActive.value = true;
    },
    onEnd: () => {
      isCircleActive.value = false;
      sc2.value = 3;
      if (x.value == 0 && x2.value == 0) {
        color.value = colors.NeutralGrey130;
      }
    },
  });

  const styleLine = useAnimatedStyle(() => {
    return {
      backgroundColor: styles.lineStyles.backgroundColor,
      borderRadius: styles.lineStyles.borderRadius,
      height: styles.lineStyles.height,
      marginTop: styles.lineStyles.marginTop,
      transform: [{ translateX: x.value }],
      width: x2.value - x.value,
    };
  });

  const circleStyle2 = useAnimatedStyle(() => {
    return {
      borderColor: color.value,
      borderRadius:
        (isCircleActive.value ? NUMBERS.CIRCLE_SIZE + 8 : NUMBERS.CIRCLE_SIZE) /
        2,
      borderWidth: sc2.value,
      height: isCircleActive.value
        ? NUMBERS.CIRCLE_SIZE + 8
        : NUMBERS.CIRCLE_SIZE,
      marginLeft: isCircleActive.value ? -4 : -8,
      marginTop: isCircleActive.value
        ? -NUMBERS.CIRCLE_SIZE + 4
        : -NUMBERS.CIRCLE_SIZE + 8,
      transform: [
        {
          translateX: x2.value,
        },
      ],
      width: isCircleActive.value
        ? NUMBERS.CIRCLE_SIZE + 8
        : NUMBERS.CIRCLE_SIZE,
    };
  });

  const animatedLabel2 = useAnimatedProps(() => {
    const val =
      Math.floor(
        (minValue + (x2.value / MAX_WIDTH) * (maxValue - minValue)) / steps,
      ) * steps;
    runOnJS(onSlider)(val);
    return {
      text: `${val}`,
    } as any;
  });

  return (
    <View>
      {title ? <Text style={titleStyle}>{`${title}`}</Text> : null}
      <View style={styles.parentViewStyle}>
        {leftSideRangeLabel ? (
          <ATextInput
            defaultValue={minValue + ''}
            editable={false}
            style={[labelStyle]}
            animatedProps={animatedLabel2}
          />
        ) : null}
        <View style={styles.middlePArentViewStyle}>
          <View>
            <View
              style={[
                styleBGTrack,
                { backgroundColor: bgColorOfTrack, width: WIDTH },
              ]}>
              {[...Array(numberOfDots)].map((s, index) => {
                if (index == 0 || index == numberOfDots - 1) {
                  return (
                    <View
                      key={s}
                      style={[
                        styles.dotStyle,
                        { backgroundColor: bgColorOfTrack },
                      ]}
                    />
                  );
                } else {
                  return (
                    <View
                      key={s}
                      style={[
                        styles.dotStyle,
                        { backgroundColor: colors.NeutralGrey100 },
                      ]}
                    />
                  );
                }
              })}
            </View>
            <Animated.View style={styleLine} />

            <View>
              <PanGestureHandler onGestureEvent={gestureHandler2}>
                <Animated.View
                  style={
                    circleStyle
                      ? [circleStyle, circleAnimationStyle]
                      : [styles.circle, circleStyle2]
                  }
                />
              </PanGestureHandler>
            </View>
          </View>
        </View>
        {rightSideRangeLabel ? (
          <Text style={labelStyle}>{`${maxValue}`}</Text>
        ) : null}
      </View>
      <View style={[styles.labelStyles, labelStylesProp]}>
        <Text style={[styles.leftSideLabelStyle, leftSideLabelStyle]}>
          {leftSideLabel}
        </Text>
        <Text style={[styles.rightSideLabelStyle, rightSideLabelStyle]}>
          {rightSideLabel}
        </Text>
      </View>
    </View>
  );
};
export default IMContinuousSlider;
