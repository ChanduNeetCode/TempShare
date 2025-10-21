import { StyleSheet } from 'react-native';
import colors from '../../../atoms/colors';
import {
    actuatedNormalizeHeight,
    actuatedNormalizeModerateScale,
    actuatedNormalizeWidth,
} from '../../../utils/utility';
import typography from '../../../atoms/typography';

export default StyleSheet.create({
    amountContainer: {
        alignItems: 'flex-end',
        height: actuatedNormalizeHeight(36),
        justifyContent: 'flex-end',
        marginLeft: actuatedNormalizeWidth(45),
        position: 'absolute',
        width: actuatedNormalizeWidth(124),
    },
    amountSubtitleStyle: {
        ...typography.BodyRegular3,
    },
    amountTextStyle: {
        ...typography.BodySemiBold2,
    },
    amountView: {
        alignItems: 'flex-end',
        flexDirection: 'column',
        gap: actuatedNormalizeWidth(4)
    },
    badgeContainerStyle: {
        marginVertical: actuatedNormalizeHeight(12),
    },
    badgeViewStyle: {
        borderRadius: actuatedNormalizeModerateScale(10),
        paddingHorizontal: actuatedNormalizeWidth(10),
        paddingVertical: actuatedNormalizeHeight(10),
        width: actuatedNormalizeWidth(296),
    },
    cardChildrenStyle: {
        justifyContent: 'flex-start',
        marginLeft: 0
    },
    cardsContainer: {
        flexDirection: 'column'
    },
    cardStyle: {
        flexDirection: 'row',
        marginTop: actuatedNormalizeHeight(12)
    },
    dashStyle: {
        height: actuatedNormalizeHeight(16),
        marginLeft: actuatedNormalizeWidth(44)
    },
    iconStyle: {
        alignSelf: 'center',
        height: actuatedNormalizeHeight(24),
        left: 0,
        width: actuatedNormalizeWidth(24)
    },
    leftBorderStyle: {
        left: 0,
        marginTop: 0,
        width: actuatedNormalizeWidth(4),
    },
    mainCardStyle: {
        elevation: 0,
        overflow: "hidden",
        shadowOffset:
        {
            width: 0,
            height: 0
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        width: actuatedNormalizeWidth(328),
        marginLeft: actuatedNormalizeWidth(16)
    },
    rightIconStyle: {
        marginLeft: actuatedNormalizeWidth(94)
    },
    subtitleStyle: {
        ...typography.BodyRegular3,
        color: colors.NeutralGrey110
    },
    titleContainer: {
        marginLeft: actuatedNormalizeWidth(12)
    },
    titleStyle: {
        ...typography.BodySemiBold2,
        color: colors.NeutralGrey150
    }

});
