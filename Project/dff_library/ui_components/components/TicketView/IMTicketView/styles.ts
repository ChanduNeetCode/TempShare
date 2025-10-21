import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    containerStyle: {
      backgroundColor: colors.White,
      borderBottomLeftRadius: actuatedNormalizeWidth(20),
      borderBottomRightRadius: actuatedNormalizeWidth(20),
      borderTopLeftRadius: actuatedNormalizeWidth(20),
      borderTopRightRadius: actuatedNormalizeWidth(20),
      margin: actuatedNormalizeWidth(20),
      paddingBottom: actuatedNormalizeHeight(20),
    },
    leftCircleStyle: {
      alignItems: 'flex-start',
      backgroundColor: colors.GradientOrangeStart,
      borderRadius: actuatedNormalizeWidth(20),
      height: actuatedNormalizeWidth(22),
      marginLeft: -actuatedNormalizeWidth(14),
      width: actuatedNormalizeWidth(24),
    },
    rightCircleStyle: {
      alignItems: 'flex-end',
      backgroundColor: colors.GradientOrangeStart,
      borderRadius: actuatedNormalizeWidth(20),
      height: actuatedNormalizeWidth(22),
      marginRight: -actuatedNormalizeWidth(14),
      width: actuatedNormalizeWidth(24),
    },
  });
export default styles;
