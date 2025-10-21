import { StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';

const styles = () =>
  StyleSheet.create({
    addressStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: actuatedNormalizeHeight(8),
    },
    amountContainerStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    amountTextStyle: {
      color: colors.NeutralGrey140,
      fontSize: actuatedNormalizeWidth(27.34),
      fontWeight: FontWeight._600,
      marginTop: actuatedNormalizeHeight(4),
    },
    containerStyle: {
      backgroundColor: colors.White,
      borderBottomLeftRadius: actuatedNormalizeWidth(20),
      borderBottomRightRadius: actuatedNormalizeWidth(20),
      borderTopLeftRadius: actuatedNormalizeWidth(20),
      borderTopRightRadius: actuatedNormalizeWidth(20),
      margin: actuatedNormalizeWidth(20),
      paddingBottom: actuatedNormalizeHeight(20),
    },
    dateTextStyle: {
      color: colors.NeutralGrey100,
      fontSize: actuatedNormalizeWidth(14),
      marginTop: actuatedNormalizeHeight(10),
    },
    detailsStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: actuatedNormalizeHeight(16),
    },

    gpayTextStyle: {
      color: colors.Black,
      fontSize: actuatedNormalizeWidth(14.8),
      fontWeight: FontWeight._600,
    },
    kycTextStyle: {
      color: colors.NeutralGrey140,
      fontFamily: 'Mulish',
      fontSize: 10,
      fontWeight: FontWeight._700,
      letterSpacing: 0.12,
      lineHeight: 12,
      textAlign: 'center',
    },

    kycTopStyle: {
      alignItems: 'center',
      backgroundColor: colors.PastelBrown100,
      borderTopLeftRadius: actuatedNormalizeWidth(20),
      borderTopRightRadius: actuatedNormalizeWidth(20),
      justifyContent: 'center',
      paddingVertical: actuatedNormalizeHeight(8),
    },

    labelCapitalRegular: {
      color: colors.NeutralGrey130,
      fontFamily: 'Mulish',
      fontSize: 10,
      fontWeight: FontWeight._400,
      letterSpacing: 1.2,
      lineHeight: 16,
      textAlign: 'center',
    },
    middleContainerStyle: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    panDetailsStyle: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: actuatedNormalizeHeight(16),
    },
    payingAmountContainStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    payingTextStyle: {
      color: colors.NeutralGrey110,
      fontSize: actuatedNormalizeWidth(12.89),
      fontWeight: FontWeight._600,
      marginTop: actuatedNormalizeHeight(12),
    },
    rupeeTextStyle: {
      color: colors.NeutralGrey110,
      fontWeight: FontWeight._600,
      marginTop: actuatedNormalizeHeight(8.57),
    },
    personalTextStyle: {
      color: colors.NeutralGrey130,
      fontFamily: 'Mulish',
      fontSize: 10,
      fontWeight: FontWeight._400,
      lineHeight: 16,
      letterSpacing: 1.2,
      textAlign: 'center',
    },
    personalAddressStyle: {
      color: colors.NeutralGrey130,
      fontFamily: 'Mulish',
      fontSize: 12,
      fontWeight: FontWeight._400,
      lineHeight: 16,
      letterSpacing: 0.25,
      textAlign: 'center',
    },
    ticketViewSeparatorStyle: {
      backgroundColor: colors.GradientOrangeStart,
      flex: 1,
      marginTop: actuatedNormalizeHeight(20),
    },
  });
export default styles;
