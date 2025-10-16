import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../utils/utility';
import {colors,typography} from '../../../atoms';
import { FontWeight } from '../../../utils/enums';

export default StyleSheet.create({
  tallFullWidthButtonContainer: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(25),
    height: actuatedNormalizeHeight(54.53),
    justifyContent: 'center',
    marginLeft: actuatedNormalizeWidth(15),
    marginTop: actuatedNormalizeHeight(50),
    width: actuatedNormalizeHeight(143.21),
  },
  tallFullWidthButtonText: {
    ...typography.ButtonTitleLarge,
    color: colors._876822,
    fontWeight:FontWeight._700,
  },
  tallFullWidthContainer: {
    borderRadius: actuatedNormalizeModerateScale(16),
    height: actuatedNormalizeHeight(184),
    overflow: 'hidden',
    width: actuatedNormalizeWidth(328),
  },
  tallFullWidthImageStyle: {
    bottom: 0,
    marginLeft: actuatedNormalizeWidth(210),
    marginTop: actuatedNormalizeHeight(40),
    position: 'absolute',
  },
  tallFullWidthItem1TextContainer: {
    height: actuatedNormalizeHeight(40),
    marginLeft: actuatedNormalizeWidth(15),
    marginTop: actuatedNormalizeHeight(22),
    width: actuatedNormalizeWidth(216.86),
  },
  tallFullWidthTextStyle: {
    ...typography.ButtonLarge,
    color: colors.White,
    textAlign: 'left',
  },
});
