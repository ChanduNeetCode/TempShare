import { StyleSheet, StatusBar, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const insets = useSafeAreaInsets();
const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight;

const styles = StyleSheet.create({
  linearGradientStyle: {
    width: '100%',
    height: STATUSBAR_HEIGHT,
    maxHeight: STATUSBAR_HEIGHT,
  },
});

export default styles;
