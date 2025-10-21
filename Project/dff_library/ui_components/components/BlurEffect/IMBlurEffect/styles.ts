import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

export default StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: actuatedNormalizeHeight(0),
    left: actuatedNormalizeWidth(0),
    bottom: actuatedNormalizeHeight(0),
    right: actuatedNormalizeWidth(0),
  },
});
