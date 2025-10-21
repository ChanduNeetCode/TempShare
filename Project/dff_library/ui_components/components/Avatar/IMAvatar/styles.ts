import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeWidth,
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
} from '../../../utils/utility';
import { typography } from '../../../atoms';

const styles = () =>
  StyleSheet.create({
    avatarContainer: {
      alignItems: 'center',
      borderRadius: actuatedNormalizeWidth(20),
      height: actuatedNormalizeWidth(40),
      justifyContent: 'center',
      width: actuatedNormalizeWidth(40),
    },

    avatarimage: {
      alignItems: 'center',
      height: actuatedNormalizeHeight(40),
      justifyContent: 'center',
      width: actuatedNormalizeWidth(40),
    },

    badgeImage: {
      backgroundColor: 'white',
      borderColor: colors.CoolGrey100,
      borderRadius: actuatedNormalizeModerateScale(10),
      borderWidth: actuatedNormalizeModerateScale(1),
      height: actuatedNormalizeHeight(20),
      left: actuatedNormalizeWidth(28),
      marginRight: actuatedNormalizeWidth(4),
      position: 'absolute',
      top: actuatedNormalizeHeight(-4),
      width: actuatedNormalizeWidth(20),
    },

    badgeImageLetter: {
      alignItems: 'center',
      position: 'absolute',
    },

    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },

    label: {
      ...typography.BodyRegular3,
      alignItems: 'center',
      color: colors.Black,
      marginTop: actuatedNormalizeHeight(8),
      textAlign: 'center',
    },

    letter: {
      fontSize: actuatedNormalizeModerateScale(23),
      textAlign: 'center',
    },
    mainContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight:actuatedNormalizeWidth(6),
      paddingHorizontal: actuatedNormalizeWidth(10), 
    },
  });
export default styles;
