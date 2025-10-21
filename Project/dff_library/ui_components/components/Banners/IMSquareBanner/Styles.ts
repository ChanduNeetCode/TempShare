import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../utils/utility';
import {colors,typography} from '../../../atoms';

export default StyleSheet.create({
  carStyle: {
    bottom: actuatedNormalizeHeight(0),
    marginRight: actuatedNormalizeWidth(30),
    marginTop: actuatedNormalizeHeight(5),
    position: 'absolute',
  },
  descriptionContainer: {
    height: actuatedNormalizeHeight(50),
    marginTop: actuatedNormalizeHeight(10),
    width: actuatedNormalizeWidth(267),
  },
  headerContainerStyle: {
    alignSelf: 'center',
    height: actuatedNormalizeHeight(14),
    justifyContent: 'center',
    paddingHorizontal: actuatedNormalizeWidth(13.5),
    width: actuatedNormalizeWidth(168),
  },
  popOverSquareLinearContainerStyle: {
    alignItems: 'center',
    borderRadius: actuatedNormalizeModerateScale(25),
    height: actuatedNormalizeHeight(328),
    marginLeft: actuatedNormalizeWidth(10),
    overflow: 'hidden',
    width: actuatedNormalizeWidth(328),
  },
  popOverSquareSubHeader: {
    ...typography.HeadingLabel2,
    color: colors.White,
    height: actuatedNormalizeHeight(25),
    textAlign: 'center',
    width: actuatedNormalizeWidth(260),
  },
  portraitSquareTextStyle: {
    ...typography.HeadingLabel1,
    color: colors.White,
    marginBottom: actuatedNormalizeHeight(2),
    textAlign: 'center',
  },
  popOverSquareUnderLineStyle: {
    alignSelf: 'center',
    backgroundColor: colors.White,
    height: actuatedNormalizeHeight(1),
    marginBottom: actuatedNormalizeHeight(5),
    width: actuatedNormalizeWidth(141),
  },
  popOverSquareViewContainer: {
    height: actuatedNormalizeHeight(132),
    marginTop: actuatedNormalizeHeight(40),
    width: actuatedNormalizeWidth(267),
  },
  storyButtonTextStyle: {
    ...typography.HeadingBold4,
    color: colors._A32713,
  },
  squarePortraitButtonStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(25),
    height: actuatedNormalizeHeight(40),
    justifyContent: 'center',
    marginTop: actuatedNormalizeHeight(16),
    paddingHorizontal:15,
  }
});
