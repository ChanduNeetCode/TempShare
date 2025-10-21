import { StyleSheet } from 'react-native';

import { actuatedNormalizeWidth,actuatedNormalizeHeight } from '../../../utils/utility';
import { colors,typography } from '../../../atoms';

const styles = () =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row', 
      height:actuatedNormalizeHeight(20),
      width:actuatedNormalizeWidth(328),
    },
    touchableStyle: {
      alignItems: 'center',
      borderRadius: actuatedNormalizeWidth(30),
      height: actuatedNormalizeWidth(30),
      justifyContent: 'center',
      width: actuatedNormalizeWidth(30),
    },
    TitleText: {
      ...typography.BodySemiBold2,
      color:colors.NeutralGrey150,
    },
  });
export default styles;
