import { StyleSheet } from 'react-native';

import {actuatedNormalizeHeight} from '../../../../src/utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';

export default StyleSheet.create({
  dropdownStyle: {
    alignItems: 'center',
    marginTop: actuatedNormalizeHeight(20)
  },
  mainViewStyle:{
    backgroundColor: colors.White,
    height: '100%', 
  },
  parentViewStyle: {
    backgroundColor: colors.White,
    justifyContent: 'center',
  }
});
