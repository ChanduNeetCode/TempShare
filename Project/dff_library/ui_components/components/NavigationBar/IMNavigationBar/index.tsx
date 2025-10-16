import React, { FC } from 'react';
import {
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {typography,colors} from '../../../atoms';
import style from './styles';
import { type IMNavigationBarProps } from './types';

const IMNavigationBar: FC<IMNavigationBarProps> = props => {
  const styles = style();
  const {
    endCoordinates,
    startCoordinates,

    childProps,
    childPropStyle,
    containerStyle,
    titleViewStyle,
    headerLeftProps,
    headerActionProps,
    headerMenuProps,

    isCardView,
    isStatusBar = true,
    linearGradientColors = [
      colors.GradientOrangeStart,
      colors.GradientOrangeEnd,
    ],
    statusBarBackgroundColor,
    title = '',
    titleStyle,
    statusBarColor
  } = props;

  const handleTitleStyles = () => {
    if (
      headerLeftProps?.imageSource &&
      headerActionProps?.imageSource &&
      headerMenuProps?.imageSource
    ) {
      return 0.59;
    } else if (
      (headerLeftProps?.imageSource &&
        !headerActionProps?.imageSource &&
        !headerMenuProps?.imageSource) ||
      (!headerLeftProps?.imageSource &&
        !headerActionProps?.imageSource &&
        headerMenuProps?.imageSource) ||
      (!headerLeftProps?.imageSource &&
        headerActionProps?.imageSource &&
        !headerMenuProps?.imageSource)
    ) {
      return 0.86;
    } else if (
      !headerLeftProps?.imageSource &&
      !headerActionProps?.imageSource &&
      !headerMenuProps?.imageSource
    ) {
      return 1;
    } else {
      return 0.73;
    }
  };
  return (
    <View style={styles.container}>
      {isStatusBar && (
        <StatusBar
          translucent={true}
          backgroundColor={
            statusBarBackgroundColor ? statusBarBackgroundColor : 'transparent'
          }
          barStyle={statusBarColor?statusBarColor:'default'}
        />
      )}
      <LinearGradient
        start={startCoordinates ? startCoordinates : { x: 0, y: 0 }}
        end={endCoordinates ? endCoordinates : { x: 1, y: 0 }}
        colors={linearGradientColors}
        style={containerStyle ? containerStyle : styles.linearGradient}>
        <View style={styles.uppersubcontainer}>
          <View style={styles.flexPartOne}>
            {headerLeftProps &&
              headerLeftProps.onPress &&
              headerLeftProps.imageSource && (
                <TouchableOpacity onPress={headerLeftProps?.onPress}>
                  <View
                    style={
                      headerLeftProps?.style
                        ? headerLeftProps?.style
                        : styles.headerLeftBtnStyle
                    }>
                    {headerLeftProps?.imageSource}
                  </View>
                </TouchableOpacity>
              )}
          </View>
          <View style={[{ flex: handleTitleStyles() }, titleViewStyle]}>
            {title && (
              <Text
                style={[
                  typography.HeadingBold3,
                  styles.titleStyle,
                  titleStyle,
                ]}>
                {title}
              </Text>
            )}
          </View>

          <View style={styles.flexPartOne}>
            {headerActionProps &&
              headerActionProps.onPress &&
              headerActionProps.imageSource && (
                <TouchableOpacity onPress={headerActionProps?.onPress}>
                  <View
                    style={
                      headerActionProps?.style
                        ? headerActionProps?.style
                        : styles.headerActionBtnStyle
                    }>
                    {headerActionProps?.imageSource}
                  </View>
                </TouchableOpacity>
              )}
          </View>

          <View style={styles.flexPartTwo}>
            {headerMenuProps &&
              headerMenuProps.onPress &&
              headerMenuProps.imageSource && (
                <TouchableOpacity onPress={headerMenuProps?.onPress}>
                  <View
                    style={
                      headerMenuProps?.style
                        ? headerMenuProps?.style
                        : styles.headerMenuBtnStyle
                    }>
                    {headerMenuProps?.imageSource}
                  </View>
                </TouchableOpacity>
              )}
          </View>
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

export default IMNavigationBar;
