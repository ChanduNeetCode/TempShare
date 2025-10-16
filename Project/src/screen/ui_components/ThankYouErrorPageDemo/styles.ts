import { StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { actuatedNormalizeHeight, actuatedNormalizeModerateScale, actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';

export default StyleSheet.create({
  circleImage: {
    marginTop: actuatedNormalizeHeight(10)
  },
  iconStyles: {
    height: actuatedNormalizeHeight(25),
    width: actuatedNormalizeWidth(25),
  },
  parentContainer: {
    alignItems: 'center',
    marginBottom: actuatedNormalizeHeight(30),
  },
  parentViewStyle: {
    justifyContent: 'center',
    marginTop: actuatedNormalizeHeight(20),
    paddingHorizontal: actuatedNormalizeWidth(15),
  },
  textStyle: {
    alignSelf: 'center',
    color: colors.Black,
    fontFamily: 'Mulish-Regular',
    justifyContent: 'center',
    marginTop: actuatedNormalizeHeight(20),
    padding: actuatedNormalizeModerateScale(15),
  },
});
