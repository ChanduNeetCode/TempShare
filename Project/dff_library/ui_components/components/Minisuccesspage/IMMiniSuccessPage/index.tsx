import React, { useEffect, useRef } from 'react';
import { Animated, Modal, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';

import { actuatedNormalizeHeight } from '../../../utils/utility';
import colors from '../../../atoms/colors';
import { MiniProps } from './types';
import styles from './styles';

const IMMiniSuccessPage: React.FC<MiniProps> = props => {
  const {
    bodyTitle,
    headerTitle,

    isblurContainer,
    isVisible,
    isStatusBarTranslucent,

    activeOpacityProp,
    parallelAnimatedProp = 1000,
    sequencelAnimatedProp = 1000,

    styleBodyTextStyle,
    styleHeaderTextStyle,
    styleInformationAreaStyle,

    animationViewStyle,
    styleCenteredMainView,
    styleCenteredView,
    styleCenterIconPosition,
    styleCenterIconStyle,
    styleChildViewStyle,
    styleModelLAndRRadius,
    styleModelLeftTopConerStyle,
    styleRightIconStyle,
    styleTextViewStyle,

    blurContainer = (
      <BlurView
        style={{ bottom: 0, left: 0, position: 'absolute', right: 0, top: 0 }}
        blurType={'dark'}
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
    ),

    centerCorrectIcon,
    centerFlowerIcon,
    childProps,
    modelLeftIcon,
    modelRightIcon,

    closeModal,
  } = props;

  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);
  const colorRange = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const iconOpacity = useRef(new Animated.Value(1)).current;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const translateY1 = new Animated.Value(300);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(colorRange, {
        toValue: 1,
        duration: parallelAnimatedProp,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -50,
        duration: parallelAnimatedProp,
        useNativeDriver: true,
      }),
      Animated.timing(iconOpacity, {
        toValue: 0,
        duration: parallelAnimatedProp,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: sequencelAnimatedProp,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: sequencelAnimatedProp,
        useNativeDriver: false,
      }),
      Animated.timing(translateY1, {
        toValue: 0,
        duration: sequencelAnimatedProp,
        useNativeDriver: true,
      }),
    ]).start();
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      statusBarTranslucent={isStatusBarTranslucent}
      onRequestClose={() => {}}>
      <View style={[styles.centeredView, styleCenteredView]}>
        {isblurContainer && blurContainer}
        <TouchableOpacity
          activeOpacity={activeOpacityProp}
          style={styles.modalTouchableStyle}
          onPress={() => closeModal(false)}
        />
        <View style={[styles.centeredMainView, styleCenteredMainView]}>
          <AnimatedLinearGradient
            colors={[colors.GradientOrangeStart, colors.GradientOrangeEnd]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={[
              styles.modelLAndRRadius,
              styleModelLAndRRadius,
              {
                transform: [
                  {
                    translateY: colorRange.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  },
                ],
              },
            ]}>
            <Animated.View
              style={[
                styles.modelLeftTopConerStyle,
                styleModelLeftTopConerStyle,
                {
                  opacity: textOpacity,
                },
              ]}>
              {modelRightIcon}
            </Animated.View>
            <Animated.View
              style={[{
                transform: [{ translateY }],
                minHeight: actuatedNormalizeHeight(206),
              },animationViewStyle]}>
              <View style={[styles.centerIconStyle, styleCenterIconStyle]}>
                <Animated.View
                  style={[
                    styles.centerIconPosition,
                    styleCenterIconPosition,
                    { opacity: iconOpacity },
                  ]}>
                  {centerFlowerIcon}
                </Animated.View>
                <View>{centerCorrectIcon}</View>
              </View>
              <Animated.View
                style={[
                  styles.textViewStyle,
                  styleTextViewStyle,
                  { opacity: textOpacity },
                ]}>
                <Text
                  style={[
                    styles.titleStyle,
                    headerTitle.styleHeader,
                    styleHeaderTextStyle,
                  ]}>
                  {headerTitle.title}
                </Text>
                {bodyTitle ? (
                  <Text
                    style={[
                      styles.subTitleStyle,
                      bodyTitle.styleBody,
                      styleBodyTextStyle,
                    ]}>
                    {bodyTitle.title}
                  </Text>
                ) : null}
              </Animated.View>
            </Animated.View>
            <Animated.View
              style={[
                styles.rightIconStyle,
                styleRightIconStyle,
                {
                  opacity: textOpacity,
                },
              ]}>
              {modelLeftIcon}
            </Animated.View>
            <Animated.View
              style={[
                styles.informationAreaStyle,
                styleInformationAreaStyle,
                {
                  opacity: animatedValue,
                  transform: [
                    {
                      translateX: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolate: 'extend',
                      }),
                    },
                  ],
                },
              ]}>
              <Animated.View
                style={[
                  styles.childViewStyle,
                  styleChildViewStyle,
                  { transform: [{ translateY: translateY1 }] },
                ]}>
                {childProps && childProps}
              </Animated.View>
            </Animated.View>
          </AnimatedLinearGradient>
        </View>
      </View>
    </Modal>
  );
};

export default IMMiniSuccessPage;
