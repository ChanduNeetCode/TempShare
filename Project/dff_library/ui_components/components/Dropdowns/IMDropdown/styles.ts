import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import {typography,colors} from '../../../atoms';

const styles = () =>
  StyleSheet.create({
    container: {
      borderColor: colors.PastelAmber100,
      borderRadius: actuatedNormalizeModerateScale(16),
      flexDirection: 'row',
      height: actuatedNormalizeHeight(45),
      justifyContent: 'space-between',
      paddingLeft: actuatedNormalizeWidth(16),
      paddingRight: actuatedNormalizeWidth(16),
      paddingTop: actuatedNormalizeHeight(10),
      position: 'relative',
      width: actuatedNormalizeWidth(328),
    },
    dropdownButtonStyle: {
      alignItems: 'center',
      backgroundColor: colors.White,
      borderColor: colors.PastelAmber100,
      borderRadius: actuatedNormalizeModerateScale(16),
      borderWidth: actuatedNormalizeWidth(1),
      elevation: 3,
      flexDirection: 'row',
      height: actuatedNormalizeHeight(45),
      justifyContent: 'space-between',
      overflow: 'visible',
      shadowOffset: {
        width: actuatedNormalizeWidth(3),
        height: actuatedNormalizeHeight(4),
      },
      shadowColor: colors._B8BBC7,
      shadowOpacity: 0.28,
      width: actuatedNormalizeWidth(156),
    },
    dropdownButtonInternalStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: actuatedNormalizeWidth(36),
      paddingRight: actuatedNormalizeWidth(16),
    },
    dropDownButtonWithleftText: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
    },
    dropdownItem: {
      height: actuatedNormalizeHeight(28),
      marginLeft: actuatedNormalizeWidth(10),
      marginTop: actuatedNormalizeHeight(12),
    },
    dropdownRowStyle: {
      borderRadius:actuatedNormalizeModerateScale(4),  
      height: '100%',
      width: '100%', 
    },
    dropdownRowTextStyle: {
      alignSelf: 'stretch',
      color: colors.NeutralGrey140,
      textAlign: 'left',
    },
    dropdownStyle: {
      backgroundColor: colors.CoolGrey100,
      borderColor: colors.PastelAmber100,
      borderRadius: actuatedNormalizeModerateScale(8),
      borderWidth: actuatedNormalizeWidth(1),
      elevation: 5,
      overflow: 'visible',
      shadowColor: colors._B8BBC7,
      shadowOffset: {
        width: actuatedNormalizeWidth(3),
        height: actuatedNormalizeHeight(4),
      },
      shadowOpacity: 0.28,
      shadowRadius: 5,
      width: actuatedNormalizeWidth(164),
    },
    flatListDropdown: {
      backgroundColor: 'white',
      borderColor: colors.PastelAmber100,
      borderRadius: actuatedNormalizeModerateScale(8),
      borderWidth: actuatedNormalizeWidth(1),
      height: actuatedNormalizeHeight(200),
      marginTop: actuatedNormalizeHeight(2),
      overflow: 'visible',
      position: 'relative',
      width: actuatedNormalizeWidth(328),
    },
    flatListRowContainer: {
      alignItems:'center',
      height: actuatedNormalizeHeight(28), 
      marginTop:actuatedNormalizeHeight(12),
      paddingBottom:actuatedNormalizeHeight(6),
    },
    floatDropdownStyle: {
      backgroundColor: colors.CoolGrey100,
      borderColor: colors.PastelAmber100,
      borderRadius: actuatedNormalizeModerateScale(8),
      elevation: 3,
      height: actuatedNormalizeHeight(155),
      overflow: 'visible',
      shadowOffset: {
        width: actuatedNormalizeWidth(0),
        height: actuatedNormalizeHeight(4),
      },
      shadowColor: colors._B8BBC7,
      shadowOpacity: 0.14,
      width: actuatedNormalizeWidth(256),
    },
    flatListStyle: {
      marginHorizontal: actuatedNormalizeWidth(16),
    },
    headerStyle: {
      ...typography.BodyRegular1,
      color: colors.NeutralGrey140,
      marginLeft: actuatedNormalizeWidth(-20),
      marginTop: actuatedNormalizeHeight(2),
    },
    input: {
      flex: 1,
      flexDirection: 'row',
      height: actuatedNormalizeHeight(45),
      justifyContent: 'space-between',
    },
    inputContainer: {
      borderRadius: actuatedNormalizeModerateScale(8),
      borderWidth: actuatedNormalizeWidth(1),
      flex: 1,
      flexDirection: 'row',
      height: actuatedNormalizeHeight(45),
      justifyContent: 'space-between',
      paddingLeft: actuatedNormalizeWidth(16),
      paddingRight: actuatedNormalizeWidth(16),
    },
    ItemSeparatorComponentStyle: {
      backgroundColor: colors.PastelAmber100,
      height: actuatedNormalizeHeight(1),
    },
    leftTextStyle: {
      color: colors.NeutralGrey110,
      paddingLeft: actuatedNormalizeWidth(6),
    },
    rowDetailsWithImageStyle: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
    },
    rowDetailsWithImageTextStyle: {
      paddingLeft: actuatedNormalizeWidth(8),
    },
    placeholder: {
      color: colors.NeutralGrey140,
    }, 
  });

export default styles;
