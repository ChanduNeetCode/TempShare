import { StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { actuatedNormalizeWidth } from '../../../utils/utility';

export default StyleSheet.create({
  buttonStyle: {
    lineHeight: 20,
    height: 48,
    borderRadius: 16,
    display: 'flex',
    top: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 14,
    width: actuatedNormalizeWidth(200),
   
  },
  buttonTextStyle: {
    marginTop: 1,
    color: colors.White,
    fontSize:17
  },

});
