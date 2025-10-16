import { StyleSheet } from 'react-native';

import { actuatedNormalizeWidth } from '../../../utils/utility';
import { colors,typography } from '../../../atoms';

const styles = () =>
  StyleSheet.create({
    container: {
      alignItems: 'center', 
      columnGap:actuatedNormalizeWidth(4),
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: actuatedNormalizeWidth(10),
      width:actuatedNormalizeWidth(328),
    },
    titleViewStyle:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      ...typography.BodySemiBold2,
      color:colors.NeutralGrey150,
    },
    touchableStyle:{
      alignItems: 'center',
      borderRadius: actuatedNormalizeWidth(30),
      height: actuatedNormalizeWidth(30),
      justifyContent: 'center',
      width: actuatedNormalizeWidth(30),
    },
    viewStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default styles;
