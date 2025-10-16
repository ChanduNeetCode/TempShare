import { StyleSheet } from 'react-native';

import {colors,typography} from '../../../atoms'
import { actuatedNormalizeWidth,actuatedNormalizeHeight, actuatedNormalizeModerateScale } from '../../../utils/utility';

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      columnGap:actuatedNormalizeWidth(8),
    },
    textStyle:{
      ...typography.BodySemiBold2,
      color:colors.NeutralGrey150
    },
    touchableStyle: {
      justifyContent: 'center',
      alignItems:'center',
      minHeight:actuatedNormalizeWidth(32),
      minWidth:actuatedNormalizeWidth(32),
      borderRadius:actuatedNormalizeWidth(16)
    },
  });
export default styles;
