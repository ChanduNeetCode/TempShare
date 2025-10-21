import { StyleSheet } from 'react-native';

import {colors,typography} from '../../../atoms';
import { FontWeight } from '../../../utils/enums';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

export default StyleSheet.create({
  bullet: {
    backgroundColor: colors.NeutralGrey140,
    borderRadius: actuatedNormalizeModerateScale(4),
    height: actuatedNormalizeHeight(8),
    width: actuatedNormalizeWidth(8),
  },
  childContainer: {
    alignItems: 'center',
    marginRight: actuatedNormalizeWidth(12),
  },
  container: {
    flexDirection: 'row',
  },

  flowline: {
    borderWidth: actuatedNormalizeModerateScale(1),
    flex: 1,
    width: actuatedNormalizeWidth(1),
  },
  header: {
    color: colors.NeutralGrey150,
    fontSize: actuatedNormalizeModerateScale(14),
    fontWeight: FontWeight._700,
    letterSpacing: actuatedNormalizeModerateScale(0.25),
    lineHeight: actuatedNormalizeHeight(20),
    marginBottom: actuatedNormalizeHeight(4),
    width: actuatedNormalizeWidth(268),
  },
  iconBox: {
    alignItems: 'center',
    borderColor: colors.PastelAmber100,
    borderRadius: actuatedNormalizeModerateScale(8),
    borderWidth: actuatedNormalizeWidth(1),
    flexDirection: 'column',
    height: actuatedNormalizeHeight(40),
    justifyContent: 'center',
    width: actuatedNormalizeWidth(40),
  },
  indexStyle:{
    ...typography.SubTitleMedium2,
    color:colors.NeutralGrey140
  },
  number: {
    alignItems: 'center',
    backgroundColor: colors.CoolGrey90,
    borderRadius: actuatedNormalizeModerateScale(12),
    color: colors.NeutralGrey140,
    fontSize: actuatedNormalizeModerateScale(14),
    fontWeight: FontWeight._700,
    height: actuatedNormalizeHeight(24),
    justifyContent: 'center',
    letterSpacing: actuatedNormalizeModerateScale(0.1),
    lineHeight: actuatedNormalizeModerateScale(16),
    width: actuatedNormalizeWidth(24),
  },
  separator: {
    borderColor: colors.NeutralGrey60,
    borderWidth: actuatedNormalizeWidth(1),
    marginVertical: actuatedNormalizeHeight(16),
    width: actuatedNormalizeWidth(268),
  },
  text: {
    fontSize: actuatedNormalizeModerateScale(14),
    fontWeight: FontWeight._400,
    letterSpacing: actuatedNormalizeModerateScale(0.25),
    lineHeight: actuatedNormalizeHeight(20),
    width: actuatedNormalizeWidth(260),
  },
});
