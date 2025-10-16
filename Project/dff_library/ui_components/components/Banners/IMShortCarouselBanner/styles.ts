import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../utils/utility';
import {colors,typography} from '../../../atoms';

export default StyleSheet.create({
  descriptionText: {
    ...typography.BodyRegular3,
    color: colors.TertiaryBlue110,
    textAlign: 'left',
  },
  shortBannerContainer: {
    borderRadius: actuatedNormalizeModerateScale(16),
    height: actuatedNormalizeHeight(88),
    marginRight: actuatedNormalizeWidth(20),
    overflow: 'hidden',
    width: actuatedNormalizeWidth(242),
  },
  shortBannerComponentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: actuatedNormalizeWidth(19),
  },
  shortBannerImageBottom: {
    bottom: '2%',
    left: '2%',
    position: 'absolute',
  },
  shortBannerCarImageContainer: {
    height: actuatedNormalizeHeight(36),
    marginLeft: actuatedNormalizeWidth(10),
    width: actuatedNormalizeWidth(36),
  },
  shortBannerImageTop: {
    position: 'absolute',
    right: actuatedNormalizeWidth(2),
    top: actuatedNormalizeHeight(1),
  },
  textContainer: {
    height: actuatedNormalizeHeight(32),
    marginLeft: actuatedNormalizeWidth(11),
    marginVertical: actuatedNormalizeHeight(28),
    width: actuatedNormalizeWidth(153),
  }
});
