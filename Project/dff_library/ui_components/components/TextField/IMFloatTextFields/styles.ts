import { Platform, StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { colors, typography } from '../../../atoms';
import { FontWeight } from '../../../utils/enums';

const styles = () =>
  StyleSheet.create({
    containerViewStyle: {
      alignSelf: 'center',
      borderRadius: actuatedNormalizeModerateScale(16),
      borderWidth: actuatedNormalizeWidth(1),
      elevation: 3,
      flexDirection: 'row',
      height: actuatedNormalizeHeight(52),
      justifyContent: 'flex-start',
      marginTop: actuatedNormalizeHeight(30),
      shadowColor: '#000',
      shadowOffset: {
        width: actuatedNormalizeWidth(1),
        height: actuatedNormalizeHeight(1),
      },
      shadowOpacity: 0.1,
      shadowRadius: actuatedNormalizeModerateScale(10),
      width: actuatedNormalizeWidth(328),
    },
    helpTextContainer: {
      flexDirection: 'row',
      marginTop: actuatedNormalizeHeight(8),
    },
    helpTextView: {
      alignSelf: 'center',
      position: 'absolute',
      top: actuatedNormalizeHeight(0),
    },
    input: {
      ...typography.BodyRegular1,
      alignSelf: 'center',
      color: colors.NeutralGrey140,
      position: 'absolute',
      width: actuatedNormalizeWidth(328),
    },
    label: {
      fontWeight: FontWeight._400,
      marginRight: actuatedNormalizeWidth(4),
    },
    labelContainer: {
      left: actuatedNormalizeWidth(5),
      paddingVertical:
        Platform.OS === 'ios'
          ? actuatedNormalizeHeight(10)
          : actuatedNormalizeHeight(0),
      position: 'absolute',
    },
    labelText: {
      color: colors.NeutralGrey140,
      ...typography.BodyRegular1,
    },
    leftIconStyle: {
      alignSelf: 'center',
      height: actuatedNormalizeHeight(20),
      marginLeft: actuatedNormalizeWidth(16),
      width: actuatedNormalizeWidth(20),
    },
    rightIconStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'center',
      paddingVertical:
        Platform.OS === 'ios'
          ? actuatedNormalizeWidth(10)
          : actuatedNormalizeWidth(0),
      position: 'absolute',
      right: actuatedNormalizeWidth(0),
    },
    separateLineStyle: {
      backgroundColor: colors.PastelAmber100,
      height: actuatedNormalizeHeight(24),
      left: actuatedNormalizeWidth(0),
      position: 'absolute',
      width: actuatedNormalizeWidth(1),
    },
  });

export default styles;
