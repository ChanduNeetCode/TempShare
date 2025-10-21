import { StyleSheet } from 'react-native';

import {colors,typography} from '../../../../dff_library/ui_components/atoms';
import { actuatedNormalizeHeight, actuatedNormalizeModerateScale, actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';

export default StyleSheet.create({
  parentViewStyle: {
    backgroundColor: colors.White,
    justifyContent: 'center',
    gap:actuatedNormalizeModerateScale(40)
  },
  positiveLarge:{
    ...typography.BodySemiBold3,
    fontWeight:FontWeight._700,
  },
  tipsLargeMargin:{
    marginLeft:actuatedNormalizeWidth(10),
  },
  tipsLargeMarginContainer:{
    marginLeft:actuatedNormalizeWidth(20),
  },
  titleStyle: {
    ...typography.SubTitleMedium1,
    color: colors.Black,
    left:actuatedNormalizeWidth(15),
    textAlign: 'left',
    top:actuatedNormalizeHeight(20),   
  },
 
 
});
