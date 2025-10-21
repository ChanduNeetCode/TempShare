import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    parentViewStyle: {
      backgroundColor: colors.White,
      height: actuatedNormalizeHeight(43),
      borderColor: colors.NeutralGrey60,
      borderRadius: actuatedNormalizeWidth(13),
      borderStyle: 'solid',
      elevation: 2.1,
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
    },
    tabViewStyle: {
      borderRadius: actuatedNormalizeWidth(10),
      height: actuatedNormalizeHeight(37),
      justifyContent: 'center',
      alignItems: 'center',
    },
    flatListInnerStyle: {
      justifyContent: 'space-around',
    },
    flatListMainStyle: {
      justifyContent: 'space-between',
      flex: 1,
    },
    tabTitlesSelectedTextStyle: {
      color: colors.White,
    },
    tabTitlesUnSelectedTextStyle: {
      color: colors.NeutralGrey110,
    },
  });
export default styles;
