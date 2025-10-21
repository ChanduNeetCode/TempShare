import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale
} from '../../../utils/utility';
import {typography,colors} from '../../../atoms';

const styles = () =>
  StyleSheet.create({
    gif: {
      height: actuatedNormalizeHeight(138),
      width: actuatedNormalizeWidth(138),
    },
    loaderView: {
      alignItems: 'center',
      backgroundColor: colors.White,
      flexDirection: 'row',
      height: '8%',
      justifyContent: 'flex-start',
      paddingLeft: actuatedNormalizeWidth(20),
      width: '90%',
    },
    loadercontainer: {
      alignItems: 'center',
      bottom: actuatedNormalizeHeight(0),
      justifyContent: 'center',
      left: actuatedNormalizeWidth(0),
      position: 'absolute',
      right: actuatedNormalizeWidth(0),
      top: actuatedNormalizeHeight(0),
      zIndex: 1,
    },
    logoStyle: {
      height: actuatedNormalizeHeight(138),
      width: actuatedNormalizeWidth(138),
    },
    parentView: {
      alignItems: 'center',
      backgroundColor: colors.White,
      flexDirection: 'column',
      height: actuatedNormalizeHeight(900),
      justifyContent: 'center',
      width: actuatedNormalizeWidth(360),
    },
    subTitle: {
      ...typography.ButtonLarge,
      color: colors.NeutralGrey130,
      fontSize:actuatedNormalizeModerateScale(14),
      marginHorizontal: actuatedNormalizeWidth(60),
      textAlign: 'center',
    },
    title: {
      ...typography.HeadingBold3,
      color: colors.NeutralGrey140,
      fontSize: actuatedNormalizeModerateScale(18),
      letterSpacing: actuatedNormalizeWidth(0.25),
      lineHeight: actuatedNormalizeModerateScale(28),
      marginBottom:actuatedNormalizeHeight(8),
      marginLeft: actuatedNormalizeWidth(10),
      marginTop:actuatedNormalizeHeight(1),
      textAlign: 'center',
    },
    transparentStyle: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
      height: '100%',
    },
  });

export default styles;
