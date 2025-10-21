import { Dimensions, StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../dff_library/ui_components/utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { typography } from '../../../../dff_library/ui_components/atoms';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  descreteSliderTextInputStyles: {
    borderColor: colors.NeutralGrey100,
    borderWidth: actuatedNormalizeModerateScale(1),
    height: actuatedNormalizeHeight(40),
    margin: 'auto',
    textAlign: 'center',
    width: actuatedNormalizeWidth(100),
  },
  dropDownWidth: {
    width: actuatedNormalizeWidth(320),
  },
  labelStyle: {
    ...typography.LabelLargeRegular,
    color: colors.NeutralGrey140,
    padding: actuatedNormalizeModerateScale(5),
    width: actuatedNormalizeWidth(50),
  },
  mainContainer: {
    flex: 1,
  },
  outerPointStyle: {
    backgroundColor: colors.NeutralGrey60,
  },
  parentContainer: {
    alignItems: 'center',
    marginVertical: actuatedNormalizeHeight(20),
  },
  parentViewStyle: {
    justifyContent: 'center',
    marginTop: actuatedNormalizeHeight(20),
    paddingBottom: actuatedNormalizeHeight(20),
    width: '100%',
  },
  sliderWidthStyle: {
    width: actuatedNormalizeWidth(WIDTH - 130),
  },
  styleBGTrackStyle: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(12),
    flexDirection: 'row',
    height: actuatedNormalizeHeight(6),
    justifyContent: 'space-between',
    paddingHorizontal: actuatedNormalizeWidth(1),
  },
  textInputStyle: {
    marginLeft: actuatedNormalizeWidth(150),
  },
  titleStyle: {
    ...typography.SliderTitleStyle,
    color: colors.Black,
    marginBottom:actuatedNormalizeHeight(28),
    marginLeft:actuatedNormalizeWidth(35),
    marginVertical: actuatedNormalizeHeight(20),
  },
});
