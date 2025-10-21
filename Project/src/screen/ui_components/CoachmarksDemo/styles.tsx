import { StyleSheet } from 'react-native';


import {colors,typography} from '../../../../dff_library/ui_components/atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../utils/utility';

const styles = () =>
  StyleSheet.create({
    imageStyle:{
      borderBottomColor: colors.Black,
      width: actuatedNormalizeWidth(224),
      height: actuatedNormalizeHeight(100),
      backgroundColor: colors.PastelBrown100,
      borderTopLeftRadius: actuatedNormalizeModerateScale(16),
      borderTopRightRadius: actuatedNormalizeModerateScale(16),
      alignItems: 'center',
      flex: 1,
      paddingBottom:20
    },
    titleStyle:{
      ...typography.AccordionTitleRegular,
      color:colors.NeutralGrey140
    }
   
    
  });
export default styles;
