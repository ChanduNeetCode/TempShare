import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { colors } from '../../../atoms';

const styles = StyleSheet.create({
  activeItemText: {
    color: colors.NeutralGrey150,
    fontSize: actuatedNormalizeModerateScale(18),
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    gap: actuatedNormalizeWidth(8),
    justifyContent: 'center',
  },
  highlightOverlay: {
    backgroundColor: colors.CoolGrey90,
    borderRadius: actuatedNormalizeWidth(5),
    height: actuatedNormalizeHeight(44),
    position: 'absolute',
    top: (actuatedNormalizeHeight(248) - actuatedNormalizeHeight(44)) / 2,
    width: actuatedNormalizeWidth(312),
    zIndex: -1,
  },
  inputTextStyle:{
    left:actuatedNormalizeWidth(8)
  },
  itemText: {
    color: colors.NeutralGrey110,
    fontSize: actuatedNormalizeModerateScale(16),
  },
  pickerContainerStyle: {
    flexDirection: 'row',
    height: actuatedNormalizeHeight(248),
    width: actuatedNormalizeWidth(160),
  },
  scrollContainerStyle: {
    alignItems: 'center',
    backgroundColor: colors.CoolGrey100,
    borderRadius: actuatedNormalizeWidth(8),
    height: actuatedNormalizeHeight(248),
    width: actuatedNormalizeWidth(328),
    elevation: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: actuatedNormalizeWidth(3),
      height: actuatedNormalizeHeight(4),
    },
    shadowRadius: 5,
    shadowColor: 'rgba(0.72,0.733,0.78,0.28)',
  },
});
export default styles;
