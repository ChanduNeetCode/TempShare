import { StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
  actuatedNormalizeHeight,
} from '../../../../src/utils/utility';

export default StyleSheet.create({
    dropdownContainer:{
        alignItems: "center", 
        top: actuatedNormalizeHeight(10)
    },
    mainContainer:{
        backgroundColor:colors.White,
        height: '100%' 
    },
    mainDropdown:{
        alignItems: 'center', 
        marginVertical: actuatedNormalizeHeight(30)
    }
});
