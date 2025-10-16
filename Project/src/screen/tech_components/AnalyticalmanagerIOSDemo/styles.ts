import { StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';

export default StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: colors.GradientOrangeEnd,
        borderRadius: 10,
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        width: 200,
      },
      container:{
        marginBottom:150
      },
      text:{
         color: colors.White
      },
      viewContainer:{
        alignItems: 'center', 
        justifyContent: 'center'
      }
});

