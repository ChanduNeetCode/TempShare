import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import {  typography,colors } from '../../../atoms';
import { FontWeight } from '../../../utils/enums';

const styles = () =>
  StyleSheet.create({
    absolute: {
      bottom: actuatedNormalizeHeight(0),
      height: '100%',
      left: actuatedNormalizeWidth(0),
      position: 'absolute',
      right: actuatedNormalizeWidth(0),
      top: actuatedNormalizeHeight(0),
    },
    blurEffectStyle: {
      bottom: actuatedNormalizeHeight(0),
      left: actuatedNormalizeWidth(0),
      position: 'absolute',
      right: actuatedNormalizeWidth(0),
      top: actuatedNormalizeHeight(0),
    },
    close: {
      backgroundColor: colors.PrimaryOrange110,
      borderRadius: actuatedNormalizeWidth(18),
      height: actuatedNormalizeWidth(35),
      justifyContent: 'center',
      marginLeft: actuatedNormalizeWidth(310),
      position: 'absolute',
      width: actuatedNormalizeWidth(35),
    },
    closeIconStyle: {
      alignSelf: 'center',
    },
    contextualItemsViewStyle:{
      marginTop:actuatedNormalizeWidth(16)
    },
    flatListContainer: {
      gap: actuatedNormalizeHeight(20),
      height: actuatedNormalizeHeight(120),
    },
    footerContainer: {
      bottom: actuatedNormalizeHeight(15),
    },
    icon: {
      alignSelf: 'center',
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    iconContainer: {
      backgroundColor: colors.White,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginLeft: actuatedNormalizeWidth(16),
      marginRight:actuatedNormalizeWidth(10),
      minWidth: actuatedNormalizeWidth(70),
    },
    iconTitle: {
      ...typography.BodyRegular3,
      alignSelf: 'center',
      backgroundColor: colors.White,
      color: colors.Black,
      lineHeight: actuatedNormalizeHeight(15.06),
      marginTop: actuatedNormalizeModerateScale(15),
      textAlign: 'center',
    },
    line: {
      borderBottomColor: colors.NeutralGrey80,
      borderBottomWidth: actuatedNormalizeWidth(1),
      marginBottom: actuatedNormalizeHeight(0),
      marginHorizontal: actuatedNormalizeWidth(16),
      marginLeft: actuatedNormalizeWidth(20),
      marginRight: actuatedNormalizeWidth(0),
      marginTop: actuatedNormalizeHeight(20),
      width: actuatedNormalizeWidth(320),
    },
    logData: {
      alignItems: 'center',
      gap: actuatedNormalizeWidth(4),
      justifyContent: 'center',
      marginTop: actuatedNormalizeHeight(8),
    },
    logout: {
      ...typography.BodyRegular3,
      color: colors.NeutralGrey130,
      fontWeight: FontWeight._600,
    },
    LastText: {
      ...typography.BodyRegular3,
      color: colors.NeutralGrey110,
      fontWeight: FontWeight._400,
      marginTop: actuatedNormalizeHeight(4),
      textAlign: 'center',
    },
    LastAppText: {
      ...typography.BodyRegular3,
      color: colors.NeutralGrey110,
      textAlign: 'center',
    },
    logoutBox: {
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: actuatedNormalizeHeight(24),
    },
    logoutImage: {
      alignSelf: 'center',
      marginLeft: actuatedNormalizeWidth(40),
      marginRight: actuatedNormalizeWidth(4),
    },
    modalParentStyle: {
      backgroundColor: colors.White,
      borderBottomLeftRadius: actuatedNormalizeWidth(30),
      borderBottomRightRadius: actuatedNormalizeWidth(30),
      gap: actuatedNormalizeHeight(20),
      position: 'absolute',
      width: '100%',
    },
    modalTouchableStyle: {
      height: '100%',
      position: 'absolute',
      top: actuatedNormalizeHeight(0),
      width: '100%',
    },
    marginTop:{
      marginTop:10
    },
    SubText: {
      ...typography.SubTitleBold1,
      color: colors.Black,
      marginLeft: actuatedNormalizeModerateScale(18),
    },
    textContainer: {
      gap: actuatedNormalizeHeight(5),
      marginTop: actuatedNormalizeModerateScale(60),
    },
    text: {
      ...typography.HeadingBold2,
      color: colors.NeutralGrey140,
      marginLeft: actuatedNormalizeModerateScale(10),
    },
  });
export default styles;
