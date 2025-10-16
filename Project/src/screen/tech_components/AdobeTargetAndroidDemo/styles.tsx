import { StyleSheet } from "react-native";

import {
    actuatedNormalizeHeight,
    actuatedNormalizeModerateScale,
    actuatedNormalizeWidth,
} from '../../../utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';

export const styles = StyleSheet.create({
    backButton:{
        height: actuatedNormalizeHeight(10),
        marginLeft: actuatedNormalizeWidth(15),
        marginTop: actuatedNormalizeHeight(10),
        width: actuatedNormalizeWidth(10),
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.PrimaryOrange100,
        borderRadius: actuatedNormalizeModerateScale(40),
        height: actuatedNormalizeHeight(50),
        justifyContent: 'center',
        marginTop: actuatedNormalizeHeight(70),
        marginLeft: actuatedNormalizeHeight(95),
        marginBottom: actuatedNormalizeHeight(150),
        width: '50%',
    },
    buttonText: {
        color: 'white',
        fontSize: actuatedNormalizeModerateScale(16),
        fontWeight: FontWeight._500
    },
    centered: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    crossButtonStyle: {
        backgroundColor: colors.GradientOrangeStart,
        height: actuatedNormalizeHeight(50),
        width: '100%',
    },
    titleStyle: {
        fontSize: actuatedNormalizeModerateScale(16),
        fontWeight: '400',
        marginBottom: actuatedNormalizeHeight(20),
        marginTop: actuatedNormalizeHeight(20),  
    },
    webViewStyle: {
        height: actuatedNormalizeHeight(800),
        width: '100%', 
    },
})
