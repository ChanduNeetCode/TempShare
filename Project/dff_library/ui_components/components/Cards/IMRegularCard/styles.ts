import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    regularCardStyle1: {
      borderColor: colors.NeutralGrey60,
      borderRadius: actuatedNormalizeHeight(12),
      width:actuatedNormalizeWidth(328),
      borderStyle: 'solid',
      shadowColor: 'rgb(0.837,0.844,0.872)',
      shadowOpacity: 0.08,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 4 },
      elevation: 5,
    },
  });

export default styles;
