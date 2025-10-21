/*eslint linebreak-style: ["error", "windows"]*/
import { StyleSheet } from 'react-native';

import {colors,typography} from '../../../atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    buttonStyle:{
      ...typography.ButtonLarge,
      color: 'white',
      textAlign: 'center',
  },
    container: {
      alignItems:'center',
      backgroundColor: colors.White,
    },
 
    imageStyle: {
      alignSelf: 'center',
      height:actuatedNormalizeHeight(38),
      marginVertical:actuatedNormalizeHeight(10),
      width:actuatedNormalizeWidth(38),
    },
    stateStyle: {
      alignContent: 'center',
      alignItems: 'center',
      height:actuatedNormalizeHeight(150),
      justifyContent: 'center',
    },
    sublineTextStyle: {
      color: colors.NeutralGrey110,
      fontSize: actuatedNormalizeModerateScale(14),
      fontWeight: '400',
      lineHeight:actuatedNormalizeHeight(20),
      textAlign: 'center',
    },
    secondaryButtonStyle: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      lineHeight:actuatedNormalizeHeight(20),
    },
    secondaryButtonText: {
      ...typography.ButtonSmall,
      color: colors.PrimaryOrange100,
      marginHorizontal:actuatedNormalizeWidth(5),
      textAlign: 'center',
    },
    titleTextStyle: {
      color: colors.NeutralGrey140,
      fontSize:actuatedNormalizeModerateScale(16),
      fontWeight: '600',
      lineHeight:actuatedNormalizeHeight(20),
      textAlign: 'center',
    },
  });

export default styles;
