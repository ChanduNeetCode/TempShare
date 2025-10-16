import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { FontWeight } from '../../../utils/enums';
import { typography,colors } from '../../../atoms';

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
    containerStyleProps: {
      height: actuatedNormalizeHeight(150),
      width: actuatedNormalizeWidth(320),
    },
    flatListContainer: {
      gap: actuatedNormalizeHeight(20),
    },
    footerContainer: {
      bottom: actuatedNormalizeHeight(15),
    },
    headerContainerStyle: {
      flexDirection: 'row',
      marginVertical: actuatedNormalizeHeight(10),
      paddingVertical: actuatedNormalizeHeight(10),
    },
    headerLeftContainerStyle: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
    },
    imageContainerStyle: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: actuatedNormalizeHeight(20),
    },
    icon: {
      alignSelf: 'center',
      backgroundColor: colors.White,
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
      marginTop: actuatedNormalizeHeight(24),
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
      marginTop:actuatedNormalizeHeight(4),
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
      marginLeft: actuatedNormalizeWidth(40),
      alignSelf: 'center',
      marginRight: actuatedNormalizeWidth(4),
    },
    leftIconViewStyle: {
      marginRight: actuatedNormalizeWidth(20),
    },
    mainContainerStyle: {
      borderBottomLeftRadius: actuatedNormalizeWidth(30),
      borderBottomRightRadius: actuatedNormalizeWidth(30),
    },
    modalParentStyle: {
      backgroundColor: colors.White,
      borderBottomLeftRadius: actuatedNormalizeWidth(30),
      borderBottomRightRadius: actuatedNormalizeWidth(30),
      width: '100%',
      position: 'absolute',
    },
    modalTouchableStyle: {
      height: '100%',
      position: 'absolute',
      top: actuatedNormalizeHeight(0),
      width: '100%',
    },
    nameStyle: {
      ...typography.HeadingBold2,
      color: colors.NeutralGrey140,
      fontSize: actuatedNormalizeModerateScale(20),
      letterSpacing:actuatedNormalizeWidth(0.25),
    },
    profileStyle: {
      alignItems: 'center',
      borderRadius: actuatedNormalizeWidth(25),
      borderWidth: actuatedNormalizeWidth(1),
      height: actuatedNormalizeWidth(50),
      justifyContent: 'center',
      marginLeft: actuatedNormalizeWidth(15),
      width: actuatedNormalizeWidth(50),
    },
    rightIconStyle: {
      alignSelf: 'center',
      marginRight: actuatedNormalizeWidth(20),
    },
    seeProfileTextStyle: {
      color: colors.PrimaryOrange100,
    },
    SubText: {
      ...typography.SubTitleBold1,
      color: colors.Black,
      marginLeft: actuatedNormalizeModerateScale(18),
    },
    textContainer: {
      marginTop: actuatedNormalizeModerateScale(50),
    },
    text: {
      ...typography.HeadingBold2,
      color: colors.NeutralGrey140,
      marginLeft: actuatedNormalizeModerateScale(10),
    },
    textContainerStyle: {
      gap: actuatedNormalizeHeight(4),
      marginLeft: actuatedNormalizeWidth(15),
    },
  });
export default styles;
