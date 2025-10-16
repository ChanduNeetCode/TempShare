import { StyleSheet, Platform } from 'react-native';

import colors from '../../../dff_library/ui_components/atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../src/utils/utility';

const styles = StyleSheet.create({
  afterClick: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: actuatedNormalizeWidth(10),
    borderWidth: actuatedNormalizeWidth(0.5),
    borderColor: colors.White,
    flexDirection: 'row',
    height: actuatedNormalizeHeight(40),
    justifyContent: 'center',
    marginVertical:
      Platform.OS == 'ios'
        ? actuatedNormalizeHeight(10)
        : actuatedNormalizeHeight(15),
    padding: actuatedNormalizeWidth(3),
    paddingLeft: actuatedNormalizeWidth(8),
    width: actuatedNormalizeWidth(300),
  },
  container: {
    height: actuatedNormalizeHeight(70),
  },
  changes: {
    alignItems: 'center',
    borderWidth: actuatedNormalizeWidth(0.5),
    borderRadius: actuatedNormalizeWidth(20),
    height: actuatedNormalizeHeight(28),
    justifyContent: 'center',
    width:
      Platform.OS == 'ios'
        ? actuatedNormalizeWidth(30)
        : actuatedNormalizeWidth(28),
  },
  flatlistStyle: {
    marginBottom: actuatedNormalizeHeight(200),
    marginVertical: actuatedNormalizeHeight(14),
  },
  input: {
    color: colors.White,
    flex: 1,
    padding: actuatedNormalizeWidth(5),
  },
  linearGradientStyle: {
    height: actuatedNormalizeHeight(70),
  },
  parent: {
    flexDirection: 'row',
    width: actuatedNormalizeWidth(280),
  },
  textView: {
    alignSelf: 'center',
    paddingLeft: actuatedNormalizeWidth(10),
  },
  textForLastComp: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: actuatedNormalizeWidth(6),
    borderColor: colors.GradientBlackStart,
    borderWidth: actuatedNormalizeWidth(1),
    color: colors.GradientBlackStart,
    fontSize: actuatedNormalizeModerateScale(20),
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: actuatedNormalizeHeight(5),
    padding: actuatedNormalizeWidth(2),
    width: actuatedNormalizeWidth(320),
  },
});

export default styles;
