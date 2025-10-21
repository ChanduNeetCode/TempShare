import React, {  useState, useEffect, useRef } from 'react';
import { I18nManager } from 'react-native';
import {
  Animated,
  Image,
  PanResponder,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import { TRANSPARENT_COLOR } from '../constants';
import styles, { borderWidth, margin } from './styles';
import { SwipeThumbProps } from './types'
import { actuatedNormalizeWidth } from '../../../../utils/utility';

const DEFAULT_ANIMATION_DURATION = 400;


const SwipeThumb: React.FC<SwipeThumbProps> = props => {
  const {
    disabled=false,
    disableResetOnTap=false,
    enableReverseSwipe,
    screenReaderEnabled=false,
    shouldResetAfterSuccess,
  
    layoutWidth=actuatedNormalizeWidth(0),
    resetAfterSuccessAnimDelay= 1000,
    swipeSuccessThreshold,
    thumbIconHeight,
    thumbIconWidth,

    disabledThumbIconBackgroundColor,
    disabledThumbIconBorderColor,
    railFillBackgroundColor,
    railFillBorderColor,
    thumbIconBackgroundColor,
    thumbIconBorderColor,
    title,

    forceReset,
    onSwipeFail,
    onSwipeStart,
    onSwipeSuccess, 

    railStyles,
    thumbIconStyles={},

    thumbIconComponent,

    thumbIconImageSource,
  }=props;
  const paddingAndMarginsOffset = borderWidth + 2 * margin;
  var defaultContainerWidth = 0;
  if (props.thumbIconWidth == undefined) {
    defaultContainerWidth = props.thumbIconHeight;
  } else {
    defaultContainerWidth = props.thumbIconWidth;
  }
  const maxWidth = layoutWidth - paddingAndMarginsOffset;
  const isRTL = I18nManager.isRTL;

  const animatedWidth = useRef(new Animated.Value(defaultContainerWidth))
    .current;
  const [defaultWidth, setDefaultWidth] = useState(defaultContainerWidth);
  const [shouldDisableTouch, disableTouch] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState(TRANSPARENT_COLOR);
  const [borderColor, setBorderColor] = useState(TRANSPARENT_COLOR);


  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onShouldBlockNativeResponder: () => true,
      onPanResponderStart,
      onPanResponderMove,
      onPanResponderRelease,
    }),
  ).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: defaultWidth,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [animatedWidth, defaultWidth]);

  useEffect(() => {
    reset();
    forceReset && forceReset();
  }, [forceReset]);

  function onSwipeNotMetSuccessThreshold() {
    // Animate to initial position
    setDefaultWidth(defaultContainerWidth);
    onSwipeFail && onSwipeFail();
    setBackgroundColor('#00000000')
  }

  function onSwipeMetSuccessThreshold(newWidth: number) {
    if (newWidth !== maxWidth) {
      finishRemainingSwipe();
      return;
    }
    invokeOnSwipeSuccess();
    reset();
  }

  function onPanResponderStart() {
    if (props.disabled) {
      return;
    }
    onSwipeStart && onSwipeStart();
  }

  async function onPanResponderMove(_event: any, gestureState: { dx: number; }) {
    if (props.disabled) {
      return;
    }
    const reverseMultiplier = props.enableReverseSwipe ? -1 : 1;
    const rtlMultiplier = isRTL ? -1 : 1;
    const newWidth =
      defaultContainerWidth +
      rtlMultiplier * reverseMultiplier * gestureState.dx;
    if (newWidth < defaultContainerWidth) {
      // Reached starting position
      reset();
    } else if (newWidth > maxWidth) {
      // Reached end position
      setBackgroundColors();
      setDefaultWidth(maxWidth);
    } else {
      setBackgroundColors();
      await Animated.timing(animatedWidth, {
        toValue: newWidth,
        duration: 0,
        useNativeDriver: false,
      }).start();
      setDefaultWidth(newWidth);
    }
  }

  function onPanResponderRelease(_event: any, gestureState: { dx: number; }) {
    if (props.disabled) {
      return;
    }
    const reverseMultiplier = props.enableReverseSwipe ? -1 : 1;
    const rtlMultiplier = isRTL ? -1 : 1;
    const newWidth =
      defaultContainerWidth +
      rtlMultiplier * reverseMultiplier * gestureState.dx;
    const successThresholdWidth =
      maxWidth * (swipeSuccessThreshold / 100);
    newWidth < successThresholdWidth
      ? onSwipeNotMetSuccessThreshold()
      : onSwipeMetSuccessThreshold(newWidth);
  }

  function setBackgroundColors() {

    // Set backgroundColor only if not already set
    if (backgroundColor === TRANSPARENT_COLOR) {
      setBackgroundColor(railFillBackgroundColor);
      setBorderColor(railFillBorderColor);
    }
  }

  function finishRemainingSwipe() {
    // Animate to final position
    setDefaultWidth(maxWidth);
    invokeOnSwipeSuccess();

    //Animate back to initial position after successfully swiped
    const resetDelay =
      DEFAULT_ANIMATION_DURATION + resetAfterSuccessAnimDelay ;
    setTimeout(() => {

      shouldResetAfterSuccess && reset();
    }, resetDelay);
  }

  function invokeOnSwipeSuccess() {
    disableTouch(disableResetOnTap);
    props.onSwipeSuccess && props.onSwipeSuccess();
  }

  function reset() {
    disableTouch(false);
    setDefaultWidth(defaultContainerWidth);
    setBackgroundColor(TRANSPARENT_COLOR);
    if (backgroundColor !== TRANSPARENT_COLOR) {
       setBackgroundColor(TRANSPARENT_COLOR);
      setBorderColor(TRANSPARENT_COLOR);
    }
  }

  function renderThumbIcon() {
    const ThumbIconComponent=thumbIconComponent;
    var iconWidth = 0;
    if (thumbIconWidth == undefined) {
      iconWidth = thumbIconHeight;
    } else {
      iconWidth = thumbIconWidth;
    }
    const dynamicStyles = {
       ...thumbIconStyles,
       height: thumbIconHeight,
       width: iconWidth,
      backgroundColor: disabled
        ? disabledThumbIconBackgroundColor
        : thumbIconBackgroundColor,
      borderWidth:0,
      borderColor: disabled
        ? disabledThumbIconBorderColor
        : thumbIconBorderColor,
    };

    return (
      <View style={[styles.icon,{...dynamicStyles} ]}>
        {!ThumbIconComponent && thumbIconImageSource && (
          <Image resizeMethod="resize" source={thumbIconImageSource} />
        )}
        {ThumbIconComponent && (
          <View>
            <ThumbIconComponent />
          </View>
        )}
      </View>
    );
  }
   const panStyle = {
    backgroundColor,
    borderColor,
    width: animatedWidth,
    ...(enableReverseSwipe ? styles.containerRTL : styles.container),
    ...railStyles,
  };

  return (
    <>
      {screenReaderEnabled ? (
        <TouchableNativeFeedback
          accessibilityLabel={`${title}. ${
            disabled ? 'Disabled' : 'Double-tap to activate'
          }`}
          disabled={disabled}
          onPress={onSwipeSuccess}
          accessible>
          <View style={[panStyle, { width: defaultContainerWidth }]}>
            {renderThumbIcon()}
          </View>
        </TouchableNativeFeedback>
      ) : (
        <Animated.View
          style={[panStyle]}
          {...panResponder.panHandlers}
          pointerEvents={shouldDisableTouch ? 'none' : 'auto'}>
          {renderThumbIcon()}
        </Animated.View>
      )}
    </>
  );
};

export default SwipeThumb;
