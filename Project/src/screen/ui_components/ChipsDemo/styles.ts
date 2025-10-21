import { StyleSheet } from 'react-native';

import { colors, typography } from '../../../../dff_library/ui_components/atoms';
import { actuatedNormalizeHeight, actuatedNormalizeModerateScale, actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';

export default StyleSheet.create({
  acctypeContainerStyle: {
    backgroundColor: colors.NeutralGrey60,
    borderRadius: actuatedNormalizeModerateScale(4),
    borderWidth:0,
    elevation: 0,
    minHeight: actuatedNormalizeHeight(17),
    minWidth: actuatedNormalizeWidth(31),
    paddingVertical: actuatedNormalizeHeight(2),
    paddingHorizontal: actuatedNormalizeWidth(4),
    shadowOpacity: 0
  },
  acctypealtContainerStyle: {
    backgroundColor: colors.FadedBlue,
    borderRadius:actuatedNormalizeModerateScale(8),
    borderWidth:0,
    elevation: 0,
    height: actuatedNormalizeHeight(22),
    width:actuatedNormalizeWidth(55),
    paddingHorizontal: actuatedNormalizeWidth(8),
    paddingVertical: actuatedNormalizeHeight(4),
    shadowOpacity: 0,
  },
  addCommentViewStyle:{
    ...typography.ButtonSmall,
    borderBottomColor: colors.PastelAmber100,
    borderBottomWidth: 1,
    color: colors.NeutralGrey110,
    height: actuatedNormalizeHeight(24),
    width: actuatedNormalizeWidth(328), 
  },
  labelStyle1: {
    ...typography.LabelSmallMedium,
    color: colors.NeutralGrey110,
  },
  labelStyle2: {
    ...typography.LabelSmallRegular,
    color: colors.PrimaryOrange100,
  },
  mainContainer:{
    alignItems:'center',
    marginTop:actuatedNormalizeHeight(20), 
  },
  viewStyle1: {
    alignSelf: 'center',
    top: actuatedNormalizeHeight(30),
    rowGap: actuatedNormalizeWidth(10),
  },
  viewStyle2: {
    columnGap: actuatedNormalizeWidth(10),
    flexDirection: 'row',
  }
});
