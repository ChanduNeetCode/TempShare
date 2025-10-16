import { StyleSheet } from 'react-native';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { typography ,colors} from '../../../atoms';

export const styles = StyleSheet.create({
  iconSizes: {
    height: actuatedNormalizeHeight(18),
    width: actuatedNormalizeWidth(18),
  },
  iconStyles: {
    alignItems: 'center',
    height: actuatedNormalizeHeight(20),
    justifyContent: 'center',
    marginRight: actuatedNormalizeWidth(8),
    width: actuatedNormalizeWidth(20),
  },
  itemSeparator: {
    borderColor: colors.NeutralGrey90,
    borderWidth: actuatedNormalizeModerateScale(1),
    height:actuatedNormalizeHeight(6),
    left: actuatedNormalizeWidth(9),
    width: actuatedNormalizeWidth(0),
    marginVertical:actuatedNormalizeHeight(2.5),
    borderRadius:actuatedNormalizeWidth(1)
  },
  mainContainer: {
    backgroundColor: colors.NeutralGrey60,
    borderRadius: actuatedNormalizeModerateScale(16),
    padding: actuatedNormalizeModerateScale(12),
    width: actuatedNormalizeWidth(304),
  },
  renderContainer: {
    flexDirection: 'row',
    minHeight:actuatedNormalizeHeight(16),
  },
  titleStyle: {
    ...typography.BodyRegular3,
    color: colors.NeutralGrey150,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
