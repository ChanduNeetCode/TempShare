import { StyleSheet } from 'react-native';

import {colors,typography} from '../../../../dff_library/ui_components/atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';

export default StyleSheet.create({
  backIconStyle: {
    marginLeft: actuatedNormalizeWidth(4),
  },
  buttonStyle:{
    height:actuatedNormalizeHeight(48),
    width:actuatedNormalizeWidth(328)
  },
  contextualOuterStyle: {
    alignContent:'center',
    backgroundColor: colors.CoolGrey100,
    borderRadius: actuatedNormalizeModerateScale(10),
    height:actuatedNormalizeHeight(62),
    justifyContent:'center',
    marginHorizontal: actuatedNormalizeWidth(16),
    marginVertical:actuatedNormalizeHeight(24),
    width: actuatedNormalizeWidth(328),
  },
  contextualInnerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: actuatedNormalizeHeight(11),
    marginBottom: actuatedNormalizeHeight(13),
  },
  contextualHeaderStyle: {
    ...typography.MiniSuccessTitleBold,
    color: colors.NeutralGrey150,
  },
  contextualHeaderStyle2: {
    ...typography.AccordionTitleRegular,
    color: colors.NeutralGrey110,
  },
  correctIconStyle:{
    marginLeft:actuatedNormalizeWidth(16),
    marginTop:actuatedNormalizeHeight(2)
  },
  innerTextView:{ 
    left: actuatedNormalizeWidth(12),
    gap:actuatedNormalizeHeight(4) ,
  },
  parentViewStyle: {
    marginTop: actuatedNormalizeHeight(20),
    justifyContent:'center'
  },
  secondryTextStyle: {
    ...typography.ButtonSmall,
    color: colors.NeutralGrey140,
  },
  secondryViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:actuatedNormalizeHeight(18),
    marginBottom:actuatedNormalizeHeight(24)
  },
 
});
