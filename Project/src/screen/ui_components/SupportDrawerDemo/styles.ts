import { StyleSheet } from 'react-native';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';
import {
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';

export default StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.GradientOrangeEnd,
    borderRadius: actuatedNormalizeModerateScale(10),
    padding: actuatedNormalizeModerateScale(10),
    margin: actuatedNormalizeModerateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    color: colors.NeutralGrey140,
    fontSize: actuatedNormalizeModerateScale(12),
    lineHeight: 14,
    padding: actuatedNormalizeModerateScale(5),
    fontWeight: FontWeight._400,
    letterSpacing: 0.1,
    width: actuatedNormalizeWidth(50),
    fontFamily: 'Mulish-Regular',
  },
});
