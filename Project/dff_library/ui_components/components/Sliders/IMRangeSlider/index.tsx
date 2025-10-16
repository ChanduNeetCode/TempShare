import React, { FC } from 'react';
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
import { RangeSliderProps } from './types';

const ATextInput = Animated.createAnimatedComponent(TextInput);

const IMRangeSlider: FC<RangeSliderProps> = props => {
  const {
    maxValue,
    minValue,
    numberOfDots,
    steps,
    widthSlider,

    bgColorOfTrack = colors.NeutralGrey60,
    title,

    labelStyle,
    titleStyle,

    leftSideRangeLabel,
    rightSideRangeLabel,

    FirstCircleAnimationStyle,
    FirstCircleStyle,
    SecondCircleAnimationStyle,
    SecondCircleStyle,
    styleBGTrack,

    onMaxSlider,
    onMinSlider,
  } = props;

  const x = useSharedValue(0);
  const x2 = useSharedValue(0);
  const sc = useSharedValue(3);
  const sc2 = useSharedValue(3);
  const color = useSharedValue(colors.NeutralGrey130);
  const isFirstCircleActive = useSharedValue(false);
  const isSecondCircleActive = useSharedValue(false);

  const WIDTH = widthSlider;
  const MAX_WIDTH = WIDTH - NUMBERS.CIRCLE_SIZE / 2;

  const gestureHandler1 = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      isFirstCircleActive.value = false;
      ctx.startX = x.value;
    },
    onActive: (event, ctx: any) => {
      if (x.value + 30 !== x2.value) {
        x.value =
          ctx.startX + event.translationX < 0
            ? 0
            : ctx.startX + event.translationX > x2.value
            ? x2.value
            : ctx.startX + event.translationX;
      }
      sc.value = 7;
      color.value = colors.PrimaryOrange100;
      isFirstCircleActive.value = true;
    },
    onEnd: (event, ctx) => {
      isFirstCircleActive.value = false;
      sc.value = 3;
      if (x.value == 0 && x2.value == 0) {
        color.value = colors.NeutralGrey130;
      }

      if (x.value + 30 >= x2.value) {
        x.value = ctx.startX + event.translationX < 0 ? 0 : x.value - 30;
      }
    },
  });

  const gestureHandler2 = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      isSecondCircleActive.value = false;
      ctx.startX = x2.value;
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
      isSecondCircleActive.value = true;
    },
    onEnd: () => {
      isSecondCircleActive.value = false;
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

  const circleStyle1 = useAnimatedStyle(() => {
    return {
      borderColor: color.value,
      borderRadius:
        (isFirstCircleActive.value
          ? NUMBERS.CIRCLE_SIZE + 8
          : NUMBERS.CIRCLE_SIZE) / 2,
      borderWidth: sc.value,
      height: isFirstCircleActive.value
        ? NUMBERS.CIRCLE_SIZE + 8
        : NUMBERS.CIRCLE_SIZE,
      marginLeft: isFirstCircleActive.value ? -4 : -8,
      marginTop: isFirstCircleActive.value
        ? -NUMBERS.CIRCLE_SIZE + 4
        : -NUMBERS.CIRCLE_SIZE + 8,
      position: 'absolute',
      transform: [
        {
          translateX: x.value,
        },
      ],
      width: isFirstCircleActive.value
        ? NUMBERS.CIRCLE_SIZE + 8
        : NUMBERS.CIRCLE_SIZE,
    };
  });
  const circleStyle2 = useAnimatedStyle(() => {
    return {
      borderColor: color.value,
      borderRadius:
        (isSecondCircleActive.value
          ? NUMBERS.CIRCLE_SIZE + 8
          : NUMBERS.CIRCLE_SIZE) / 2,
      borderWidth: sc2.value,
      height: isSecondCircleActive.value
        ? NUMBERS.CIRCLE_SIZE + 8
        : NUMBERS.CIRCLE_SIZE,
      marginLeft: isSecondCircleActive.value ? -4 : -8,
      marginTop: isSecondCircleActive.value
        ? -NUMBERS.CIRCLE_SIZE + 4
        : -NUMBERS.CIRCLE_SIZE + 8,
      position: 'absolute',
      transform: [
        {
          translateX: x2.value,
        },
      ],
      width: isSecondCircleActive.value
        ? NUMBERS.CIRCLE_SIZE + 8
        : NUMBERS.CIRCLE_SIZE,
    };
  });

  const animatedLabel1 = useAnimatedProps(() => {
    const val =
      Math.round(
        (minValue + (x.value / MAX_WIDTH) * (maxValue - minValue)) / steps,
      ) * steps;
    runOnJS(onMinSlider)(val);
    return {
      text: `${val}`,
    } as any;
  });

  const animatedLabel2 = useAnimatedProps(() => {
    const val =
      Math.round(
        (minValue + (x2.value / MAX_WIDTH) * (maxValue - minValue)) / steps,
      ) * steps;
    runOnJS(onMaxSlider)(val);
    return {
      text: `${val}`,
    } as any;
  });

  return (
    <View>
      {title ? <Text style={[titleStyle]}>{`${title}`}</Text> : null}
      <View style={styles.parentViewStyle}>
        {leftSideRangeLabel ? (
          <ATextInput
            defaultValue={minValue + ''}
            editable={false}
            style={labelStyle}
            animatedProps={animatedLabel1}
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
              <PanGestureHandler onGestureEvent={gestureHandler1}>
                <Animated.View
                  style={
                    FirstCircleStyle
                      ? [FirstCircleStyle, FirstCircleAnimationStyle]
                      : [styles.circle, circleStyle1]
                  }
                />
              </PanGestureHandler>
              <PanGestureHandler onGestureEvent={gestureHandler2}>
                <Animated.View
                  style={
                    SecondCircleStyle
                      ? [SecondCircleStyle, SecondCircleAnimationStyle]
                      : [styles.circle, circleStyle2]
                  }
                />
              </PanGestureHandler>
            </View>
          </View>
        </View>

        {rightSideRangeLabel ? (
          <ATextInput
            defaultValue={minValue + ''}
            editable={false}
            style={labelStyle}
            animatedProps={animatedLabel2}
          />
        ) : null}
      </View>
    </View>
  );
};
export default IMRangeSlider;
