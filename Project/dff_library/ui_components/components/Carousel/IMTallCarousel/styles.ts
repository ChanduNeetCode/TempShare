import { Platform, StyleSheet } from 'react-native';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import colors from '../../../atoms/colors';

export default StyleSheet.create({
  activeDotStyle: {
    backgroundColor: colors.GradientOrangeEnd,
    borderRadius: actuatedNormalizeWidth(5),
    height: actuatedNormalizeWidth(9),
    marginHorizontal: actuatedNormalizeWidth(8),
    width: actuatedNormalizeWidth(9),
  },
  dotsViewStyling: {
    justifyContent: 'center',
    alignItems:'center',
    paddingTop:5,
    height:20
  },
  inactiveDotStyle: {
    backgroundColor: 'grey',
    borderRadius: actuatedNormalizeWidth(5),
    height: actuatedNormalizeWidth(9),
    marginHorizontal: actuatedNormalizeWidth(8),
    width: actuatedNormalizeWidth(9),
  },
  tallCarouselImageBottom: {
    bottom: actuatedNormalizeHeight(10),
    left: actuatedNormalizeWidth(2),
    position: 'absolute',
  },
  tallCarouselImageTop: {
    position: 'absolute',
    right: actuatedNormalizeWidth(2),
    top: actuatedNormalizeHeight(10),
  },
  tallWidthItem1LinearContainer: {
    borderRadius: actuatedNormalizeWidth(16),
    height: actuatedNormalizeHeight(136),
    width: actuatedNormalizeWidth(242),
  },
});
