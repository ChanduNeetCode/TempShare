import { Platform, StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';
import { font } from '../../../../dff_library/ui_components/atoms/index';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';
export default StyleSheet.create({
  buttonsContainer: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:20
  },
  buttonStyle: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: colors.GradientOrangeEnd,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    height: 40,
  },
  parentViewStyle: {
    backgroundColor: colors.White,
    marginTop: 20,
  },
  tallWidthItem1TextContainer: {
    flexDirection: 'column',
    height: actuatedNormalizeHeight(40),
    marginTop: actuatedNormalizeHeight(20),
    marginLeft: actuatedNormalizeWidth(12),
    width: actuatedNormalizeWidth(160),
  },
  tallWidthItem1TextStyle: {
    color: colors.White,
    textAlign: 'left',
    fontSize: 12,
    fontFamily: font.MulishSemiBold,
    letterSpacing: 0.25,
    lineHeight: 16,
  },

  tallWidthItemButtonContainer: {
    alignItems: 'center',
    borderRadius: 25,
    height: actuatedNormalizeHeight(40),
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? actuatedNormalizeHeight(35) : 20,
    //top:actuatedNormalizeHeight(20),
    width: actuatedNormalizeWidth(106),
  },

  tallWidthItemImageStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  tallWidthItem2SubContainer: {
    height: actuatedNormalizeHeight(20),
    width: actuatedNormalizeWidth(190),
    marginTop: actuatedNormalizeHeight(20),

    flexDirection: 'column',
  },
  tallWidthItem2Header: {
    color: colors._1F1F1F,
    fontSize: 10,
    //fontFamily: font.MulishMedium,
    lineHeight: 10,
    fontWeight: FontWeight._700,
    marginTop: 3,
    textDecorationLine: 'underline',
    textDecorationColor: colors._212121,
  },
  tallWidthItem2UnderLine: {
    backgroundColor: colors._212121,
    height: 2,
    // width: '100%',
  },
  headerContainerStyle: {
    //width: actuatedNormalizeWidth(119),
    height: actuatedNormalizeHeight(27),
    marginLeft: actuatedNormalizeWidth(20),
    marginTop: actuatedNormalizeWidth(10),
    padding: 2,
  },
  tallWidthItem2SubHeaderContainer: {
    //flexDirection: 'column',
    //height: actuatedNormalizeHeight(41),
    marginLeft: 12,
    top: 15,
    marginBottom: actuatedNormalizeHeight(10),
    width: actuatedNormalizeWidth(180),
    padding: 12,
  },
  tallWidthItem2ZeroText: {
    color: colors._212121,
  },
  tallWidthItem2SubText: {
    color: colors._212121,
  },
  tallCarouselButtonStyle: {
    marginLeft: actuatedNormalizeWidth(-5),
    marginTop: actuatedNormalizeHeight(5),
  },

  tallWidthItemButtonText: {
    color: colors.White,
  },
  titleStyle: {
    textAlign: 'left',
    fontSize: 20,
    color: colors.Black,
    fontWeight: FontWeight._600,
    lineHeight: 30,
    letterSpacing: 0.18,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Mulish-Regular',
  },
  shorCarouselText: {
    flex: 1,
  },
  flexDirectionValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shortCarouselTextContainer1: {
    alignSelf: 'center',
    width: actuatedNormalizeWidth(163),
    justifyContent: 'center',
  },
  shortCarouselTextStyle1: {
    textAlign: 'left',
    color: colors.TertiaryBlue110,
    fontFamily: 'Mulish-Bold',
  },
  shortCarouselTextStyle: {
    textAlign: 'left',
    color: colors.TertiaryBlue110,
    fontFamily: 'Mulish-Bold',
  },
  shortCarouselTextStyle2: {
    textAlign: 'left',
    color: colors.TertiaryBlue110,
    fontFamily: 'Mulish-SemiBold',
  },
  shortCarouselCarImageContainer: {
    alignSelf: 'flex-end',
    marginTop: 5,
    paddingHorizontal: 15,
  },
  shortBannerTextContainer: {
    alignSelf: 'center',
    width: actuatedNormalizeWidth(163),
    justifyContent: 'center',
  },
});
