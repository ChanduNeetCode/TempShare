import { StyleSheet } from 'react-native';

import colors from '../../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    dropdownOverlayView: {
      backgroundColor: 'transparent',
    },
    shadow: {
      elevation: 10,
      shadowColor: colors.Black,
      shadowOffset: {
        width: actuatedNormalizeWidth(0),
        height: actuatedNormalizeHeight(6),
      },
      shadowOpacity: 0.1,
      shadowRadius: 10,
    
    },
  });

export default styles;
