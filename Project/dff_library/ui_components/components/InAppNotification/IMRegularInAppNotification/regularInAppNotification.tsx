import React, { useState } from 'react';
import { Text, View, Animated, Easing, TouchableOpacity } from 'react-native';

import { NotificationProps, NotificationType } from '../types';
import styles from '../styles';
import { colors } from '../../../atoms';

const regularInAppNotification: React.FC<NotificationProps> = props => {
  const {
    backgroundColor = colors.SecondaryMaroon100,
    notificationType,

    showTitle,
    title,

    styleNotificationTextStyle,
    styleShowButtonStyle,

    mainContainerStyle,

    leftIcon,

    onclickNotification,
  } = props;
  const translateY = useState(new Animated.Value(-500))[0];

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
      <Animated.View style={{ transform: [{ translateY }] }}>
        <TouchableOpacity onPress={onclickNotification}>
          {notificationType == NotificationType.Regular && <View
            style={[styles.notificationBGColorRegular, mainContainerStyle,
            { backgroundColor: backgroundColor }
            ]}>
            {leftIcon}
            <Text style={[styles.notificationTextStyle, styleNotificationTextStyle]}>
              {title}
            </Text>
          </View>
          }
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity onPress={showNotificationHandler}>
        <Text style={[styles.showButtonStyle, styleShowButtonStyle]}>
          {showTitle}
        </Text>
      </TouchableOpacity>
    </>
  );
};
export default regularInAppNotification;
