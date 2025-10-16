import { StyleSheet } from 'react-native';

import {typography,colors} from '../../../atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

export const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    borderRadius: actuatedNormalizeWidth(12),
    height: actuatedNormalizeWidth(24),
    justifyContent: 'center',
    marginRight: actuatedNormalizeWidth(8),
    width: actuatedNormalizeWidth(24),
  },
  circleText1: {
    ...typography.SubTitleMedium2,
    color: colors.NeutralGrey110,
    height: actuatedNormalizeHeight(16),
    width: actuatedNormalizeWidth(9),
  },
  circleText2: {
    ...typography.SubTitleMedium2,
    color: colors.White,
    height: actuatedNormalizeHeight(16),
    width: actuatedNormalizeWidth(9),
  },
  iconSizes: {
    height: actuatedNormalizeHeight(24),
    width: actuatedNormalizeWidth(24),
  },
  itemContainer: {
    justifyContent: 'center',
    marginBottom: actuatedNormalizeHeight(16),
  },
  itemSeparator: {
    borderColor: colors.PastelAmber100,
    borderStyle: 'solid',
    borderWidth: actuatedNormalizeModerateScale(1),
    flex: 1,
    left: actuatedNormalizeWidth(10),
    marginVertical: actuatedNormalizeHeight(8),
    width: actuatedNormalizeWidth(1),
  },
  mainContainer: {
    marginTop: actuatedNormalizeHeight(30),
  },
  renderContainer: {
    flexDirection: 'row',
  },
  textStyle: {
    height: actuatedNormalizeHeight(24),
    textAlignVertical: 'center',
  },
});
