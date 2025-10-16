import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import {colors,typography} from '../../../atoms';

const styles = StyleSheet.create({
    centeredMainView: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
      justifyContent: 'flex-end',
    },
    centeredView: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    centerIconPosition: {
      position: 'absolute',
    },
    centerIconStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: actuatedNormalizeHeight(70),
      marginBottom: actuatedNormalizeHeight(5),
    },
    childViewStyle: {
      flexDirection: 'column',
    },
    informationAreaStyle: {
      backgroundColor: colors.White,
    },
    modelLAndRRadius: {
      borderTopLeftRadius: actuatedNormalizeModerateScale(25),
      borderTopRightRadius: actuatedNormalizeModerateScale(25),
      overflow:"hidden",
    },
    modelLeftTopConerStyle: {
      bottom: 0,
      left: actuatedNormalizeWidth(4),
      position: 'absolute',
      top: actuatedNormalizeHeight(2),
      borderTopLeftRadius: actuatedNormalizeHeight(14),
      overflow:'hidden'
    },
    modalTouchableStyle: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
      height: '100%',
    },
    rightIconStyle: {
      bottom: 0,
      position: 'absolute',
      right: actuatedNormalizeWidth(4),
      top: actuatedNormalizeHeight(2),
      borderTopRightRadius: actuatedNormalizeHeight(14),
      overflow:'hidden'
    },
    subTitleStyle:{
      ...typography.AccordionTitleRegular,
      color:colors.White,
      marginTop:actuatedNormalizeHeight(8),
      textAlign:'center',
    },
    textViewStyle: {
      marginTop: actuatedNormalizeHeight(14),
      marginHorizontal: actuatedNormalizeWidth(16),
    },
    titleStyle:{
      ...typography.miniSuccessPageTitle,
      color:colors.White,
      textAlign:'center',
    }
  });
export default styles;
