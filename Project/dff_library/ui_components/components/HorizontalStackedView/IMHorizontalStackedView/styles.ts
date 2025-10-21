import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = StyleSheet.create({
  itemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: actuatedNormalizeWidth(164),
  },
  itemTextStyle: {
    color: colors.White,
    alignSelf: 'center',
  },
  parentStyle: {
    width: actuatedNormalizeWidth(328),
    height: actuatedNormalizeHeight(68),
    alignItems: 'center',
  },
  linearStyle: {
    borderColor: colors.White,
    borderWidth: actuatedNormalizeWidth(1.5),
    borderRadius: actuatedNormalizeModerateScale(15),
  },
  lineStyle: {
    borderLeftWidth: actuatedNormalizeWidth(1),
    borderColor: colors.White,
    margin: actuatedNormalizeWidth(5),
  },
});
export default styles;
