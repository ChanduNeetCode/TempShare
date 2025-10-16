import { StyleSheet } from 'react-native';
import colors from '../../../atoms/colors';
import typography from '../../../atoms/typography';
import {
    actuatedNormalizeHeight,
    actuatedNormalizeModerateScale,
    actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = StyleSheet.create({
    dotsStyle:{
        backgroundColor: colors.Black,
        borderRadius: actuatedNormalizeModerateScale(4),
        height: actuatedNormalizeHeight(8),
        width: actuatedNormalizeWidth(8),
    },
    dotsViewStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: actuatedNormalizeModerateScale(5)
    },
    mainContainerStyle: {
        borderRadius: actuatedNormalizeModerateScale(16),
        columnGap:actuatedNormalizeModerateScale(12),
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: actuatedNormalizeHeight(64),
        paddingHorizontal: actuatedNormalizeWidth(16)
    },
    leftIconStyle: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: actuatedNormalizeModerateScale(12),
        justifyContent: 'center',
        height: actuatedNormalizeHeight(40),
        width: actuatedNormalizeWidth(40),
    },
    rightIconStyle: {
        justifyContent: 'center',
    },
    subTitleStyle:{
        ...typography.BodySemiBold2,
    },
    textContainerStyle: {
        alignItems: 'flex-start',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        rowGap: actuatedNormalizeModerateScale(2)
    },
    titleStyle: {
        ...typography.ButtonSmall,
        color: colors.NeutralGrey150
    }
});
export default styles;
