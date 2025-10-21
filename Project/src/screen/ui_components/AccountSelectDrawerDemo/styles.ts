import { StyleSheet } from 'react-native';
import {colors,typography} from '../../../../dff_library/ui_components/atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,actuatedNormalizeModerateScale
} from '../../../../src/utils/utility';

export default StyleSheet.create({
  disableIconStyle:{
    borderColor: colors.NeutralGrey100,
    borderRadius: actuatedNormalizeWidth(20),  
    borderWidth: actuatedNormalizeWidth(2),
    height: actuatedNormalizeWidth(20),
    width: actuatedNormalizeWidth(20),
},
  headertextStyle: {
    ...typography.MiniSuccessTitleBold,
    color:colors.NeutralGrey150,
    fontWeight: '600',
  },
  highlightIcon:{
    borderColor: colors.PrimaryOrange100,
    borderRadius: actuatedNormalizeWidth(20),
    borderWidth: actuatedNormalizeWidth(4),
    height: actuatedNormalizeWidth(20),
    width: actuatedNormalizeWidth(20),
  },
  itemViewStyle:{
    backgroundColor:'transparent',
    borderRadius: actuatedNormalizeModerateScale(17),
    height: actuatedNormalizeHeight(64),
    paddingHorizontal: actuatedNormalizeWidth(16),
    width: actuatedNormalizeWidth(328),
  },
  leftIconStyles:{
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: actuatedNormalizeModerateScale(8),
    height: actuatedNormalizeHeight(40),
    justifyContent: 'center',
    marginRight: actuatedNormalizeWidth(8),
    padding: actuatedNormalizeWidth(8),
    width: actuatedNormalizeWidth(40),
  },
  parentViewStyle: {
    marginTop: actuatedNormalizeHeight(20),
    paddingLeft: actuatedNormalizeWidth(20),
  },
  titleStyle: {
    ...typography.BodySemiBold1, 
    color: colors.NeutralGrey140 ,
    left: -actuatedNormalizeWidth(8),
  },
  touchableStyle:{
    alignItems: 'center',
    borderRadius:actuatedNormalizeModerateScale(17),
    height: actuatedNormalizeHeight(64),
    justifyContent: 'center',
    marginBottom: actuatedNormalizeHeight(8),
    paddingVertical: actuatedNormalizeWidth(12),
    width: actuatedNormalizeWidth(328),
  },
});
