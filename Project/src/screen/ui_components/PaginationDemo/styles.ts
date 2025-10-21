import { StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';

export default StyleSheet.create({
  mainContainer: { flex: 1,backgroundColor:'white' },
  parentViewStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal:10
  },
  titleStyle: {
    marginBottom: 20,
    color: colors.Black,
  },
});
