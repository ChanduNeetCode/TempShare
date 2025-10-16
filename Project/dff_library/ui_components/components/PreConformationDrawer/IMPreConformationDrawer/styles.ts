import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { typography, colors } from '../../../atoms';

const styles = () =>
  StyleSheet.create({
    amountContainerStyle: {
      alignSelf: 'center',
      flexDirection: 'row',
      height: actuatedNormalizeHeight(36),
      justifyContent: 'flex-start',
      marginTop: actuatedNormalizeHeight(4),
      width: actuatedNormalizeWidth(89),
    },
    amountTextStyle: {
      ...typography.rupeeTextStyle,
      color: colors.NeutralGrey140,
      textAlign: 'center',
      paddingRight: actuatedNormalizeWidth(2),
    },
    buttonStyleProp: {
      borderWidth:actuatedNormalizeWidth(0),
      borderRadius: actuatedNormalizeWidth(16),
      height: actuatedNormalizeHeight(64),
      width: actuatedNormalizeWidth(328),
    },
    containerStyle: {
      elevation: 1,
      height: actuatedNormalizeHeight(243),
      margin: actuatedNormalizeWidth(0),
      paddingBottom: actuatedNormalizeHeight(0),
      shadowColor: 'rgb(0.837,  0.844,  0.872)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.14,
      shadowRadius: 5,
      width: actuatedNormalizeWidth(328),
    },
    closeButtonStyle: {
      alignItems: 'center',
      alignSelf: 'flex-end',
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: actuatedNormalizeWidth(24),
      height: actuatedNormalizeWidth(32),
      justifyContent: 'center',
      width: actuatedNormalizeWidth(32),
    },
    containerItemAboveStyle: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-start',
    },
    date: {
      ...typography.GcaAlphabetStyle,
      color: colors.NeutralGrey150,
      letterSpacing: actuatedNormalizeWidth(0.25),
      textAlign: 'center',
    },
    dateViewStyle: {
      gap: actuatedNormalizeHeight(4),
    },
    disclaimerBoxStyle: {
      position: 'absolute',
      top: actuatedNormalizeHeight(308),
      marginVertical: actuatedNormalizeHeight(16),
    },
    defaultTextStyleProps: {
      ...typography.BodyRegular3,
      color: colors.NeutralGrey150,
      textAlign: 'center',
    },
    defaultContainerStyleProps: {
      width: actuatedNormalizeWidth(328),
      minHeight: actuatedNormalizeHeight(48),
    },
    disclaimerContainStyle: {
      alignSelf:'center',
      position: 'absolute',
      top:actuatedNormalizeHeight(65),
    },
    dottedLinesContainerStyle: {
      marginTop: actuatedNormalizeHeight(12),
      marginBottom: actuatedNormalizeHeight(21.5),
    },
    dottedRightCircleStyle: {
      backgroundColor: colors.GradientOrangeEnd,
    },
    bankTextStyle: {
      ...typography.LinkSemiBold,
      color: colors.NeutralGrey110,
      letterSpacing: actuatedNormalizeWidth(0.25),
      textAlign: 'center',
    },
    modalParentStyle: {
      backgroundColor: 'rgba(0,0,0,0.7)',
      flex: 1,
    },
    modalChildStyle: {
      backgroundColor: colors.White,
      borderTopLeftRadius: actuatedNormalizeWidth(20),
      borderTopRightRadius: actuatedNormalizeWidth(20),
      paddingBottom: actuatedNormalizeHeight(20),
      height: actuatedNormalizeHeight(486),
    },
    modalTouchableStyle: {
      flex: 1,
      height: '100%',
    },
    middleContainerStyle: {
      alignItems: 'center',
      flexDirection: 'column',
      height: actuatedNormalizeHeight(109),
    },
    modalHeightStyle: {
      height: actuatedNormalizeHeight(476),
      paddingLeft: actuatedNormalizeHeight(24),
    },
    onDateText: {
      ...typography.LinkSemiBold,
      color: colors.NeutralGrey110,
      marginLeft: actuatedNormalizeWidth(141),
      marginTop: actuatedNormalizeHeight(8),
    },
    paymentCtaStyle: {
      position: 'absolute',
      bottom: actuatedNormalizeHeight(24),
      alignSelf: 'center',
    },
    payingAmountContainStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    payingTextStyle: {
      ...typography.LinkSemiBold,
      color: colors.NeutralGrey110,
      marginTop: actuatedNormalizeHeight(14),
      textAlign: 'center',
    },
    receiverDetailsStyle: {
      alignItems: 'center',
      gap: actuatedNormalizeHeight(4),
      height: actuatedNormalizeWidth(40),
      justifyContent: 'center',
      width: actuatedNormalizeWidth(141),
    },
    rupeeTextStyle: {
      ...typography.rupeeTextStyle,
      color: colors.NeutralGrey110,
      fontSize: actuatedNormalizeWidth(16),
      marginTop: actuatedNormalizeHeight(4),
      paddingLeft: actuatedNormalizeWidth(2),
    },
    payerBankName: {
      ...typography.LinkSemiBold,
      color: colors.NeutralGrey140,
      marginTop: actuatedNormalizeHeight(12),
      textAlign: 'center',
    },
    rctNameTextStyle: {
      ...typography.ButtonSmall,
      color: colors.NeutralGrey150,
      lineHeight: actuatedNormalizeHeight(20),
      textAlign: 'center',
    },
    receiverBankDetailsStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      gap: actuatedNormalizeHeight(3),
    },
    taxTextStyle: {
      ...typography.BodyRegular3,
      color: colors.NeutralGrey140,
      marginTop: actuatedNormalizeHeight(4),
      textAlign: 'center',
    },
    titleStyle: {
      ...typography.Gcatitle,
      alignContent: 'center',
      color: colors.White,
      letterSpacing: actuatedNormalizeWidth(-0.2),
    },
    titleContainerStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      height: actuatedNormalizeHeight(32),
      marginLeft: actuatedNormalizeWidth(24),
      marginRight: actuatedNormalizeWidth(16),
      marginTop: actuatedNormalizeHeight(16),
      width: actuatedNormalizeWidth(320),
    },
  });
export default styles;
