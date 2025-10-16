import { StyleSheet } from 'react-native';

import { actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth } from '../../../utils/utility';

export default StyleSheet.create({
  containerStyle:{
    marginLeft:actuatedNormalizeWidth(24),
  },
  viewStyle1:{
    top:actuatedNormalizeHeight(40),
    left:actuatedNormalizeWidth(40),
    rowGap:actuatedNormalizeModerateScale(16)
  },
});
