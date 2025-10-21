import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { actuatedNormalizeModerateScale } from '../../../utils/utility';
import {typography,colors} from '../../../atoms';

const styles = () =>
  StyleSheet.create({
    amtTextStyle: {
      ...typography.BodySemiBold2,
      alignItems: 'flex-end',
      color: colors.NeutralGrey150,
      justifyContent: 'flex-end',
    },
    containerWithHeader: {
      alignItems: 'center',
      backgroundColor: colors.White,
      borderRadius: actuatedNormalizeModerateScale(24),
      flexDirection: 'row',
      marginTop: actuatedNormalizeHeight(15),
      paddingHorizontal: actuatedNormalizeWidth(16),
    },
    containerWithoutHeader: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: actuatedNormalizeHeight(15),
    },
    dateTextStyle: {
      ...typography.BodyRegular3,
      alignItems: 'flex-end',
      color: colors.NeutralGrey110,
      justifyContent: 'flex-end',
    },
    headingContainerStyle: {
      flex: 1,
      flexDirection: 'column',
      gap: actuatedNormalizeHeight(4),
      justifyContent: 'center',
    },
    headingTextStyle: {
      ...typography.BodySemiBold2,
      color: colors.NeutralGrey150,
      justifyContent: 'flex-start',
      marginRight: actuatedNormalizeWidth(4),
    },
    leftIconDefaultBGC: {
      color: colors.CoolGrey100,
    },
    leftIconHightlightBGC: {
      color: colors.White,
    },
    leftIconStyle: {
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: actuatedNormalizeModerateScale(8),
      height: actuatedNormalizeHeight(40),
      justifyContent: 'center',
      marginRight: actuatedNormalizeWidth(12),
      width: actuatedNormalizeWidth(40),
    },
    listEndTitleStyle: {
      color: colors.NeutralGrey110,
    },
    listHeaderContainerStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: actuatedNormalizeHeight(24),
    },
    listTitleStyle: {
      color: colors.NeutralGrey150,
      flex: 1,
      justifyContent: 'flex-end',
    },
    nameContainer: {
      flexDirection: 'row',
    },
    refreshIconStyle: {
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginHorizontal: actuatedNormalizeWidth(10),
      marginTop: actuatedNormalizeHeight(20),
    },
    renderContainerStyle: {
      flexDirection: 'row',
      minHeight: actuatedNormalizeHeight(64),
    },
    rightContainerStyle: {
      alignItems:'flex-end',
      flexDirection: 'column',
      gap: actuatedNormalizeHeight(4),
      justifyContent: 'center',
    },
    rightIconHighlight: {
      color: colors.GreyWithOpacity,
    },
    rightIconStyle: {
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: actuatedNormalizeModerateScale(12),
      height: actuatedNormalizeHeight(24),
      justifyContent: 'center',
      marginLeft: actuatedNormalizeWidth(12),
      width: actuatedNormalizeWidth(24),
    },
    separator: {
      borderColor: colors.PastelAmber100,
      borderWidth: 1,
      marginHorizontal: actuatedNormalizeWidth(10),
    },
    starImageStyle: {
      height: actuatedNormalizeHeight(20),
      width: actuatedNormalizeWidth(30),
    },
    subLineTextStyles: {
      ...typography.BodyRegular3,
      color: colors.NeutralGrey110,
      justifyContent: 'flex-start',
    },
    touch: {
      height: '100%',
      position: 'absolute',
      width: '50%',
      zIndex: 1,
    },
    touchableStyle: {
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: actuatedNormalizeWidth(30),
      height: actuatedNormalizeWidth(30),
      justifyContent: 'center',
      marginHorizontal: actuatedNormalizeWidth(10),
      width: actuatedNormalizeWidth(30),
    },
  });
export default styles;