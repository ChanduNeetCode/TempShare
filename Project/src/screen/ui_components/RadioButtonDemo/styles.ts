import { StyleSheet } from 'react-native';

import {actuatedNormalizeHeight,actuatedNormalizeWidth} from '../../../utils/utility';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical:actuatedNormalizeHeight(40),
    marginHorizontal:actuatedNormalizeWidth(16),
  },
});
