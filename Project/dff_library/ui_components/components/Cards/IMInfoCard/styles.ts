import { StyleSheet, Platform } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale
} from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    type1Style: {
      backgroundColor: colors.PastelAmber100,
      borderRadius: actuatedNormalizeModerateScale(12),
      marginHorizontal: actuatedNormalizeHeight(16),
      width: actuatedNormalizeWidth(328)
    },
    type2Highlight: {
      left: 0,
      marginTop: 0,
      width: actuatedNormalizeWidth(4),

    },
    type3Highlight: {
      backgroundColor: colors.PrimaryOrange100,
      borderBottomLeftRadius: actuatedNormalizeWidth(30),
      borderTopLeftRadius: actuatedNormalizeWidth(30),
      marginBottom: actuatedNormalizeHeight(8),
      marginTop: actuatedNormalizeHeight(8),
      minHeight: actuatedNormalizeHeight(50),
      width: actuatedNormalizeWidth(3),
    },
    type2OuterViewStyle: {
      borderRadius: actuatedNormalizeWidth(16),
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.14,
      shadowRadius: 5,
      shadowColor: 'rgb(0.837,0.844,0.872)',
      width: actuatedNormalizeWidth(328),
    },
    type2Style: {
      backgroundColor: colors.White,
      borderRadius: actuatedNormalizeWidth(16),
      elevation: 5,
      flexDirection: 'row',
      overflow: "hidden",
      width: actuatedNormalizeWidth(328),
    },
    type3Style: {
      backgroundColor: colors.White,
      borderColor: colors.Success100,
      borderRadius: actuatedNormalizeModerateScale(16),
      borderWidth: actuatedNormalizeWidth(1),
      flexDirection: 'row',
      marginHorizontal: actuatedNormalizeHeight(16),
      width: actuatedNormalizeWidth(328),
    },
    LeftImageStyle: {
      justifyContent: 'center',
      marginLeft: actuatedNormalizeWidth(16),
    },
    RightImageStyle: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      right: actuatedNormalizeWidth(16)
    },
    TextStyle: {
      justifyContent: 'center',
      marginLeft: actuatedNormalizeWidth(15),
    },
  });
export default styles;