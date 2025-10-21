import { StyleSheet } from "react-native";

import {
    actuatedNormalizeHeight,
    actuatedNormalizeModerateScale,
    actuatedNormalizeWidth,
} from '../../../utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';

export const styles = StyleSheet.create({
    button:{ 
        alignItems: 'center', 
        backgroundColor: colors.PrimaryOrange100, 
        borderRadius: actuatedNormalizeModerateScale(40), 
        height: actuatedNormalizeHeight(50), 
        justifyContent: 'center', 
        marginTop: actuatedNormalizeHeight(70),
        width: '50%', 
        marginLeft: actuatedNormalizeHeight(95),
        marginBottom: actuatedNormalizeHeight(150),
    },
    buttonText:{ 
        color: 'white', 
        fontSize: actuatedNormalizeModerateScale(16), 
        fontWeight: FontWeight._500
    },
    centered: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center",
      },
      titleStyle: {
        marginTop: actuatedNormalizeHeight(20), 
        marginBottom: actuatedNormalizeHeight(20), 
        fontWeight: '400',
        fontSize: actuatedNormalizeModerateScale(16), 
      }
})
