import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
} from '../../../../src/utils/utility';

export default StyleSheet.create({
      container: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        padding: actuatedNormalizeModerateScale(1),
      },
      heading: {
        fontSize: actuatedNormalizeModerateScale(24),
        fontWeight: 'bold',
        marginBottom: actuatedNormalizeHeight(20),
      },
      info: {
        fontSize: actuatedNormalizeModerateScale(12),
        marginVertical: actuatedNormalizeHeight(5),
      },
  });