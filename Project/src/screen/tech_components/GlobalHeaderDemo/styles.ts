import { StyleSheet } from 'react-native';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../dff_library/ui_components/utils/utility';

export default StyleSheet.create({
    button:{
      borderRadius:4,
      elevation:3,
      width:actuatedNormalizeWidth(150),
      backgroundColor:"orange",
      padding:actuatedNormalizeHeight(10),
      marginVertical:actuatedNormalizeHeight(10),
      alignItems:"center"
    }, 
    buttonText:{
      color:'white',
      fontWeight:"bold",
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:"column",
      padding: actuatedNormalizeHeight(10),
    },
    heading: {
      fontSize: actuatedNormalizeHeight(24),
      fontWeight: 'bold',
      marginBottom: actuatedNormalizeHeight(20),
    },
    info: {
      fontSize: actuatedNormalizeHeight(12),
      marginTop: actuatedNormalizeHeight(25),
    },
  });
  