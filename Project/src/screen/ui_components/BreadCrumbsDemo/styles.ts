import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../../src/utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';

export default StyleSheet.create({
  parentViewStyle:{
    marginHorizontal:actuatedNormalizeWidth(25),marginTop:actuatedNormalizeHeight(50)
  }
});
