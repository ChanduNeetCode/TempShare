import { StyleSheet } from 'react-native';
import { actuatedNormalizeHeight } from '../../../../src/utils/utility';
import { colors } from '../../../../dff_library/ui_components/atoms';
export default StyleSheet.create({
  container: {
    backgroundColor:colors.White,
    flex: 1,
    paddingBottom: actuatedNormalizeHeight(40),
  },
  label: {
    margin: actuatedNormalizeHeight(10),
  },
  parentViewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
  },
  dropDownWindowStyle: {
    alignItems: 'center',
    marginTop: actuatedNormalizeHeight(10)
  },
  subContainer: {
    marginTop: actuatedNormalizeHeight(20),
    alignSelf:'center'
  }
});
