import React, { useRef } from 'react';
import {
  Animated,
  Modal,
  PanResponder,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { ICGeneralExpand } from '../../../../atoms/icons';
import { actuatedNormalizeHeight } from '../../../../utils/utility';
import style from '../styles';
import { type IMDefaultDrawersProps } from './types';

const IMDefaultDrawers: React.FC<IMDefaultDrawersProps> = props => {
  const styles = style();
  const {
    isDisable,
    isStatusBarTranslucent,
    expandable,
    visible,
 
    maxSwipeHeight,
    minModalHeight,

    title,

    expandableiconContentStyle,
    expandableIconChildStyle,
    modalContentStyle,
    modelcontainerStyleProp,
    modalTouchableStyleProp,
    titleContentStyle,
    titleChildPartOneStyle,
    titleChildPartTwoStyle,
    titleChildPartThreeStyle,

    titleStyleProp,

    blurContainer,
    childProps,
    expandableIcon = <ICGeneralExpand />,
    LeftImage,
    RightImage,

    onClose,
    onIconPress,
    onPressBlurPart,
  } = props;
  const MAX_SWIPE_HEIGHT =
    useWindowDimensions().height -
    actuatedNormalizeHeight(maxSwipeHeight ? maxSwipeHeight : 200);
  const MIN_MODAL_HEIGHT =
    useWindowDimensions().height -
    actuatedNormalizeHeight(minModalHeight ? minModalHeight : 500);
  const panY = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: () => {
        Animated.event([null, { dy: panY }], {
          useNativeDriver: false,
        });
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < actuatedNormalizeHeight(-30)) {
          Animated.spring(panY, {
            toValue: MAX_SWIPE_HEIGHT,
            useNativeDriver: false,
          }).start();
        } else if (gestureState.dy > actuatedNormalizeHeight(30)) {
          Animated.spring(panY, { toValue: 0, useNativeDriver: false }).start();
        }
      },
    }),
  ).current;
  const animatedStyle = {
    height: panY.interpolate({
      inputRange: [0, MAX_SWIPE_HEIGHT],
      outputRange: [MIN_MODAL_HEIGHT, MAX_SWIPE_HEIGHT],
      extrapolate: 'clamp',
    }),
  };
  const resetModalPosition = () => {
    panY.setValue(0);
    {
      onClose && onClose();
    }
  };
  return (
    <Modal
     animationType="slide"
     transparent={true} 
     visible={visible}
     statusBarTranslucent={isStatusBarTranslucent}
     >
      {blurContainer}
      <TouchableOpacity
        disabled={isDisable}
        style={[styles.modalTouchableStyle, modalTouchableStyleProp]}
        onPress={onPressBlurPart}
      />
      <KeyboardAvoidingView
        behavior={'padding'}
        style={modelcontainerStyleProp}>
        {expandable ? (
          <Animated.View
            style={[expandable ? animatedStyle : null, modalContentStyle]}
            {...panResponder.panHandlers}>
            <View style={expandableiconContentStyle}>
              <View style={expandableIconChildStyle}>
                {expandable && expandableIcon}
              </View>
            </View>
            <View style={[styles.titleStyle,titleContentStyle]}>
             {LeftImage&& <View style={titleChildPartOneStyle}>{LeftImage}</View>}
              <View style={[styles.titlePart2StyleWithExpandable,titleChildPartTwoStyle]}>
                <Text style={[styles.bodySemiBold1, titleStyleProp]}>
                  {title}
                </Text>
              </View>
              <View style={titleChildPartThreeStyle}>
                <TouchableOpacity onPress={resetModalPosition}>
                  {RightImage}
                </TouchableOpacity>
              </View>
            </View>
            {childProps && childProps}
          </Animated.View>
        ) : (
          <View style={modalContentStyle}>
            <View style={[styles.titleStyle, titleContentStyle]}>
              {LeftImage&&<View style={titleChildPartOneStyle}>{LeftImage}</View>}
              <View style={[styles.titlePart2Style, titleChildPartTwoStyle]}>
                <Text style={[styles.bodySemiBold1, titleStyleProp]}>
                  {title}
                </Text>
              </View>
              <View style={titleChildPartThreeStyle}>
                <TouchableOpacity
                  onPress={onIconPress ? onIconPress : resetModalPosition}>
                  {RightImage}
                </TouchableOpacity>
              </View>
            </View>
            {childProps && childProps}
          </View>
        )}
      </KeyboardAvoidingView>
    </Modal>
  );
};
export default IMDefaultDrawers;
