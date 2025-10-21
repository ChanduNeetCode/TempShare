/*eslint linebreak-style: ["error", "windows"]*/
import { StyleSheet } from 'react-native';

import {colors,typography} from '../../../atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { font } from '../../../atoms';

const styles = () =>
  StyleSheet.create({
    buttonParentStyle: {
      flexDirection: 'row',
      top: actuatedNormalizeHeight(10)
    },
    containedStateStyle: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: 'rgba(231, 232, 233, 0.1)',
      borderColor: colors.PastelAmber100,
      borderRadius: actuatedNormalizeWidth(16),
      borderWidth: actuatedNormalizeWidth(1),
      height: actuatedNormalizeHeight(152),
      padding: actuatedNormalizeWidth(16),
      width: actuatedNormalizeWidth(328)
    },
    secondaryButtonStyle: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      lineHeight: actuatedNormalizeHeight(20)
    },
    secondaryButtonText: {
      ...typography.ButtonSmall,
      color: colors.PrimaryOrange100,
      marginHorizontal: actuatedNormalizeWidth(2),
      textAlign: 'center'
    },
    sublineTextStyle: {
      color: colors.NeutralGrey110,
      fontSize: actuatedNormalizeModerateScale(14),
      fontWeight: '400',
      lineHeight: actuatedNormalizeHeight(20),
      paddingTop:actuatedNormalizeHeight(4),
      textAlign: 'center'
    },
    titleTextStyle: {
      color: colors.NeutralGrey140,
      fontSize: actuatedNormalizeModerateScale(16),
      fontFamily: font.MulishSemiBold,
      fontWeight: '600',
      lineHeight: actuatedNormalizeHeight(20),
      paddingTop:actuatedNormalizeHeight(12),
      textAlign: 'center',
    },
    imageStyle: {
      alignSelf: 'center',
      height: actuatedNormalizeHeight(38),
      marginVertical: actuatedNormalizeHeight(10),
      width: actuatedNormalizeWidth(38)
    },
  });

export default styles;
