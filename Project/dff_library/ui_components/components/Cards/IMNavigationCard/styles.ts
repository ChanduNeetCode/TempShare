import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale
} from '../../../utils/utility';
import { StyleSheet } from 'react-native';

const styles = () =>
  StyleSheet.create({
    navigationCardStyle: {
      borderBottomLeftRadius: actuatedNormalizeModerateScale(16),
      borderBottomRightRadius: actuatedNormalizeModerateScale(16),
      elevation: 12,
      marginHorizontal: actuatedNormalizeHeight(16),
      padding: actuatedNormalizeHeight(16),
      minHeight: actuatedNormalizeHeight(88),
      width:actuatedNormalizeWidth(328),
      shadowOpacity:0.11,
      shadowColor:'rgb(0,0,0)',
      shadowOffset:{
        width:0,
        height:3
      },
      shadowRadius:12,
    },
  });

export default styles;
