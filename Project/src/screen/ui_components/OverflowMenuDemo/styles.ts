import { StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';
import typography from '../../../../dff_library/ui_components/atoms/typography';

export default StyleSheet.create({
  itemTextStyle: {
    ...typography.SubTitleRegular1,
    color: colors.NeutralGrey140,
    fontSize: actuatedNormalizeModerateScale(14),
    letterSpacing: actuatedNormalizeWidth(0.25),
    marginLeft: actuatedNormalizeModerateScale(10),
  },
  leftIconViewStyle: {
    marginRight: actuatedNormalizeWidth(20),
  },
  mainContainer: {
    marginLeft: actuatedNormalizeWidth(20),
    marginTop: actuatedNormalizeHeight(20),
  },
  mainContainerStyle: {
    borderBottomLeftRadius: actuatedNormalizeWidth(30),
    borderBottomRightRadius: actuatedNormalizeWidth(30),
    shadowOpacity: 0,
  },
  text1: {
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: 0.1,
    color:colors.NeutralGrey120,
  },
  text2: {
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 0.1,
    color:colors.NeutralGrey130,
  }
});
