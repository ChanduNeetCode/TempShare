import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import colors from '../../../atoms/colors';
import typography from '../../../atoms/typography';

const styles = () =>
  StyleSheet.create({
    accountCardStyle: {
      borderRadius: actuatedNormalizeWidth(16),
      elevation: 12,
      margin: actuatedNormalizeHeight(15),
      marginVertical: actuatedNormalizeHeight(10),
      minHeight: actuatedNormalizeHeight(192),
      shadowOpacity: 0.3,
      shadowColor: 'rgb(213, 215, 222, 0.14)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      overflow: 'hidden',
    },
    accountOuterStyle: {
      position: 'absolute',
      left: actuatedNormalizeWidth(0),
      right: actuatedNormalizeWidth(0),
      bottom: actuatedNormalizeHeight(25),
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    bankStyle: {
      marginHorizontal: actuatedNormalizeWidth(25),
    },
    bottomViewStyle: {
      alignItems: 'flex-end',
      flex: 1,
      right: actuatedNormalizeWidth(25),
      top: actuatedNormalizeHeight(20),
    },
    bodySemiBold3: {
      ...typography.BodySemiBold3,
    },
    buttonSmall: {
      ...typography.ButtonSmall,
      color: colors.White,
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    circleViewStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    depositTextStyle: {
      ...typography.BodySemiBold2,
      color: colors.White,
      flex: 1,
      marginTop: actuatedNormalizeHeight(18),
      marginHorizontal: actuatedNormalizeWidth(24),
      marginBottom: actuatedNormalizeHeight(5),
    },
    depositOuterStyle: {
      position: 'absolute',
      left: actuatedNormalizeWidth(0),
      right: actuatedNormalizeWidth(0),
      bottom: actuatedNormalizeHeight(15),
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    flex: {
      flex: 1,
      gap: actuatedNormalizeHeight(4),
    },
    flexDirection: {
      flexDirection: 'row',
    },
    iconsViewStyle: {
      flexDirection: 'row',
      marginTop: actuatedNormalizeHeight(15),
    },
    height: {
      minHeight: actuatedNormalizeHeight(130),
    },
    imgsViewStyle: {
      flexDirection: 'row',
      marginTop: actuatedNormalizeHeight(15),
      marginRight: actuatedNormalizeWidth(25),
    },
    imageTop: {
      position: 'absolute',
      left: 0,
      top: 0,
    },
    iciciLogoStyles: {
      position: 'absolute',
      top: actuatedNormalizeHeight(24),
      left: actuatedNormalizeWidth(24),
    },
    leftTopImageStyle: {
      position: 'absolute',
      left:0,
      top: -30,
    },
    partnerLogoStyle: {
      marginLeft: actuatedNormalizeWidth(25),
    },
    position: {
      position: 'absolute',
    },
    rightEndFlower: {
      alignItems: 'flex-end',
    },
    savingAcViewStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: actuatedNormalizeHeight(10),
    },
    savingAcTextStyle: {
      ...typography.BodyRegular3,
      color: colors.White,
      flex: 1,
      marginHorizontal: actuatedNormalizeWidth(24),
    },
    settingsStyle: {
      marginRight: actuatedNormalizeWidth(20),
    },
    showBalanceTex: {
      ...typography.BodySemiBold2,
      color: colors.White,
      fontSize: actuatedNormalizeModerateScale(20),
    },
    showBalanceView: {
      alignItems: 'center',
      borderWidth: actuatedNormalizeWidth(1),
      borderRadius: actuatedNormalizeWidth(20),
      borderColor: colors.White,
      height: actuatedNormalizeHeight(32),
      justifyContent: 'center',
      marginHorizontal: actuatedNormalizeWidth(25),
      width: actuatedNormalizeHeight(128),
    },
    showDepositOuterStyle: {
      left: actuatedNormalizeWidth(0),
      right: actuatedNormalizeWidth(0),
      bottom: actuatedNormalizeHeight(15),
      top: actuatedNormalizeHeight(0),
      justifyContent: 'flex-end',
    },
    showStyle: {
      position: 'absolute',
      top: '35%',
    },
    showValueViewStyle: {
      alignItems: 'center',
      borderColor: colors.White,
      borderRadius: actuatedNormalizeWidth(20),
      borderWidth: actuatedNormalizeWidth(1),
      height: actuatedNormalizeHeight(32),
      justifyContent: 'center',
      marginHorizontal: actuatedNormalizeWidth(25),
      top: actuatedNormalizeHeight(20),
      width: actuatedNormalizeWidth(164),
    },
    statementStyle: {
      marginLeft: actuatedNormalizeWidth(10),
      marginRight: actuatedNormalizeWidth(10),
    },
    tripTextStyle1: {
      ...typography.BodySemiBold2,
      color: colors.White,
      marginLeft: actuatedNormalizeWidth(24),
    },
    tripTextStyle2: {
      ...typography.BodyRegular3,
      color: colors.White,
      marginLeft: actuatedNormalizeWidth(24),
    },
    viewStatementLogoStyle: {
      marginLeft: actuatedNormalizeWidth(10),
      marginRight: actuatedNormalizeWidth(10),
    },
  });
export default styles;
