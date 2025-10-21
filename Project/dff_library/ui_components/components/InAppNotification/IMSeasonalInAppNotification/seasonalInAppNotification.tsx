import React, { useState } from 'react';
import { Text, View, Animated, Easing, TouchableOpacity } from 'react-native';

import { NotificationProps, NotificationType } from '../types';
import styles from '../styles';
import { colors } from '../../../atoms';

const dismissibleInAppNotification: React.FC<NotificationProps> = props => {
  const {
    backgroundColor = colors.PastelBrown100,
    notificationType,
    showTitle,
    subTitle,
    title,

    styleFestivalsubTextStyle,
    styleFestivalTextStyle,
    styleShowButtonStyle,

    mainContainerStyle,
    rightIconStyle,
    styleFestivalView,

    leftIcon,
    rightIcon,

    onclickNotification,
    onRightIconPress,
  } = props;
  const translateY = useState(new Animated.Value(-600))[0];

  const showNotificationHandler = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };
  return (
    <>
      <View>
        <Animated.View style={{ transform: [{ translateY }] }}>
          <TouchableOpacity onPress={onclickNotification}>
            {notificationType == NotificationType.Seasonal && <View
              style={[
                styles.notificationBGColorSeasonal, mainContainerStyle,
                { backgroundColor: backgroundColor }
              ]}>
              {leftIcon}
              <View style={[styles.festivalView, styleFestivalView]}>
                <Text style={[styles.festivalTextStyle, styleFestivalTextStyle]}>
                  {title}
                </Text>
                <Text style={[styles.festivalsubTextStyle, styleFestivalsubTextStyle,]}>
                  {subTitle}
                </Text>
              </View>
              <TouchableOpacity style={[styles.rightSideStyle, rightIconStyle]}
                onPress={onRightIconPress}>
                {rightIcon}
              </TouchableOpacity>
            </View>
            }
          </TouchableOpacity>
        </Animated.View>
      </View>
      <TouchableOpacity onPress={showNotificationHandler}>
        <Text style={[styles.showButtonStyle, styleShowButtonStyle]}>
          {showTitle}
        </Text>
      </TouchableOpacity>
    </>
  );
};
export default dismissibleInAppNotification;
