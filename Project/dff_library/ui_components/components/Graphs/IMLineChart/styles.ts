import { StyleSheet } from 'react-native';

import { colors } from '../../../atoms';
import { actuatedNormalizeHeight, actuatedNormalizeWidth } from '../../../utils/utility'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingLeft: actuatedNormalizeWidth(12),
        paddingBottom: actuatedNormalizeHeight(80),
        // paddingTop:actuatedNormalizeHeight(50),
        height: actuatedNormalizeHeight(300),
        width: actuatedNormalizeWidth(330),
    },
    labelContainer:{
        paddingHorizontal: actuatedNormalizeWidth(14),
        paddingVertical: actuatedNormalizeHeight(6),
        borderRadius: 4,
        height: actuatedNormalizeHeight(24), width: actuatedNormalizeWidth(70),
        backgroundColor: colors.PrimaryOrange100, justifyContent: 'center'
    },
    labelTextStyle:{ textAlign: 'center', color: colors.White },
    pointerContainer: {
        height: actuatedNormalizeHeight(90),
        width: actuatedNormalizeWidth(100),
        justifyContent: 'center',
    },
    selectedXValue: {
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.PrimaryOrange100,
        height: actuatedNormalizeHeight(24),
        justifyContent: 'center',
        marginRight: actuatedNormalizeWidth(50),
        width: actuatedNormalizeWidth(34),
    },
    xValueViewStyle: {
        marginRight: actuatedNormalizeWidth(50),
        width: actuatedNormalizeWidth(26),
        height: actuatedNormalizeHeight(16)
    },
    xDataContainer: {
        bottom: actuatedNormalizeHeight(0),
        flexDirection: 'column',
        height: actuatedNormalizeHeight(35),
        position: 'absolute',
        width: "104%",
    }
});
export default styles;
