import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const TAB_MARGIN = 10;
const styles = () =>
  StyleSheet.create({
    activeLableStyle: {
      color: colors.NeutralGrey140,
    },

    container: {
      flexDirection: 'row',
      flex: 1,
    },
    disableLableStyle: {
      color: colors.NeutralGrey80,
    },

    indicatorStyle: {
      backgroundColor: colors.PrimaryOrange100,
      borderRadius: actuatedNormalizeModerateScale(4),
      height: actuatedNormalizeHeight(2),
      marginLeft: actuatedNormalizeWidth(28),
    },
    lableStyle: {
      color: colors.NeutralGrey110,
    },
    scrollableTabStyle: {
      flexDirection: 'row',
      height: actuatedNormalizeHeight(52),
      marginLeft: actuatedNormalizeWidth(10)
    },

    tabStyle: {
      margin: actuatedNormalizeModerateScale(4),
      alignItems: 'center',
      flexDirection: 'row',
      height: actuatedNormalizeHeight(52),
      justifyContent: 'center',
    },

    tabView: {
      backgroundColor: colors.White,
      borderBottomLeftRadius: actuatedNormalizeWidth(10),
      borderBottomRightRadius: actuatedNormalizeWidth(10),
      elevation: 5,
      shadowColor: '#838383',
      shadowOpacity: 0.1,
      shadowOffset: {
        width: actuatedNormalizeWidth(0),
        height: actuatedNormalizeHeight(6),
      },
      shadowRadius: 2,
    },

    tabImageStyle: {
      alignSelf: 'center',
      height: actuatedNormalizeHeight(24),
      marginTop: actuatedNormalizeHeight(3),
      marginLeft: actuatedNormalizeWidth(9),
      width: actuatedNormalizeWidth(24),
    },
  });
export default styles;
