import { StyleSheet } from 'react-native';

import { colors, typography } from '../../../atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

export default StyleSheet.create({
  chipContainerStyle: {
    height: actuatedNormalizeHeight(16),
    bottom:actuatedNormalizeHeight(2),
  },
  containedCircularStyle: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderColor: colors.PrimaryOrange100,
    borderRadius: actuatedNormalizeModerateScale(36),
    borderWidth: 0.8,
    flexDirection: 'column',
    height: actuatedNormalizeHeight(36),
    justifyContent: 'space-around',
    width: actuatedNormalizeWidth(36),
  },
  containedTextStyle: {
    ...typography.BodyRegular3,
    color: colors.Black,
    textAlign: 'center',
    top: actuatedNormalizeHeight(4),
  },
  containedTileView: {
    alignItems: 'center',
    // height: actuatedNormalizeHeight(72),
    width: actuatedNormalizeWidth(70),
  },
  containedViewStyle: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: actuatedNormalizeModerateScale(16),
  },
  containedViewWithBG: {
    alignSelf: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(16),
    minHeight: actuatedNormalizeHeight(120),
    paddingHorizontal: actuatedNormalizeWidth(12),
    paddingVertical: actuatedNormalizeHeight(24),
    width: actuatedNormalizeWidth(304),
  },
  descriptionStyle: {
    fontSize: 13,
    fontWeight: '200',
    marginLeft: actuatedNormalizeWidth(20),
    marginTop: actuatedNormalizeHeight(-14),
  },
  headStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  horizontalViewWithBG: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderColor: colors.NeutralGrey60,
    borderRadius: actuatedNormalizeModerateScale(16),
    borderWidth: actuatedNormalizeModerateScale(1),
    elevation: 6,
    flexDirection: 'row',
    minHeight: actuatedNormalizeHeight(60),
    paddingHorizontal: actuatedNormalizeWidth(16),
    shadowColor: colors.Black,
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 1 },
    width: actuatedNormalizeWidth(156),
  },
  horizontalViewWithOutBG: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: actuatedNormalizeHeight(60),
    paddingHorizontal: actuatedNormalizeWidth(16),
    width: actuatedNormalizeWidth(156),
  },
  horizontalTextStyle: {
    ...typography.BodyRegular3,
    color: colors.Black,
    marginLeft: actuatedNormalizeWidth(8),
    textAlignVertical: 'center',
    width: actuatedNormalizeWidth(70),
  },
  iconStyle: {
    margin: actuatedNormalizeHeight(20),
  },
  stackedMainBGViewStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    height: actuatedNormalizeHeight(84),
    justifyContent: 'space-between',
    width: actuatedNormalizeWidth(88),
    marginTop: actuatedNormalizeHeight(16)
  },
  stackedWithBG: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeWidth(30),
    elevation: 12,
    flexDirection: 'column',
    height: actuatedNormalizeWidth(60),
    justifyContent: 'space-around',
    shadowColor: colors._F9BC7E,
    shadowOffset: {
      width: actuatedNormalizeWidth(0),
      height: actuatedNormalizeHeight(4),
    },
    shadowOpacity: 0.32,
    shadowRadius: actuatedNormalizeModerateScale(12),
    width: actuatedNormalizeWidth(60),
  },
  titleStyle: {
    ...typography.BodySemiBold3,
    color: colors.Black,
    textAlign: 'center',
    marginVertical: actuatedNormalizeHeight(10),
  },
  titleStyles: {
    marginLeft: -actuatedNormalizeWidth(14),
    fontWeight: '400',
    fontSize: 18,
  },
  tooltipContainerStyle: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderColor: colors.NeutralGrey60,
    borderRadius: actuatedNormalizeModerateScale(10),
    borderWidth: actuatedNormalizeModerateScale(1),
    height: actuatedNormalizeModerateScale(20),
    position: 'absolute',
    right: actuatedNormalizeWidth(0),
    top: -actuatedNormalizeHeight(5),
    width: actuatedNormalizeModerateScale(20),
    zIndex: 1,
  }
});
