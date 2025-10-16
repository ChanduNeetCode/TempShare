import { StyleSheet } from 'react-native';

import { colors, typography } from '../../../atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.White,
    borderColor: colors.PastelAmber100,
    borderRadius: actuatedNormalizeModerateScale(53),
    borderWidth: actuatedNormalizeModerateScale(1),
    columnGap: actuatedNormalizeModerateScale(4),
    elevation: 5,
    flexDirection: 'row',
    paddingVertical: actuatedNormalizeHeight(8),
    paddingHorizontal: actuatedNormalizeWidth(12),
    shadowColor: colors.shadowOfFeedback,
    shadowOpacity: 0.14,
    shadowRadius: actuatedNormalizeModerateScale(5),
    shadowOffset:
    {
      width: actuatedNormalizeWidth(0),
      height: actuatedNormalizeHeight(4)
    }
  },
  label: {
    ...typography.BodyRegular2,
    color: colors.NeutralGrey110,
  },
  selectedContainer: {
    borderColor: colors.PrimaryOrange100,
  },
});

export default styles;
