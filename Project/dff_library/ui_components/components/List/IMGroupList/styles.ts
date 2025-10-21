import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'column',
      width: actuatedNormalizeWidth(328),
    },
    main: {
      borderTopLeftRadius: actuatedNormalizeModerateScale(16),
      borderTopRightRadius: actuatedNormalizeModerateScale(16),
      flex: 1,
      width: actuatedNormalizeWidth(328),
    },
    separator: {
      borderColor: colors.PastelAmber100,
      borderWidth: actuatedNormalizeWidth(1),
      marginHorizontal: actuatedNormalizeWidth(10),
    },
    sub: {
      alignItems: 'center',
      borderBottomLeftRadius: actuatedNormalizeModerateScale(16),
      borderBottomRightRadius: actuatedNormalizeModerateScale(16),
      justifyContent: 'center',
      width: actuatedNormalizeWidth(328),
    },
  });

export default styles;
