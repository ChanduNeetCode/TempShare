import { StyleSheet } from 'react-native';

import {colors,typography} from '../../../atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    bodySemiBold1:{
      ...typography.BodySemiBold1,
      color:colors.NeutralGrey140
    },
    closeContent: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      paddingBottom: actuatedNormalizeHeight(10),
      paddingTop: actuatedNormalizeHeight(20),
    },
    closeContentChild: {
       height: actuatedNormalizeHeight(2),
       width: actuatedNormalizeWidth(40),
    },
    iconFloat: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderRadius: actuatedNormalizeWidth(50 / 2),
      height: actuatedNormalizeWidth(50),
      justifyContent: 'center',
      width: actuatedNormalizeWidth(50),
    },
    indicativeTitleStyle: {
      ...typography.BodySemiBold1,
      alignSelf: 'center',
      color:colors.NeutralGrey140,
      textAlign: 'center',
    },
    modalContainer: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex:0.2,
      justifyContent: 'center',
    },
    modalContent: {
      backgroundColor: colors.White,
      borderTopLeftRadius: actuatedNormalizeWidth(24),
      borderTopRightRadius: actuatedNormalizeWidth(24),
      marginTop: 'auto',
      paddingBottom: actuatedNormalizeHeight(5),
      paddingHorizontal: actuatedNormalizeWidth(10),
    },
    modalTouchableStyle: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
      height: '100%',
    },
    statusContent: {
      flexDirection: 'row',
      justifyContent: 'center',
      left: actuatedNormalizeWidth(0),
      paddingTop: actuatedNormalizeHeight(20),
      position: 'absolute',
      right: actuatedNormalizeWidth(0),
      top: actuatedNormalizeHeight(-50),
    },
    subTitleStyle: {
      ...typography.BodyRegular2,
      alignSelf: 'center',
      color:colors.NeutralGrey110,
      marginTop: actuatedNormalizeHeight(8),
      textAlign: 'center',
    },
    titleStyle:{
      columnGap:actuatedNormalizeModerateScale(8),
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      alignContent:'center',
    },
    titlePart2Style:{
      flex:1,
     
    },
    titlePart2StyleWithExpandable:{
      flex:1,
    },
    titleIndicativeContent: {
      justifyContent: 'center',
      paddingTop: actuatedNormalizeHeight(16),
    },
   
  });
export default styles;
