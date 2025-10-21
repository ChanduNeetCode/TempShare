/* eslint-disable linebreak-style */
import { Platform, StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import { actuatedNormalizeHeight, actuatedNormalizeModerateScale, actuatedNormalizeWidth } from '../../../utils/utility';
import { FontWeight } from '../../../utils/enums';
import typography from '../../../atoms/typography';

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
      marginTop: actuatedNormalizeHeight(8),
      shadowColor: '#000',
      shadowOffset: {
        width: actuatedNormalizeWidth(1),
        height: actuatedNormalizeHeight(1),
      },
      shadowOpacity: 0.1,
      shadowRadius: actuatedNormalizeModerateScale(16),
      width: actuatedNormalizeWidth(328),
    },

    disabledMainView: {
      alignSelf: 'center',
      backgroundColor: colors.CoolGrey100,
      borderColor: colors.CoolGrey100,
      borderWidth: actuatedNormalizeWidth(1),
      borderRadius: actuatedNormalizeModerateScale(16),
      elevation: 3,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: actuatedNormalizeHeight(8),
      width: '92%',
    },

    helpText: {
      fontSize: actuatedNormalizeModerateScale(10),
      fontWeight: FontWeight._500,
      lineHeight: actuatedNormalizeHeight(12),
      letterSpacing: actuatedNormalizeModerateScale(0.25),
      marginTop: actuatedNormalizeHeight(8),
      textAlign: 'left',
    },

    input: {
      alignSelf: 'center',
      color: colors.NeutralGrey140,
      fontSize: actuatedNormalizeModerateScale(16),
      fontWeight: FontWeight._400,
      lineHeight: actuatedNormalizeHeight(20),
      letterSpacing: actuatedNormalizeModerateScale(0.5),
      paddingRight: actuatedNormalizeWidth(10),
    },
    labelText: {
      color: colors.NeutralGrey140,
      fontSize: actuatedNormalizeModerateScale(14),
      fontWeight: FontWeight._600,
      lineHeight: actuatedNormalizeHeight(16),
      letterSpacing: actuatedNormalizeModerateScale(0.25),
      marginLeft: actuatedNormalizeWidth(10),
      marginTop: actuatedNormalizeHeight(20)
    },

    leftIconStyle: {
      alignSelf: 'center',
      marginLeft: actuatedNormalizeWidth(16),
      width: actuatedNormalizeWidth(20),
      height: actuatedNormalizeHeight(20)
    },

    mainView: {
      alignSelf: 'center',
      backgroundColor: colors.White,
      borderColor: colors.White,
      borderRadius: actuatedNormalizeModerateScale(16),
      borderWidth: actuatedNormalizeWidth(1),
      elevation: 3,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: actuatedNormalizeHeight(8),
      width: '92%',

    },

    rightIconStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'center',
      paddingVertical: Platform.OS === 'ios' ? actuatedNormalizeHeight(10) : actuatedNormalizeHeight(0),
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
    textIconStyle: {
      fontWeight: Platform.OS === 'ios' ? '300' : '600',
      fontSize: actuatedNormalizeModerateScale(12),
      lineHeight: actuatedNormalizeHeight(16),
      letterSpacing: actuatedNormalizeModerateScale(0.25),
      marginRight: actuatedNormalizeWidth(5),
    },
    textInputStyle: {
      ...typography.BodyRegular1,
      alignSelf: 'center',
      color: colors.NeutralGrey140,
      position: "absolute",
      width: '100%',
    },
    textInputWrapper: {
      width: '90%',
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      justifyContent: 'center',
      padding: 10,
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',

    },

    contextMenu: {
  
      backgroundColor: '#fff',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      flexDirection: 'row',
      position:'absolute',
      marginTop:3
    },
    menuItem: {
      padding: 10,
    },

  });

export default styles;
