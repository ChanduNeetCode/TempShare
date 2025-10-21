import { StyleSheet } from 'react-native';

import typography from '../../../atoms/typography/index';
import colors from '../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    activeDotStyle: {
      backgroundColor: colors.PrimaryOrange100,
      borderRadius: actuatedNormalizeWidth(5),
      height: actuatedNormalizeWidth(8),
      marginHorizontal: actuatedNormalizeWidth(8),
      width: actuatedNormalizeWidth(8),
    },
    backButton: {
      backgroundColor: colors.NeutralGrey60,
      height: actuatedNormalizeHeight(32),
      marginHorizontal: actuatedNormalizeWidth(0),
      width: actuatedNormalizeWidth(96),
    },
    buttonStyle: {
      flexDirection: 'row',
      gap: actuatedNormalizeWidth(7),
      justifyContent: 'center',
      marginHorizontal: actuatedNormalizeWidth(12),
    },
    container: {
      alignContent: 'center',
      borderRadius: actuatedNormalizeModerateScale(16),
      height: actuatedNormalizeHeight(180),
      justifyContent: 'space-between',
      paddingVertical: actuatedNormalizeHeight(24),
      paddingHorizontal: actuatedNormalizeWidth(16),
      padding: actuatedNormalizeModerateScale(16),
      width: actuatedNormalizeWidth(225),
    },
    dotsViewStyling: {
      justifyContent: 'center',
      height: actuatedNormalizeHeight(8),
      marginLeft: actuatedNormalizeWidth(76),
      width: actuatedNormalizeWidth(40),
    },
    gradiantWithImageBackButton: {
      borderWidth: 1,
      borderColor: colors.White,
      height: actuatedNormalizeHeight(32),
    },
    gradiantWithImageContainer: {
      backgroundColor: colors.GradientOrangeStart,
      borderRadius: actuatedNormalizeModerateScale(16),
      flex: 1,
      height: actuatedNormalizeHeight(300),
      overflow: 'visible',
      width: actuatedNormalizeWidth(225),

    },
    inactiveDotStyle: {
      backgroundColor: colors.GreyWithOpacity,
      borderRadius: actuatedNormalizeWidth(5),
      height: actuatedNormalizeWidth(8),
      width: actuatedNormalizeWidth(8),
    },
    linearBackButton: {
      ...typography.BodySemiBold1,
      borderColor: colors.White,
      borderWidth: actuatedNormalizeWidth(1),
      height: actuatedNormalizeHeight(32),
      width: actuatedNormalizeWidth(96),
    },
   
    linearMainContainer: {
      borderColor: 'transparent',
      borderRadius: actuatedNormalizeModerateScale(16),
      backgroundColor: colors.GradientOrangeStart,
      flex: 1,
      height: actuatedNormalizeHeight(180),
      justifyContent: 'space-between',
      overflow: 'visible',
      width: actuatedNormalizeWidth(225),
    },
    linearNextButton: {
      ...typography.BodySemiBold1,
      backgroundColor: colors.White,
      height: actuatedNormalizeHeight(32),
    },
    mainContainer: {
      alignContent: 'space-between',
      borderRadius: actuatedNormalizeModerateScale(16),
      borderWidth: 1,
      borderColor: 'transparent',
      backgroundColor: colors.White,
      flex: 1,
      height: actuatedNormalizeHeight(180),
      justifyContent: 'space-between',
      overflow: 'visible',
      paddingVertical: actuatedNormalizeHeight(24),
      paddingHorizontal: actuatedNormalizeWidth(16),
      width: actuatedNormalizeWidth(225),
    },
    nextButton: {
      height: actuatedNormalizeHeight(32),
    },
   
    iconStyle: {
      left: actuatedNormalizeWidth(209),
      position: 'absolute',
      top: actuatedNormalizeHeight(-6.89),
    },
    imageStyle: {
      alignItems: 'stretch',
      borderTopLeftRadius: actuatedNormalizeModerateScale(16),
      borderTopRightRadius: actuatedNormalizeModerateScale(16),
      flex: 1,
      flexDirection: 'row',
      height: actuatedNormalizeHeight(127),
      overflow: 'hidden',
      width: actuatedNormalizeWidth(225),
    },
    imageContainer: {
      display: 'flex',
    },
    imageGradiantContainer: {
      borderBottomLeftRadius: actuatedNormalizeModerateScale(16),
      borderBottomRightRadius: actuatedNormalizeModerateScale(16),
      height: actuatedNormalizeHeight(92),
      width: actuatedNormalizeWidth(225),

    },
    textStyle: {
      ...typography.BodyRegular2,
      marginHorizontal: actuatedNormalizeWidth(16),
      textAlign: 'center',

    },
    textImgStyle: {
      ...typography.BodyRegular2,
      margin: actuatedNormalizeWidth(16),
      textAlign: 'center',

    },
    withImageTextStyle: {
      ...typography.BodyRegular2,
      marginHorizontal: actuatedNormalizeWidth(16),
      marginTop: actuatedNormalizeHeight(17),
      textAlign: 'center',

    },
    withImageNextButton: {
      height: actuatedNormalizeHeight(32),
    },
    withImageBackButton: {
      height: actuatedNormalizeHeight(32),
      marginHorizontal: actuatedNormalizeWidth(0),
    },
    
    withImageGradiantcontainer: {
      alignContent: 'center',
      borderTopLeftRadius: actuatedNormalizeModerateScale(16),
      height: actuatedNormalizeHeight(300),
      width: actuatedNormalizeWidth(225),
    },
   
    withImageDotsViewStyling: {
      justifyContent: 'center',
      height: actuatedNormalizeHeight(8),
      marginVertical: actuatedNormalizeHeight(16),
      marginLeft: actuatedNormalizeWidth(92),
      width: actuatedNormalizeWidth(40),
    },
   
    withImageContainer: {
      borderRadius: actuatedNormalizeModerateScale(16),
      borderWidth: 1,
      borderColor: colors.NeutralGrey60,
      flex: 1,
      height: actuatedNormalizeHeight(300),
      overflow: 'visible',
      width: actuatedNormalizeWidth(225),

    },
   
   
   
    withImageButtonStyle: {
      flexDirection: 'row',
      gap: actuatedNormalizeWidth(8),
      justifyContent: 'center',
      marginHorizontal: actuatedNormalizeWidth(12),
      marginBottom: actuatedNormalizeHeight(24),
    },
  });
export default styles;
