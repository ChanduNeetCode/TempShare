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
    width: actuatedNormalizeWidth(9),
  },
  shortCarouselComponentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  shortCarouselContainer: {
    alignItems: 'center',
    borderRadius: actuatedNormalizeWidth(16),
    justifyContent: 'center',
    minHeight: actuatedNormalizeHeight(88),
    width: actuatedNormalizeWidth(242),
    overflow: 'hidden',
  },
  shortCarouselImageBottom: {
    bottom: actuatedNormalizeHeight(2),
    left: actuatedNormalizeWidth(2),
    position: 'absolute',
  },
  shortCarouselImageTop: {
    position: 'absolute',
    right: actuatedNormalizeWidth(2),
    top: actuatedNormalizeHeight(1),
  },
});
