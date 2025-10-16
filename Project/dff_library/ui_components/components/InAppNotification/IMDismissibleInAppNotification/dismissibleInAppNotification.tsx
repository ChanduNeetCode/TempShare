import React, { useState } from 'react';
import { Text, View, Animated, Easing, TouchableOpacity } from 'react-native';

import { NotificationProps, NotificationType } from '../types';
import styles from '../styles';
import { colors } from '../../../atoms';

const dismissibleInAppNotification: React.FC<NotificationProps> = props => {
  const {
    backgroundColor = colors.NeutralGrey140,
    notificationType,

    showTitle,
    title,

    styleNotificationTextStyle,
    styleShowButtonStyle,

    mainContainerStyle,
    rightIconStyle,
    seperatorLineStyle,

    leftIcon,
    rightIcon,

    onclickNotification,
    onRightIconPress,

  } = props;

  const translateY = useState(new Animated.Value(-500))[0];
  const [Visible, setVisible] = useState(true);

  const handleClose = () => {
    onRightIconPress && onRightIconPress();
    setVisible(!Visible);
  };
  
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
        {Visible && (
          <Animated.View style={{ transform: [{ translateY }] }}>
            <TouchableOpacity onPress={onclickNotification}>
              {notificationType == NotificationType.Dismissible &&
                <View
                  style={[styles.notificationBGColorDismissible, mainContainerStyle,
                  { backgroundColor: backgroundColor }]}>
                  {leftIcon}
                  <Text style={[styles.notificationTextStyle, styleNotificationTextStyle]}>
                    {title}
                  </Text>
                  <View style={[styles.viewLineStyle, seperatorLineStyle]} />
                  <TouchableOpacity style={[styles.rightSideStyle1, rightIconStyle]} onPress={handleClose}>
                    {rightIcon}
                  </TouchableOpacity>
                </View>}
            </TouchableOpacity>
          </Animated.View>
        )}
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
