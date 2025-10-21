import { StyleSheet } from 'react-native';

import { actuatedNormalizeHeight, actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';

export default StyleSheet.create({
  basicinteractionStyle: {
    height: actuatedNormalizeHeight(100),
    width: actuatedNormalizeWidth(200)
  },
  dropdownStyle: {
    alignItems: 'center',
    marginTop: actuatedNormalizeHeight(20)
  },
  parentViewStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.PastelAmber100,
    justifyContent: 'center',
    marginTop: actuatedNormalizeHeight(80),

  },
});
