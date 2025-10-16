import { StyleSheet } from 'react-native';
import colors from '../../../../dff_library//ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';

export default StyleSheet.create({
  boxstyle: {
    backgroundColor: colors.White,
    marginLeft: actuatedNormalizeWidth(30),
    width: actuatedNormalizeWidth(360),
  },
  heading1: {
    color: colors.Black,
    fontSize: actuatedNormalizeModerateScale(30),
    fontWeight: FontWeight._600,
    marginBottom: actuatedNormalizeHeight(20),
    marginTop: actuatedNormalizeHeight(20),
    textAlign: 'center',
    width: '100%',
  },
  subheading: {
    color: colors.Black,
    fontSize: actuatedNormalizeModerateScale(20),
    fontStyle: 'italic',
    left: actuatedNormalizeWidth(15),
    marginBottom: actuatedNormalizeHeight(20),
    marginTop: actuatedNormalizeHeight(20),
  },
});
