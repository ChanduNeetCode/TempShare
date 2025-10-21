import { StyleSheet } from 'react-native';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';

export default StyleSheet.create({
  ViewStyle: {
    backgroundColor: colors.PastelAmber100,
    justifyContent: 'center',
    marginTop: actuatedNormalizeHeight(20),
    paddingHorizontal: actuatedNormalizeWidth(15),
    width: '100%',
  },
});
