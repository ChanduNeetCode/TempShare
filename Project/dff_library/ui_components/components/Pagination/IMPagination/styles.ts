import { StyleSheet } from 'react-native';
 
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { colors, font,typography } from '../../../atoms';
 
const styles = () =>
  StyleSheet.create({
    countStyle:{
      alignItems: 'center',
      borderColor: 'white',
      borderRadius: 5,
      borderWidth:actuatedNormalizeWidth(1),
      flexDirection: 'row',
      height:actuatedNormalizeHeight(30),
      justifyContent: 'center',
      margin:actuatedNormalizeHeight(10),
      width:actuatedNormalizeWidth(30),
    },
    containerStyle:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    countTxtStyle:{
     ...typography.SubTitleRegular1
  
    },
    dotStyle:{
       paddingRight:actuatedNormalizeWidth(10),
       paddingLeft: actuatedNormalizeWidth(10),
       textAlign: 'center', 
    },
    listStyle:{
      alignItems: 'center',
      flex: 0.9,
      justifyContent: 'center',
    }
  });
export default styles;