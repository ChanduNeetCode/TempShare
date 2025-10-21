import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../../src/utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import typography from '../../../../dff_library/ui_components/atoms/typography';

export default StyleSheet.create({
  buttonsContainer: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: colors.GradientOrangeEnd,
    borderRadius: actuatedNormalizeModerateScale(10),
    height: actuatedNormalizeHeight(40),
    marginHorizontal: actuatedNormalizeWidth(5),
    marginVertical: actuatedNormalizeHeight(10),
    paddingHorizontal: actuatedNormalizeWidth(5),
    paddingVertical: actuatedNormalizeHeight(10),
  },
  labelStyle: {
    ...typography.BodyRegular3,
    color: colors.NeutralGrey140,
    padding: actuatedNormalizeWidth(5),
    width: actuatedNormalizeWidth(50),
  },
  mainContainer: {
    alignItems: 'center',
    gap: actuatedNormalizeHeight(15),
    marginTop: actuatedNormalizeHeight(30),
  },
  moneyLendingImageStyle: {
    borderBottomRightRadius: actuatedNormalizeModerateScale(100),
    marginLeft: actuatedNormalizeWidth(-62),
    marginTop: actuatedNormalizeHeight(60),
  },
  oldManImageStyle: {
    borderBottomRightRadius: actuatedNormalizeModerateScale(100),
    marginLeft: actuatedNormalizeWidth(-205),
    marginTop: actuatedNormalizeHeight(20),
  },
  parentViewStyle: {
    backgroundColor: colors.White,
    flex: 0.9,
    paddingLeft: actuatedNormalizeWidth(20),
  },
});
