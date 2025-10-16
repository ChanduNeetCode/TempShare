import { StyleSheet } from 'react-native';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
    actuatedNormalizeModerateScale,
    actuatedNormalizeWidth,
    actuatedNormalizeHeight,
} from '../../../../src/utils/utility';

export const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: colors.PrimaryOrange100,
        borderRadius: actuatedNormalizeModerateScale(5),
        padding: actuatedNormalizeModerateScale(10),
        justifyContent: 'center',
        marginTop:actuatedNormalizeHeight(20),
        width: actuatedNormalizeWidth(170),
    },
    button: {
        color: colors.White,
    },
    container: {
        flex: 1,
    }
})