import { StyleSheet } from 'react-native';

import {typography,colors} from '../../../atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

export const styles = StyleSheet.create({
  barStyle: {
    alignSelf: 'center',
    height: actuatedNormalizeHeight(4),
    marginBottom: actuatedNormalizeHeight(8),
  },
  mainContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: actuatedNormalizeModerateScale(20),
    borderBottomRightRadius: actuatedNormalizeModerateScale(20),
    height: actuatedNormalizeHeight(39),
    justifyContent: 'center',
  },
  proceedButton: {
    alignItems: 'center',
    backgroundColor: colors.Success90,
    borderRadius: actuatedNormalizeModerateScale(20),
    height: actuatedNormalizeHeight(50),
    marginLeft: actuatedNormalizeWidth(120),
    width: actuatedNormalizeWidth(100),
  },
  textStyle: {
    ...typography.SubTitleMedium2,
    marginBottom: actuatedNormalizeHeight(8),
    marginTop: actuatedNormalizeHeight(3),
    textAlign: 'center',
  },
  separation: {
    borderRadius: actuatedNormalizeModerateScale(37),
    flexDirection: 'row',
    height: actuatedNormalizeHeight(4),
    width: actuatedNormalizeWidth(40),
  },
});
