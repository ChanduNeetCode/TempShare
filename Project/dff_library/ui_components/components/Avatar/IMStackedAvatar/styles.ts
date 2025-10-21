import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeWidth,
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
} from '../../../utils/utility';
import { colors } from '../../../atoms';

const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginHorizontal: actuatedNormalizeWidth(10),
      marginTop:actuatedNormalizeHeight(30),
    },

    countContainer: {
      alignItems: 'center',
      borderRadius: actuatedNormalizeWidth(20),
      height: actuatedNormalizeWidth(40),
      justifyContent: 'center',
      marginLeft: actuatedNormalizeWidth(-35),
      width: actuatedNormalizeWidth(40),
    },

    countText: {
      color: colors.White,
      fontSize: actuatedNormalizeModerateScale(18),
      fontWeight: 'bold',
    },

    imageStyles: {
      height: actuatedNormalizeHeight(40),
      width: actuatedNormalizeWidth(40),
    },

    stackedAvatarContainer: {
      marginLeft: actuatedNormalizeWidth(-35),
    },

    stackedAvatarMarginLeft1: {
      marginLeft: actuatedNormalizeWidth(-10),
    },
  });

export default styles;
