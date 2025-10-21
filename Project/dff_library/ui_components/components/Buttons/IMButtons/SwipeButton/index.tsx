import React, { useState, useEffect } from 'react';
import { SwipeButtonProps } from './types'
import { Animated, Text, View, AccessibilityInfo } from 'react-native';
// Components
import SwipeThumb from '../SwipeThumb/index';
import { actuatedNormalizeWidth, actuatedNormalizeHeight, actuatedNormalizeModerateScale } from '../../../../utils/utility';
// Styles
import styles from './styles';
import { ICMiniSuccessCenterFlower } from '../../../../atoms/icons';
// Constants
import {
  DISABLED_RAIL_BACKGROUND_COLOR,
  DISABLED_THUMB_ICON_BACKGROUND_COLOR,
  DISABLED_THUMB_ICON_BORDER_COLOR,
  RAIL_BACKGROUND_COLOR,
  RAIL_BORDER_COLOR,
  RAIL_FILL_BACKGROUND_COLOR,
  RAIL_FILL_BORDER_COLOR,
  SWIPE_SUCCESS_THRESHOLD,
  THUMB_ICON_BACKGROUND_COLOR,
  THUMB_ICON_BORDER_COLOR,
  TITLE_COLOR,
} from '../constants';

const SwipeButton: React.FC<SwipeButtonProps> = props => {
  const [layoutWidth, setLayoutWidth] = useState(0);
  const [zindex, setZindex] = useState(0);
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);
  const [isUnmounting, setIsUnmounting] = useState(false);

  /**
   * Retrieve layoutWidth to set maximum swipeable area.
   * Correct layout width will be received only after first render but we need it before render.
   * So render SwipeThumb only if layoutWidth > 0
   */
  const onLayoutContainer = async (e: { nativeEvent: { layout: { width: React.SetStateAction<number>; }; }; }) => {
    if (isUnmounting || layoutWidth) {
      return;
    }
    setLayoutWidth(e.nativeEvent.layout.width);
  };

  useEffect(() => {
    const handleScreenReaderToggled = (isEnabled: boolean | ((prevState: boolean) => boolean)) => {
      if (isUnmounting || screenReaderEnabled === isEnabled) {
        return;
      }
      setScreenReaderEnabled(isEnabled);
    };
    setIsUnmounting(false);
    const subscription = AccessibilityInfo.addEventListener('change', handleScreenReaderToggled);

    AccessibilityInfo.isScreenReaderEnabled().then(isEnabled => {
      if (isUnmounting) {
        return;
      }
      setScreenReaderEnabled(isEnabled);
    });

    return () => {
      setIsUnmounting(true);
      subscription.remove();
    };
  }, [isUnmounting, screenReaderEnabled]);

  const {
    disabled = false,
    disableResetOnTap=false,
    enableReverseSwipe,
    isBackgroundImage = false,
    shouldResetAfterSuccess=false,

    height=actuatedNormalizeHeight(50),
    resetAfterSuccessAnimDelay=200,
    swipeSuccessThreshold=SWIPE_SUCCESS_THRESHOLD,

    disabledRailBackgroundColor= DISABLED_RAIL_BACKGROUND_COLOR,
    disabledThumbIconBackgroundColor= DISABLED_THUMB_ICON_BACKGROUND_COLOR,
    disabledThumbIconBorderColor= DISABLED_THUMB_ICON_BORDER_COLOR,
    railBackgroundColor=RAIL_BACKGROUND_COLOR,
    railBorderColor= RAIL_BORDER_COLOR,
    railFillBackgroundColor=RAIL_FILL_BACKGROUND_COLOR,
    railFillBorderColor= RAIL_FILL_BORDER_COLOR,
    thumbIconBackgroundColor=THUMB_ICON_BACKGROUND_COLOR,
    thumbIconBorderColor=THUMB_ICON_BORDER_COLOR,
    title,
    titleColor=TITLE_COLOR,

    backgroundImage = <ICMiniSuccessCenterFlower width={actuatedNormalizeWidth(150)} height={actuatedNormalizeHeight(150)} />,
    
    onSwipeFail,
    onSwipeStart,
    onSwipeSuccess,

    containerStyles = {},
    railStyles={},
    thumbIconStyles={},

    thumbIconWidth,
    titleFontSize=actuatedNormalizeModerateScale(20),
    titleMaxFontScale,
    width,
    titleStyles={},
  
    forceReset,
    thumbIconComponent,

    thumbIconImageSource,
  } = props;
  const [backgroundColor,setBackgroundColor]=useState(railBackgroundColor);
  return (
    <View
      style={[
        styles.container,
        {
          ...containerStyles,
          backgroundColor: disabled
            ? disabledRailBackgroundColor
            : backgroundColor,
          borderColor: railBorderColor,
          ...(width ? { width } : {}),
        },
      ]}
      onLayout={onLayoutContainer}>
      {isBackgroundImage && <Animated.View
        style={[
          styles.centerIconPosition,
          { left: actuatedNormalizeWidth(-26) }
        ]}>
        {backgroundImage}
      </Animated.View>}
      <Text
        maxFontSizeMultiplier={titleMaxFontScale}
        ellipsizeMode={'tail'}
        numberOfLines={1}
        importantForAccessibility={
          screenReaderEnabled ? 'no-hide-descendants' : undefined
        }
        style={[
          styles.title,
          {
            color: titleColor,
            fontSize: titleFontSize,
            ...titleStyles,
          },
        ]}>
        {title}
      </Text>
      {layoutWidth > 0 && (
        <View style={{ zIndex: zindex }}>
          <SwipeThumb
            disabled={disabled}
            disabledThumbIconBackgroundColor={disabledThumbIconBackgroundColor}
            disabledThumbIconBorderColor={disabledThumbIconBorderColor}
            disableResetOnTap={disableResetOnTap}
            enableReverseSwipe={enableReverseSwipe}
            forceReset={forceReset}
            layoutWidth={layoutWidth}
            onSwipeFail={() => {
              setZindex(0);
              onSwipeFail&&onSwipeFail();
              setBackgroundColor(railBackgroundColor);
            }}
            onSwipeStart={() => {
              setZindex(-1);
              onSwipeStart&&onSwipeStart();
              setBackgroundColor(railFillBackgroundColor);
            }}
            onSwipeSuccess={() => {
              setZindex(0);
              onSwipeSuccess&&onSwipeSuccess();
            }}
            railFillBackgroundColor={'transparent'}
            railFillBorderColor={railFillBorderColor}
            railStyles={railStyles}
            resetAfterSuccessAnimDelay={resetAfterSuccessAnimDelay}
            screenReaderEnabled={screenReaderEnabled}
            shouldResetAfterSuccess={shouldResetAfterSuccess}
            swipeSuccessThreshold={swipeSuccessThreshold}
            thumbIconBackgroundColor={thumbIconBackgroundColor}
            thumbIconBorderColor={thumbIconBorderColor}
            thumbIconComponent={thumbIconComponent}
            thumbIconHeight={height}
            thumbIconImageSource={thumbIconImageSource}
            thumbIconStyles={thumbIconStyles}
            thumbIconWidth={thumbIconWidth}
            title={title}
          />
        </View>
      )}
    </View>
  );
};

export default SwipeButton;
