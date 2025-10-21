import { StyleSheet } from 'react-native';

import colors from '../../../../ui_components/atoms/colors';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../ui_components/utils/utility';

export default StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: actuatedNormalizeHeight(0),
    left: actuatedNormalizeWidth(0),
    bottom: actuatedNormalizeHeight(0),
    right: actuatedNormalizeWidth(0),
  },

  //Experience A style ------------------------------------------------------
  bannerStyle: {
    marginLeft: actuatedNormalizeWidth(30),
  },
  centered: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
  },
  centeredBanner: {
    marginTop: actuatedNormalizeHeight(0),
    marginLeft: actuatedNormalizeWidth(-30),
  },
  mainContainerStyle: {
    height: actuatedNormalizeHeight(200),
    width: '95%',
    borderRadius: actuatedNormalizeModerateScale(20),
  },
  tallFullWidthItem1TextContainer: {
    marginTop: actuatedNormalizeHeight(50),
    marginLeft: 12,
    width: actuatedNormalizeWidth(200),
  },
  tallFullWidthTextStyle: {
    color: colors.White,
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21,
    textAlign: 'left',
  },
  tallFullWidthButtonContainer: {
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: colors.White,
    height: actuatedNormalizeHeight(55),
    justifyContent: 'center',
    marginTop: '3%',
    marginLeft: '4%',
    width: actuatedNormalizeHeight(145),
  },
  tallFullWidthButtonText: {
    color: colors._876822,
  },
  tallFullWidthImageStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderBottomRightRadius: actuatedNormalizeModerateScale(20),
    overflow: 'hidden',
  },

  //Experience B style ------------------------------------------------------
  mainContainerStyleB: {
    width: actuatedNormalizeWidth(300),
    height: actuatedNormalizeHeight(170),
  },
  tallFullWidthItem1TextContainerB: {
    width: actuatedNormalizeWidth(300),
    height: actuatedNormalizeHeight(170),
  },
  tallFullWidthTextStyleB: {
    color: colors.White,
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21,
    textAlign: 'left',
  },
  tallFullWidthUpperTextStyleB: {
      color: colors.Black,
      fontFamily: 'Mulish',
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 21,
      textAlign: 'left',
      width: '85%',
      flexDirection: 'row', 
      flexWrap: 'wrap',
  },
  tallFullWidthButtonContainerB: {
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: colors.White,
    height: actuatedNormalizeHeight(55),
    justifyContent: 'center',
    marginTop: '3%',
    marginLeft: '4%',
    width: actuatedNormalizeHeight(145),
  },
  tallFullWidthButtonTextB: {
    color: colors._876822,
  },
  tallFullWidthImageStyleB: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
  bannerImageStyleB: {
     width: '100%', 
     height: '100%'
  },

  //Experience C style ------------------------------------------------------
  mainContainerStyleC: {
    backgroundColor: 'orange',
    height: actuatedNormalizeHeight(180),
    width: '100%',
    borderRadius: actuatedNormalizeModerateScale(20),
    marginTop: actuatedNormalizeHeight(20),
  },
  tallFullWidthItem1TextContainerC: {
    marginTop: actuatedNormalizeHeight(15),
    marginLeft: actuatedNormalizeWidth(20),
    width: actuatedNormalizeWidth(260),
  },
  tallFullWidthTextStyleC: {
    color: colors.White,
    fontFamily: 'Mulish',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 21,
    textAlign: 'left',
  },
  tallFullWidthUpperTextStyleC: {
      color: colors.Black,
      fontFamily: 'Mulish',
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 21,
      textAlign: 'left',
      width: '85%',
      flexDirection: 'row', 
      flexWrap: 'wrap',
      marginLeft: actuatedNormalizeWidth(20),
      marginTop: actuatedNormalizeHeight(25),
  },
  tallFullWidthButtonContainerC: {
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: colors.White,
    height: actuatedNormalizeHeight(45),
    justifyContent: 'center',
    marginTop: '3%',
    marginLeft: '4%',
    width: actuatedNormalizeHeight(125),
  },
  tallFullWidthButtonTextC: {
    color: colors._876822,
  },
});
