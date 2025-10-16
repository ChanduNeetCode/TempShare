import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import { actuatedNormalizeHeight,actuatedNormalizeWidth } from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    centerContainerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    circularImageStyle: {
      alignItems: 'center',
      backgroundColor: 'red',
      borderRadius: actuatedNormalizeWidth(30),
      height: actuatedNormalizeWidth(60),
      justifyContent: 'center',
      marginTop: -actuatedNormalizeHeight(80),
      width: actuatedNormalizeWidth(60),
      top:actuatedNormalizeHeight(40),
    },
    containerItemStyle: {
      alignItems: 'center',
      borderRadius: actuatedNormalizeWidth(16),
      backgroundColor: 'white',
      height: actuatedNormalizeHeight(32),
      justifyContent: 'center',
      marginLeft: actuatedNormalizeWidth(16),
      width: actuatedNormalizeWidth(32),
    },
    containerStyle: {
      justifyContent: 'center',
      marginLeft: actuatedNormalizeWidth(12),
      rowGap:actuatedNormalizeHeight(4),
    },
    descriptionStyle: {
      color: colors.NeutralGrey110,
      marginTop:actuatedNormalizeHeight(8),
      marginBottom: actuatedNormalizeHeight(16),
      marginHorizontal:actuatedNormalizeWidth(16),
      textAlign: 'center',
    },
    itemTouchableStyle: {
      backgroundColor: 'rgba(232,236,240,0.2)',
      borderRadius: actuatedNormalizeWidth(16),
      flexDirection: 'row',
      alignItems:'center',
      marginTop: actuatedNormalizeWidth(8),
      minHeight:actuatedNormalizeHeight(64),
      width:actuatedNormalizeWidth(328),      
    },
    modalChildStyle: {
      backgroundColor: colors.White,
      borderTopLeftRadius: actuatedNormalizeWidth(30),
      borderTopRightRadius: actuatedNormalizeWidth(30),
      marginTop: 'auto',
      minHeight:actuatedNormalizeHeight(358),
      width:actuatedNormalizeWidth(360),
      alignItems:'center',
      flex:1
    },
    modalParentStyle: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      // flex: 1,
    },
    modalTouchableStyle: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
      height: '100%',
    },
    renderItemDescription: {
      color: colors.NeutralGrey110,
    },
    renderItemTitle: {
      color: colors.NeutralGrey150,
    },
    titleStyle: {
      color: colors.NeutralGrey140,
      marginTop: actuatedNormalizeHeight(44),
      textAlign: 'center',
    },
  });
export default styles;
