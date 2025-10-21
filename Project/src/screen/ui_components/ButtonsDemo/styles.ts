import { StyleSheet } from 'react-native';

import {colors,typography} from '../../../../dff_library/ui_components/atoms';
import { actuatedNormalizeHeight, actuatedNormalizeModerateScale, actuatedNormalizeWidth } from '../../../../src/utils/utility';

export default StyleSheet.create({
  buttonTypeText: {
    alignSelf: 'flex-start',
    color: colors.NeutralGrey150,
    marginLeft: actuatedNormalizeWidth(15),
  },
  outlinedStyle1:{
    ...typography.ButtonSmall,
    marginTop: actuatedNormalizeHeight(3) 
  },
  outlinedStyle2:{
    ...typography.ButtonSmall, 
    color: '#008F52', 
    marginTop: actuatedNormalizeHeight(3)
  },
  outlinedStyle3:{
    ...typography.ButtonSmall, 
    color: colors.NeutralGrey110, 
    marginTop: actuatedNormalizeHeight(3) 
  },
  parentDropdownStyle:{
    alignSelf: 'center',
    top: actuatedNormalizeHeight(20),
  },
  revokeButtonStyle: {
    backgroundColor: colors.White,
    borderColor: colors.Error100,
    borderWidth: actuatedNormalizeModerateScale(1),
    elevation: 10,
    shadowColor: 'rgb(0.298,0.298,0.298)',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
  },
  secondary1Style:{
     marginTop: actuatedNormalizeHeight(3) 
  },
  teritaryButton: {
    borderRadius: actuatedNormalizeModerateScale(8),
    height: actuatedNormalizeHeight(32),
  },
  teritaryButton2: {
    backgroundColor: colors.PastelGreen100,
    borderRadius: actuatedNormalizeModerateScale(8),
    borderWidth: actuatedNormalizeModerateScale(0),
    height: actuatedNormalizeHeight(32),
  },
  teritaryButton3: {
    backgroundColor: colors.PastelAmber100,
    borderRadius: actuatedNormalizeModerateScale(8),
    borderWidth: actuatedNormalizeModerateScale(0),
    height: actuatedNormalizeHeight(32),
  },
  viewStyle1: {
    alignItems: 'center',
    rowGap: actuatedNormalizeModerateScale(15),
    top: actuatedNormalizeHeight(40),
  },
  viewStyle2: {
    alignItems: 'center',
    top: actuatedNormalizeHeight(40),
  },
  viewStyle3: {
    alignItems: 'center',
    rowGap: actuatedNormalizeModerateScale(8),
    top: actuatedNormalizeHeight(40),
  },
});