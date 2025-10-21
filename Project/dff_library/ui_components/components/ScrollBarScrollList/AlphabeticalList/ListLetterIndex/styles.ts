import { StyleSheet } from 'react-native';

import colors from '../../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../utils/utility';
import { FontWeight } from '../../../../utils/enums';

const sizes = {
  containerWidth: actuatedNormalizeWidth(12),
  containerScrollingWidth: actuatedNormalizeWidth(30),
  itemHeight: actuatedNormalizeHeight(15),
  itemFontSize: actuatedNormalizeModerateScale(10),
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
    color: colors.NeutralGrey110,
    fontSize: actuatedNormalizeModerateScale(10),
    fontWeight: FontWeight._500,
  },

  scrollingLetterIndexContainer: {
    alignItems: 'center',
    backgroundColor: colors.PrimaryOrange100,
    borderTopLeftRadius: sizes.containerWidth,
    borderBottomStartRadius: sizes.containerWidth,
    justifyContent: 'center',
    height: sizes.containerWidth,
    width: sizes.containerWidth,
  },

  scrollingAnimation: {
    color: colors.White,
    fontSize: actuatedNormalizeModerateScale(10),
    fontWeight: FontWeight._500,
  },

  selectedLetterIndexLabel: {
    color: colors.PrimaryOrange100,
    fontSize: actuatedNormalizeModerateScale(10),
    fontWeight: FontWeight._500,
  },
});
