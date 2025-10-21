import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import {  typography } from '../../../atoms/index';

const PieChartStyles = () =>
  StyleSheet.create({
    colorBox: {
      borderRadius: actuatedNormalizeWidth(4),
      height: actuatedNormalizeHeight(16),
      marginRight: actuatedNormalizeWidth(5),
      width: actuatedNormalizeWidth(16),
    },
    
    container: {
      flexDirection: 'row',
      marginHorizontal:actuatedNormalizeWidth(16),
      height:actuatedNormalizeHeight(160),
    },

    dataContainer: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      flex: 0.5,
      flexDirection: 'column',
      
    },
    itemStyle:{
      alignContent:'center',
      alignItems:'center',
      flexDirection: 'row',
      justifyContent:'center',
    },
    legendItem: {
      // elevation: 2,
      alignItems: 'center',
      borderRadius: actuatedNormalizeModerateScale(5),
      flexDirection: 'row',
      marginRight: actuatedNormalizeWidth(15),
      maxWidth: actuatedNormalizeWidth(62),
      padding: actuatedNormalizeModerateScale(5),
    
    },
    legendLabel: {
      ...typography.LabelSmallRegular,
      alignSelf: 'center',
      color: colors.NeutralGrey150,
      marginTop: actuatedNormalizeHeight(8),
      maxWidth: actuatedNormalizeWidth(60),
    },

    legendRow: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginBottom: actuatedNormalizeHeight(10),
      maxWidth: actuatedNormalizeWidth(170),
    },

    legendValue: {
      ...typography.BodySemiBold2,
      color: colors.NeutralGrey140,
    },
    selectedItem: {
      backgroundColor: colors.PastelAmber100,
      opacity:1
    },
  });
export default PieChartStyles;
