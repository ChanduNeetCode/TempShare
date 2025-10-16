import { StyleSheet, Platform } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../utils/utility';
import { colors, typography } from '../../../atoms';
import { FontWeight } from '../../../utils/enums';

export default StyleSheet.create({
  tallStorySubContainerDirectionStyle: {
    flexDirection: 'column',
  },
  storyBannerTextContainer: {
    borderWidth: actuatedNormalizeWidth(0.1),
    height: actuatedNormalizeHeight(40),
    marginLeft: actuatedNormalizeWidth(16),
    marginTop: actuatedNormalizeHeight(48),
    width: actuatedNormalizeWidth(180),
  },
  storyBannerText1: {
    ...typography.ButtonTitleMedium,
    color: colors.White,
  },
  storyBannerText2: {
    ...typography.ButtonTitleMedium,
    color: colors.White,
  },
  storyButtonTextStyle: {
    ...typography.ButtonTitle,
    color: colors._A32713,
    textAlign: 'left',
    fontWeight: FontWeight._700,
  },
  storyButtonContainer: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(25),
    height: actuatedNormalizeHeight(40),
    justifyContent: 'center',
    marginLeft: actuatedNormalizeWidth(16),
    marginTop: actuatedNormalizeHeight(12),
    width: actuatedNormalizeWidth(108),
  },
  progressBar: {
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 196, 174, 0.5)',
    borderColor: 'rgba(255, 196, 174, 0.5)',
    borderRadius: actuatedNormalizeModerateScale(6),
    marginLeft: actuatedNormalizeWidth(8),
  },
  storyContainerStyle: {
    borderRadius: actuatedNormalizeModerateScale(16),
    height: actuatedNormalizeHeight(184),
    overflow: 'hidden',
    width: actuatedNormalizeWidth(320),
  },
  storyBannerProgressContainer: {
    height: actuatedNormalizeHeight(24),
    marginLeft:
      Platform.OS === 'ios'
        ? actuatedNormalizeWidth(8)
        : actuatedNormalizeWidth(4),
    position: 'absolute',
    width: actuatedNormalizeWidth(315),
    zIndex: 1,
  },
  imageDisplay: {
    bottom: actuatedNormalizeHeight(0),
    position: 'absolute',
    right: actuatedNormalizeWidth(0),
  },
  rectangle1: {
    position: 'absolute',
  },
  rectangle2: {
    position: 'absolute',
    right: actuatedNormalizeWidth(-25),
  },
  rectangle3: {
    position: 'absolute',
    right: actuatedNormalizeWidth(-70),
  },
  rectangleContainer: {
    marginTop: actuatedNormalizeHeight(10),
    position: 'absolute',
    right: '35%',
  },
});
