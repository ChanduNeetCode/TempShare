import { StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';

export default StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: colors.GradientOrangeEnd,
    borderRadius: 10,
    height: actuatedNormalizeHeight(40),
    justifyContent: 'center',
    marginLeft: actuatedNormalizeWidth(-2),
    marginHorizontal: actuatedNormalizeHeight(5),
    marginVertical: actuatedNormalizeHeight(10),
    paddingHorizontal: actuatedNormalizeWidth(5),
    paddingVertical: actuatedNormalizeHeight(10),
  },
  parentViewStyle: {
    marginTop: actuatedNormalizeHeight(20),
    paddingLeft: actuatedNormalizeWidth(20),
  },
  titleStyle: {
    color: colors.Black,
    fontFamily: 'Mulish-Regular',
    fontSize: 24,
    fontWeight: FontWeight._600,
    letterSpacing: 0.18,
    marginTop: actuatedNormalizeHeight(20),
    marginBottom: actuatedNormalizeHeight(10),
  },
});
