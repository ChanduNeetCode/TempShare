import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    amtTextStyle: {
      alignItems: 'flex-end',
      color: colors.NeutralGrey150,
      justifyContent: 'flex-end',
    },
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: actuatedNormalizeHeight(15),
      marginHorizontal:actuatedNormalizeWidth(15),
    },
    dateTextStyle: {
      alignItems: 'flex-end',
      color: colors.NeutralGrey110,
      justifyContent: 'flex-end',
    },
    headingTextStyle: {
      color: colors.NeutralGrey150,
      justifyContent: 'flex-start',
      marginTop: actuatedNormalizeWidth(2),
    },
    headingContainerStyle: {
      justifyContent: 'center',
      flexDirection: 'column',
      marginVertical: actuatedNormalizeWidth(15),
      flex: 1,
      marginLeft: actuatedNormalizeWidth(20),
    },
    iconStyle: {
      alignItems: 'center',
      alignSelf: 'center',
      height: actuatedNormalizeHeight(10),
      justifyContent: 'center',
      marginLeft: actuatedNormalizeWidth(10),
      width: actuatedNormalizeWidth(20),
    },
    itemSeparateStyle: {
      borderWidth: 1,
      borderColor: colors.NeutralGrey60,
      marginLeft: actuatedNormalizeWidth(10),
      opacity:0.5
    },
    listTitleStyle: {
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      color: colors.NeutralGrey150,
      flex: 1,
      justifyContent: 'flex-end',
    },
    listEndTitleStyle: {
      color: colors.NeutralGrey110,
      justifyContent: 'flex-end',
      textAlign: 'right',
    },
    listHeaderContainerStyle: {
      flexDirection: 'row',
      flex: 1,
      marginVertical: actuatedNormalizeHeight(12),
      marginLeft: actuatedNormalizeWidth(10),
    },
    rightEndText:{ 
      flexDirection: 'column', 
    justifyContent: 'center' ,
    },
    touchableStyle: {
      alignItems: 'center',
      borderRadius: actuatedNormalizeWidth(30),
      justifyContent: 'center',
      alignSelf: 'center',
      height: actuatedNormalizeWidth(30),
      marginHorizontal: actuatedNormalizeWidth(10),
      width: actuatedNormalizeWidth(30),
      
    },
    refreshIconStyle: {
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: actuatedNormalizeHeight(20),
      marginHorizontal: actuatedNormalizeWidth(10),
    },
    renderContainerStyle: {
      flexDirection: 'row',
      
    },
    starImageStyle: {
      height: actuatedNormalizeHeight(20),
      width: actuatedNormalizeWidth(30),
    },
    separator: {
      borderColor: colors.PastelAmber100,
      borderWidth: 0.7,
      marginHorizontal: actuatedNormalizeWidth(10),
      opacity:0.5,
    },
    subLineTextStyles: {
      color: colors.NeutralGrey110,
      justifyContent: 'flex-start',
      marginTop: actuatedNormalizeWidth(5),
    },
    touch: {
      position: 'absolute',
      width: '50%',
      height: '100%',
      zIndex: 1,
    },
  });
export default styles;
