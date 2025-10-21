import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
  actuatedNormalizeHeight,
} from '../../../utils/utility';
import { colors, typography } from '../../../atoms';

const styles = () =>
  StyleSheet.create({
    avatarFullContainer: {
      marginBottom: actuatedNormalizeHeight(8),
    },

    avatarimageStyle: {
      backgroundColor: colors.White,
      borderRadius: actuatedNormalizeModerateScale(20),
    },

    container: {
      paddingVertical: actuatedNormalizeHeight(16),
      width: actuatedNormalizeWidth(328),
    },

    favouriteheaderStyle: {
      flexDirection: 'row',
    },

    favouriteImage: {
      height: actuatedNormalizeHeight(20),
      width: actuatedNormalizeWidth(20),
    },

    favouriteText: {
      ...typography.ButtonSmall,
      alignSelf: 'center',
      color:colors.NeutralGrey140,
      letterSpacing: 0.1,
      marginLeft: actuatedNormalizeWidth(2),
    },

    imageStyles: {
      height: actuatedNormalizeHeight(40),
      width: actuatedNormalizeWidth(40),
    },

    manageText: {
      ...typography.ButtonSmall,
      alignSelf: 'center',
      color:colors.NeutralGrey140,
    },

    manageView: {
      flexDirection: 'row',
    },

    scrollViewStyles: {
      flexDirection: 'row',
      width: '100%',
    },

    subContainerStyles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: actuatedNormalizeHeight(10),
    },

    viewLessButton: {
      color:colors.White
    }
  });

export default styles;