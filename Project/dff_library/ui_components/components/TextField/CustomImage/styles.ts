import { StyleSheet } from 'react-native';
import colors from '../../../atoms/colors';
import { actuatedNormalizeModerateScale } from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    container: {
      paddingRight: actuatedNormalizeModerateScale(10)
    },
    containerViewStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    RightButtonStyle: {
      color: colors.NeutralGrey140,
      fontFamily: 'Mulish-SemiBold',
      fontSize: actuatedNormalizeModerateScale(12),
    },
  });

export default styles;
