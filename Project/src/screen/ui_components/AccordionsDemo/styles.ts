import { StyleSheet } from 'react-native';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';
import typography from '../../../../dff_library/ui_components/atoms/typography';

export default StyleSheet.create({
  descriptionStyle: {
    ...typography.LabelLargeRegular,
    color: colors.NeutralGrey110,
    paddingHorizontal: actuatedNormalizeWidth(16),
    paddingVertical: actuatedNormalizeHeight(16),
  },
  descriptionStyle1: {
    ...typography.LabelLargeRegular,
    color: colors.NeutralGrey110,
    paddingHorizontal: actuatedNormalizeWidth(16),
   marginBottom: actuatedNormalizeWidth(16),
  },
  parentViewStyle: {
    justifyContent: 'center',
    marginTop: actuatedNormalizeHeight(20),
    paddingLeft: actuatedNormalizeWidth(15),
    paddingRight: actuatedNormalizeWidth(15),
    width: '100%',
  },
  iconImageStyle: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    height: actuatedNormalizeHeight(40),
    justifyContent: 'center',
    width: actuatedNormalizeWidth(40),
  },
  titleStyle: {
    color: colors.Black,
    marginBottom: actuatedNormalizeHeight(15),
    marginTop: actuatedNormalizeHeight(5),
    textAlign: 'left',
  },

});
