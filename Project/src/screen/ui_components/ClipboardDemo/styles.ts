import colors from '../../../../dff_library/ui_components/atoms/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flexDirection: 'row',
    left: 30,
  },
  copiedText: {
    color: colors.PrimaryOrange120,
    fontFamily: 'Mulish-SemiBold',
  },
});

export default styles;
