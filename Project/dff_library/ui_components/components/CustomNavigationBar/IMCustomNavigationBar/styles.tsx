import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { colors ,typography} from '../../../atoms';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    headerLeftBtnStyle: {
      alignContent:'center',
      alignItems:'center',
      height: actuatedNormalizeHeight(32),
      justifyContent:'center',
      width: actuatedNormalizeWidth(32),
    },
    headerActionBtnStyle: {
      height: actuatedNormalizeHeight(32),
      width: actuatedNormalizeWidth(32),
    },
    headerMenuBtnStyle: {
      height: actuatedNormalizeHeight(32),
      width: actuatedNormalizeWidth(32),
    },
    lowersubcontainer: {
      flexDirection: 'row',
      padding: actuatedNormalizeHeight(50),
    },
    linearGradient: {
      borderBottomLeftRadius: actuatedNormalizeWidth(15),
      borderBottomRightRadius: actuatedNormalizeWidth(15),
      flex: 1,
      flexDirection: 'column',
      paddingBottom: actuatedNormalizeHeight(20),
      paddingHorizontal:actuatedNormalizeWidth(16),
      paddingTop: actuatedNormalizeHeight(40),
    },
    mainContainerStyle:{
      alignContent:'center',
      alignItems:'center',
      columnGap:actuatedNormalizeModerateScale(16),
      flexDirection:'row',
      justifyContent:'center'  
    },
    titleViewStyle:{
      alignContent: 'center',
      flex: 1, 
      justifyContent: 'center',
    },
    titleStyle: {
      ...typography.HeadingBold3,
      color: colors.White,
      flexWrap: 'wrap',
    },
  });
export default styles;
