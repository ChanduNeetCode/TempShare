import React from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../../atoms';
import styles from './styles';
import { type IMCustomNavigationBarProps } from './types';

const IMCustomNavigationBar: React.FC<IMCustomNavigationBarProps> = props => {

  const {
    isCardView,
    isStatusBar = true,

    linearGradientColors = [colors.GradientOrangeStart, colors.GradientOrangeEnd],
    statusBarBackgroundColor = 'transparent',
    title,

    titleStyle,

    containerStyle,
    childPropStyle,
    mainContainerStyle,
    titleViewStyle,

    childProps,

    endCoordinates = { x: 1, y: 0 },
    startCoordinates = { x: 0, y: 0 },

    headerLeftProps,
    headerActionProps,
    headerMenuProps,

    statusBarColor = 'default'
  } = props;

  return (
    <View style={styles.container}>
      {isStatusBar && (
        <StatusBar
          translucent={true}
          backgroundColor={statusBarBackgroundColor}
          barStyle={statusBarColor}
        />
      )}
      <LinearGradient
        start={startCoordinates}
        end={endCoordinates}
        colors={linearGradientColors}
        style={[styles.linearGradient, containerStyle]}>
        <View style={[styles.mainContainerStyle, mainContainerStyle]}>
          {headerLeftProps && (
            <TouchableOpacity onPress={headerLeftProps.onPress}>
              <View style={[styles.headerLeftBtnStyle, headerLeftProps.style]}>
                {headerLeftProps.imageSource}
              </View>
            </TouchableOpacity>
          )
          }
          <View style={[styles.titleViewStyle,titleViewStyle]}>
            {title && (
              <Text style={[styles.titleStyle, titleStyle]}>
                {title}
              </Text>
            )}
          </View>

          {headerActionProps && (
            <TouchableOpacity onPress={headerActionProps.onPress}>
              <View style={[styles.headerActionBtnStyle, headerActionProps.style]}>
                {headerActionProps.imageSource}
              </View>
            </TouchableOpacity>
          )
          }
          {headerMenuProps && (
            <TouchableOpacity onPress={headerMenuProps?.onPress}>
              <View style={[styles.headerMenuBtnStyle, headerMenuProps.style]}>
                {headerMenuProps.imageSource}
              </View>
            </TouchableOpacity>
          )}
        </View>
        {isCardView && childProps && (
          <View style={[styles.lowersubcontainer, childPropStyle]}>
            {childProps}
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default IMCustomNavigationBar;
