import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import colors from '../../../atoms/colors';

export default StyleSheet.create({
  elementStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  halfWeight: {
    flex: 1,
  },
  rightTextAlign: {
    textAlign: 'right',
  },
  textStyle: {
    left: actuatedNormalizeWidth(16),
    position: 'absolute',
    top: actuatedNormalizeHeight(-15),
    backgroundColor: colors.BGGrey90,
    color: colors.NeutralGrey110,
  },
});
