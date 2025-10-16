import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { colors } from '../../../atoms/colors';

const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    flexPartOne: {
      flex: 0.13,
    },
    flexPartTwo: {
      flex: 0.134,
    },
    headerLeftBtnStyle: {
      alignSelf: 'center',
      height: actuatedNormalizeHeight(32),
      width: actuatedNormalizeWidth(32),
    },
    headerActionBtnStyle: {
      alignSelf: 'center',
      height: actuatedNormalizeHeight(32),
      width: actuatedNormalizeWidth(32),
    },
    headerMenuBtnStyle: {
      alignSelf: 'center',
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
      paddingTop: actuatedNormalizeHeight(40),
      paddingBottom: actuatedNormalizeHeight(20),
    
    },
    titleStyle: {
      color: colors.White,
      // flexWrap: 'wrap',
      minHeight: actuatedNormalizeHeight(40),
      paddingLeft: actuatedNormalizeWidth(5),
      textAlignVertical: 'center',
    },
    uppersubcontainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingTop:actuatedNormalizeHeight(15)


    },
  });
export default styles;
