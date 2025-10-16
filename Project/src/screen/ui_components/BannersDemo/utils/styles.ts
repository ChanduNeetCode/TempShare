import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../../../dff_library/ui_components/utils/utility';
import colors from '../../../../../dff_library/ui_components/atoms/colors';
import { typography } from '../../../../../dff_library/ui_components/atoms';

export default StyleSheet.create({
  headerContainerStyle: {
    height: actuatedNormalizeHeight(17),
    marginTop: actuatedNormalizeHeight(6),
    width: actuatedNormalizeWidth(120),
  },
  tallWidthItem2SubContainer: {
    flexDirection: 'column',
    height: actuatedNormalizeHeight(20),
    marginLeft: actuatedNormalizeWidth(12),
    marginTop: actuatedNormalizeHeight(6),
    width: actuatedNormalizeWidth(190),
  },
  tallWidthItem2Header: {
    ...typography.HeadingLabel1,
    fontSize: actuatedNormalizeModerateScale(7.53),
    color: colors.Black,
  },
  tallWidthItem2UnderLine: {
    backgroundColor: colors._212121,
    height: actuatedNormalizeHeight(2),
    width: actuatedNormalizeWidth(110),
  },
  tallWidthItem2SubHeaderContainer: {
    height: actuatedNormalizeHeight(45),
    justifyContent: 'center',
    marginBottom: actuatedNormalizeHeight(12),
    marginLeft: actuatedNormalizeWidth(11),
    marginTop: actuatedNormalizeHeight(6),
    paddingBottom: actuatedNormalizeHeight(8),
    width: actuatedNormalizeWidth(180),
  },
  tallWidthItem2ZeroText: {
    ...typography.HeadingLabel6,
    color: colors._212121,
    paddingTop: actuatedNormalizeHeight(8),
    textAlign: 'left',
  },
  tallWidthItem2SubText: {
    ...typography.subHeadingLabel,
    color: colors._212121,
    paddingTop: actuatedNormalizeHeight(2),
    textAlign: 'left',
  }
});
