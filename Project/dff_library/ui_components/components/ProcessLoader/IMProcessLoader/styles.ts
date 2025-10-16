import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import colors from '../../../atoms/colors';

const styles = () =>
  StyleSheet.create({
    gif: {
      height: 138,
      width: 138,
    },
    parentView: {
      alignItems: 'center',
      backgroundColor: colors.White,
      flexDirection: 'column',
      height: actuatedNormalizeHeight(700),
      justifyContent: 'center',
      width: actuatedNormalizeWidth(360),
    },
    subTitle: {
      color: colors.NeutralGrey130,
      fontFamily: 'Mulish-SemiBold',
      fontSize: 14,
      letterSpacing: 0.25,
      marginLeft: 10,
      padding: 10,
      textAlign: 'center',
    },
    title: {
      color: colors.NeutralGrey140,
      fontFamily: 'Mulish-Bold',
      fontSize: 18,
      letterSpacing: 0.25,
      marginLeft: 10,
      textAlign: 'center',
    },
  });
export default styles;
