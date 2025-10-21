import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { FontWeight } from '../../../utils/enums';
import { typography,colors } from '../../../atoms';

const sizes = {
  containerScrollingWidth: actuatedNormalizeWidth(30),
  containerWidth: actuatedNormalizeWidth(12),
  itemFontSize: actuatedNormalizeModerateScale(10),
  itemHeight: actuatedNormalizeHeight(15),
  itemScrollFontSize: actuatedNormalizeModerateScale(10),
};

export const styles = StyleSheet.create({
  letterIndexContainer: {
    height: '100%',
    position: 'absolute',
    right: actuatedNormalizeWidth(0),
    top: actuatedNormalizeHeight(0),
    width: sizes.containerWidth,
  },
  letterIndexItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.containerWidth,
  },
  letterIndexList: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  letterIndexLabel: {
    ...typography.LabelSmallMedium,
    color: colors.NeutralGrey110,
  },
  scrollingAnimation: {
    color: colors.White,
    fontSize: actuatedNormalizeModerateScale(10),
    fontWeight: FontWeight._500,
  },
  scrollingLetterIndexContainer: {
    alignItems: 'center',
    backgroundColor: colors.PrimaryOrange100,
    borderBottomStartRadius: sizes.containerWidth,
    borderTopLeftRadius: sizes.containerWidth,
    height: sizes.containerWidth,
    justifyContent: 'center',
    width: sizes.containerWidth,
  },
  selectedLetterIndexLabel: {
    color: colors.PrimaryOrange100,
    fontSize: actuatedNormalizeModerateScale(10),
    fontWeight: FontWeight._500,
  },
});