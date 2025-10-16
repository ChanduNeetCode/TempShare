import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import {colors, typography} from '../../../atoms';

export default StyleSheet.create({
  slashStyle: {
    marginHorizontal:actuatedNormalizeWidth(5),
    ...typography.LabelLargeMedium,
    color:colors.NeutralGrey100

  },
  selectedTextStyle:{
   ...typography.LabelLargeMedium,
   color:colors.PrimaryOrange100,
  },
  unSelectedTextStyle:{
    ...typography.LabelLargeMedium,
    color:colors.NeutralGrey110,
  }
});
