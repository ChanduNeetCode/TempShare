import React, { FC } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CustomStatusBar {
  gradientColorsArray: [string, string];
}

const CustomStatusBar: FC<CustomStatusBar> = props => {
  const { gradientColorsArray } = props;
  const insets = useSafeAreaInsets();
  const STATUSBAR_HEIGHT =
    Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight;
  return (
    <View
      style={{
        height: STATUSBAR_HEIGHT
      }}>
      <LinearGradient
        useAngle={true}
        angle={89.96}
        colors={gradientColorsArray}
        style={{
          width: '100%',
          height: STATUSBAR_HEIGHT,
          maxHeight: STATUSBAR_HEIGHT,
        }}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient>
    </View>
  );
};

export default CustomStatusBar;
