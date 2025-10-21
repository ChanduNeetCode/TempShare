import { Platform, StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import { NUMBERS } from './constants';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

export default StyleSheet.create({
  bottomLabelView: {
    end: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    start: 10,
    top:
      Platform.OS === 'ios'
        ? actuatedNormalizeHeight(-10)
        : actuatedNormalizeHeight(-5),
  },
  circle: {
    backgroundColor: colors.White,
    borderColor: colors.NeutralGrey130,
    borderRadius: NUMBERS.CIRCLE_SIZE / 2,
    borderWidth: actuatedNormalizeModerateScale(3),
    elevation: 3,
    height: NUMBERS.CIRCLE_SIZE,
    marginLeft: -actuatedNormalizeModerateScale(8),
    marginTop: -NUMBERS.CIRCLE_SIZE + actuatedNormalizeModerateScale(8),
    overflow: 'visible',
    position: 'absolute',
    shadowColor: colors.shadowOfFeedback,
    shadowOffset: {
      width: actuatedNormalizeModerateScale(0),
      height: actuatedNormalizeModerateScale(4),
    },
    shadowOpacity: 0.14,
    width: NUMBERS.CIRCLE_SIZE,
  },
  dotStyle: {
    borderRadius: actuatedNormalizeModerateScale(4),
    height: actuatedNormalizeModerateScale(4),
    opacity: 1,
    width: actuatedNormalizeModerateScale(4),
  },
  inner: {
    backgroundColor: colors.NeutralGrey100,
    borderRadius: actuatedNormalizeModerateScale(10),
    bottom:
      Platform.OS === 'ios'
        ? actuatedNormalizeHeight(0)
        : actuatedNormalizeHeight(1),
    height: actuatedNormalizeModerateScale(10),
    width: actuatedNormalizeModerateScale(10),
  },
  innerTrue: {
    alignItems: 'center',
    borderRadius: actuatedNormalizeModerateScale(10),
    height: actuatedNormalizeModerateScale(10),
    justifyContent: 'center',
    width: actuatedNormalizeModerateScale(10),
  },
  input: {
    borderColor: colors.NeutralGrey100,
    borderWidth: actuatedNormalizeModerateScale(1),
    height: actuatedNormalizeHeight(40),
    marginTop: actuatedNormalizeHeight(20),
    textAlign: 'center',
    width: actuatedNormalizeWidth(100),
  },
  labelStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSideLabelStyle: {
    fontFamily: 'Mulish-SemiBold',
    marginLeft: actuatedNormalizeWidth(45),
    marginTop: actuatedNormalizeHeight(10),
    width: actuatedNormalizeWidth(60),
  },
  lineStyles: {
    backgroundColor: colors.PrimaryOrange100,
    borderRadius: actuatedNormalizeModerateScale(12),
    height: actuatedNormalizeHeight(6),
    marginTop: actuatedNormalizeHeight(-6),
  },
  middlePArentViewStyle: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  outer: {
    alignItems: 'center',
    borderRadius: actuatedNormalizeModerateScale(10),
    height: actuatedNormalizeModerateScale(20),
    justifyContent: 'center',
    width: actuatedNormalizeModerateScale(20),
  },
  parentViewStyle: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightSideLabelStyle: {
    fontFamily: 'Mulish-SemiBold',
    marginTop: actuatedNormalizeHeight(10),
    width: actuatedNormalizeWidth(60),
  },
  outerTrue: {
    alignItems: 'center',
    borderRadius: actuatedNormalizeModerateScale(10),
    height: actuatedNormalizeModerateScale(20),
    justifyContent: 'center',
    width: actuatedNormalizeModerateScale(20),
  },
});
