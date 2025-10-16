import { StyleSheet } from 'react-native';

import {colors,typography} from '../../../atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale
} from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    buttonParentViewStyle: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    buttonStyle: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    buttonTxtStyle: {
      ...typography.SubTitleRegular2,
      color: colors.White,
      marginLeft: actuatedNormalizeWidth(4),
    },
    buttonViewStyle: {
      backgroundColor: colors.GradientOrangeStart,
      borderBottomLeftRadius: actuatedNormalizeModerateScale(12),
      borderBottomRightRadius: actuatedNormalizeModerateScale(12),
      flexDirection: 'row',
      height: actuatedNormalizeHeight(52),
      justifyContent: 'space-evenly',
    },
    circleImgStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      left: actuatedNormalizeWidth(0),
      position: 'absolute',
      right: actuatedNormalizeWidth(0),
      top: actuatedNormalizeHeight(-15),
    },
    iconSize:{
      height:actuatedNormalizeWidth(42),
      width:actuatedNormalizeWidth(42),
    },
    iconStyles: {
      alignItems: 'center',
      borderColor:colors.success80,
      borderRadius:actuatedNormalizeWidth(23),
      borderWidth:actuatedNormalizeWidth(3),
      height:actuatedNormalizeWidth(45),
      justifyContent: 'center',
      width:actuatedNormalizeWidth(45),
    },
    ticketContainer: {
      backgroundColor:' colors.White',
      borderBottomLeftRadius: actuatedNormalizeModerateScale(12),
      borderBottomRightRadius: actuatedNormalizeModerateScale(12),
      marginVertical: actuatedNormalizeHeight(15),
      minHeight: actuatedNormalizeHeight(160),
    },
    verticalLineStyle: {
      borderColor: colors.White,
      borderWidth: actuatedNormalizeModerateScale(0.5),
      height: actuatedNormalizeHeight(20),
    },
    verticalLineViewStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    zigzagImgStyle: {
      flex: 1,
      flexDirection: 'row',
      marginTop: actuatedNormalizeHeight(-4),
      maxHeight: actuatedNormalizeHeight(10),
      overflow:'hidden'
    },
    zigzagLeftStyle: {
     // flex: 0.15,
    },
    zigzagRightStyle: {
      flex: 0.1,
    },
  });
export default styles;
