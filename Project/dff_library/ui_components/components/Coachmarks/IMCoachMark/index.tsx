import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, Text, TouchableOpacity, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Popover, { Size } from 'react-native-popover-view';

import { IMCoachMarkProps } from './types';
import useStyles from './styles';
import { ICCircleClose } from '../../../atoms/icons/index';
import colors from '../../../atoms/colors';

import { IMGradientButton } from '../../Buttons';
import { Pagination } from '../../Carousel/src';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const IMCoachMark: React.FC<IMCoachMarkProps> = props => {
  const {
    isButtons,
    isPagination,
    isVisible,

    activeDotClr,
    backBtnText = 'Back',
    buttonGradientClrs,
    buttonGradientClrs2,
    inActiveDotClr,
    linearGradientColor1 = colors.GradientOrangeStart,
    linearGradientColor2 = colors.GradientOrangeEnd,
    nextBtnText = 'Next',
    popBackGroundClr,

    offset = -55,
    popHeight,

    activeDotStyle,
    backgroundStyle,
    buttonViewStyle,
    buttonStyle,
    coachmarkViewStyle,
    gradiantStyle,
    iconStyle,
    inactiveDotStyle,
    mainContainerProp,

    linearGradientEndDimension = { x: 1, y: 0 },
    linearGradientStartDimension = { x: 0, y: 0 },
    placement,
    textString,

    textStyleProp,
    primaryStyleText,
    gradiantStyleText,

    hidePopover,

    children,
    coachMarkImg,

    closeIconContainer = (
      <ICCircleClose
        width={actuatedNormalizeWidth(24)}
        height={actuatedNormalizeHeight(24)}
      />
    ),
  } = props;
  const styles = useStyles();

  const [currentStep, setCurrentStep] = useState<number>(0);
  const animation = useRef(new Animated.Value(0)).current;

  const totalSteps = textString.length;

  const verticalOffset: any = Platform.OS == 'ios' ? null : offset;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1, // End value for animation
      duration: 300, // Duration for animation
      useNativeDriver: false,
    }).start();
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      animation.setValue(0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      animation.setValue(0);
    }
  };

  return (
    <View style={[coachmarkViewStyle]}>
      <Popover
        isVisible={isVisible}
        from={children}
        placement={placement}
        verticalOffset={verticalOffset}
        arrowSize={new Size(18, 9.02)}
        backgroundStyle={backgroundStyle}
        popoverStyle={[
          styles.gradiantWithImageContainer,
          mainContainerProp,
          { height: popHeight, backgroundColor: popBackGroundClr },
        ]}>
        <LinearGradient
          start={linearGradientStartDimension}
          end={linearGradientEndDimension}
          colors={[linearGradientColor1, linearGradientColor2]}
          style={[
            styles.withImageGradiantcontainer,
            mainContainerProp,
            { height: popHeight },
          ]}>
          {coachMarkImg}
          <Text
            style={[
              styles.withImageTextStyle,
              { color: colors.White },
              textStyleProp,
            ]}>
            {textString[currentStep]}
          </Text>
          {isPagination && (
            <View style={styles.withImageDotsViewStyling}>
              <Pagination
                dotsLength={textString.length}
                activeDotIndex={currentStep}
                tappableDots={true}
                carouselRef={true}
                color={colors.White}
                inactiveColor={colors.GreyWithOpacity}
                dotStyle={[
                  styles.activeDotStyle,
                  activeDotStyle,
                  { backgroundColor: activeDotClr },
                ]}
                inactiveDotStyle={[
                  styles.inactiveDotStyle,
                  inactiveDotStyle,
                  { backgroundColor: inActiveDotClr },
                ]}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
              />
            </View>
          )}
          {isButtons && (
            <View style={[styles.withImageButtonStyle, buttonViewStyle]}>
              {currentStep > 0 && (
                <IMGradientButton
                  titleRecv={backBtnText}
                  type="small"
                  widthSmall={actuatedNormalizeWidth(98)}
                  buttonStyle={[
                    styles.gradiantWithImageBackButton,
                    gradiantStyle,
                  ]}
                  onPress={handleBack}
                  gradientColorsArray={buttonGradientClrs}
                  styleText={gradiantStyleText}
                />
              )}
              {currentStep < totalSteps - 1 && (
                <IMGradientButton
                  titleRecv={nextBtnText}
                  type="small"
                  widthSmall={actuatedNormalizeWidth(98)}
                  buttonStyle={[styles.withImageBackButton, buttonStyle]}
                  onPress={handleNext}
                  gradientColorsArray={buttonGradientClrs2}
                  styleText={primaryStyleText}
                />
              )}
            </View>
          )}
        </LinearGradient>
        <TouchableOpacity
            style={[styles.iconStyle, iconStyle]}
            onPress={hidePopover}>
            {closeIconContainer}
          </TouchableOpacity>
      </Popover>
    </View>
  );
};

export default IMCoachMark;
