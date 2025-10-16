import { StyleSheet } from "react-native";

import {
    actuatedNormalizeHeight,
    actuatedNormalizeWidth,
} from '../../../utils/utility';
import {colors,typography} from '../../../../dff_library/ui_components/atoms';

export const styles = StyleSheet.create({
    imageStyle:{
        height:actuatedNormalizeHeight(180),
        width:actuatedNormalizeWidth(300)
    },
    imageStyle1:{
        width:actuatedNormalizeWidth(300)
    },
    mainContainer:{ 
        alignItems: 'center',
        // flex: 1, 
        marginTop:actuatedNormalizeHeight(20),
        rowGap: actuatedNormalizeHeight(10),
        justifyContent: 'center', 
    },
    textStyle:{
        ...typography.ButtonSmall,
        color:colors.Black,
        height:actuatedNormalizeHeight(250),
        width:actuatedNormalizeWidth(330),
    }
})
