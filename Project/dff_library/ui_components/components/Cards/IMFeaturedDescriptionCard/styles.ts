import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    alignItems: {
      alignItems: 'flex-end',
      flex: 1,
      marginBottom: actuatedNormalizeHeight(5),
    },
    bottomLeft: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    bottomLeftImgStyle: {
      justifyContent: 'flex-end',
    },
    bottomRightImgStyle: {
      justifyContent: 'flex-end',
    },
    featuredCardStyle: {
      backgroundColor: colors.PastelBlue100,
      borderRadius: actuatedNormalizeWidth(16),
      marginHorizontal: actuatedNormalizeHeight(16),
      minHeight: actuatedNormalizeHeight(88),
      overflow: 'hidden',
    },
    LeftTopStyle: {
      alignItems: 'flex-start',
      flex: 1,
    },
    topLeft: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
    },
    type3CardStyle: {
      backgroundColor: colors.PastelBrown100,
      borderRadius: actuatedNormalizeWidth(8),
      marginHorizontal: actuatedNormalizeHeight(15),
      minHeight: actuatedNormalizeHeight(88),
      width:actuatedNormalizeWidth(328)
    },
  });
export default styles;
