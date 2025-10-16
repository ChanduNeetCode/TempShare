import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import {typography,colors} from '../../../atoms';

const styles = () =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors.White,
      borderColor: colors.White,
      flexDirection: 'row',
      shadowColor: colors.Black,
      shadowOffset: {
        height: actuatedNormalizeHeight(1),
        width: actuatedNormalizeWidth(1),
      },
      shadowOpacity: 0.8,
      shadowRadius: actuatedNormalizeModerateScale(2),
    },
    listItemLabel: {
      ...typography.BodySemiBold2,
      color: colors.NeutralGrey150,
      flex: 1,
     
    },
    renderViewContainer: {
      alignItems: 'flex-end',
      flex: 1,
      height: actuatedNormalizeHeight(24),
      justifyContent:'center',
      width: actuatedNormalizeWidth(24),
    },
    renderViewContainerleft: {
      justifyContent: 'flex-start',
    },
    separator: {
      borderColor: colors.NeutralGrey60,
      borderWidth: actuatedNormalizeModerateScale(1),
      marginHorizontal: actuatedNormalizeWidth(15),
    },
    viewContainer: {
      alignItems:'center',
      flex: 1,
      flexDirection: 'row',
      marginHorizontal: actuatedNormalizeWidth(16),
      paddingVertical: actuatedNormalizeWidth(12), 
      
    },
  });
export default styles;
