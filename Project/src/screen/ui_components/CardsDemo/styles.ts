import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';

export default StyleSheet.create({
  account1Style: {
    height: actuatedNormalizeHeight(192),
    width: actuatedNormalizeWidth(304),
  },
  account2Style: {
    height: actuatedNormalizeHeight(120),
    width: actuatedNormalizeWidth(304),
  },
  bottomFlowerStyle: {
    position: 'absolute',
    bottom: actuatedNormalizeWidth(-35),
  },
  navigationcardStyle: {
    height: actuatedNormalizeHeight(159),
  },
  parentViewStyle: {
    backgroundColor: colors.PastelAmber100,
    justifyContent: 'center',
    paddingLeft: actuatedNormalizeWidth(15),
  },
  selectioncard2Style: {
    borderColor: '#F0792E',
    borderWidth: actuatedNormalizeModerateScale(1),
  },
  viewStyle1: {
    top: actuatedNormalizeHeight(40),
    alignItems: 'center',
    rowGap: actuatedNormalizeModerateScale(15),
  },
  viewStyle2: {
    top: actuatedNormalizeHeight(60),
    left: actuatedNormalizeWidth(20),
    rowGap: actuatedNormalizeModerateScale(15),
  },
});
