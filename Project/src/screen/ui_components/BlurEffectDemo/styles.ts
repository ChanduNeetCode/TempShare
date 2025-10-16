import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../../src/utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';

export default StyleSheet.create({
  absolute: {
    bottom: actuatedNormalizeHeight(0),
    left: actuatedNormalizeWidth(0),
    position: 'absolute',
    right: actuatedNormalizeWidth(0),
    top: actuatedNormalizeHeight(0),
  },
  blurContainer: {
    borderRadius: 20,
    backgroundColor: colors.CoolGrey100,
    flex: 1,
    justifyContent: 'center',
    margin: actuatedNormalizeModerateScale(14),
    overflow: 'hidden',
    padding: actuatedNormalizeModerateScale(20),
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: actuatedNormalizeModerateScale(24),
    fontWeight: '600',
    marginLeft: actuatedNormalizeWidth(20),
  },
});
