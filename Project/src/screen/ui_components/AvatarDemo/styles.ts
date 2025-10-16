import { StyleSheet } from 'react-native';
import { actuatedNormalizeHeight } from '../../../../src/utils/utility';
import {
  colors,
  typography,
} from '../../../../dff_library/ui_components/atoms';

export default StyleSheet.create({
  
  containerStyle: {
    alignItems: 'center',
    marginTop: actuatedNormalizeHeight(20),
  },

  labelStyle: {
    ...typography.SubTitleMedium2,
    color: colors.PrimaryOrange100,
    marginTop: actuatedNormalizeHeight(60),
    textAlign: 'center',
  },

  viewStyle: {
    alignItems: 'center',
    marginBottom: actuatedNormalizeHeight(-20),
    marginTop: actuatedNormalizeHeight(10),
  },
});
