import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import { actuatedNormalizeHeight, actuatedNormalizeModerateScale, actuatedNormalizeWidth } from "../../../utils/utility";
import { FontWeight } from '../../../utils/enums';

const styles = () =>
    StyleSheet.create({
        bottomContainer: {
            backgroundColor: colors.CoolGrey110,
            borderBottomLeftRadius: actuatedNormalizeModerateScale(16),
            borderBottomRightRadius: actuatedNormalizeModerateScale(16),
            flexDirection: 'row',
            height: actuatedNormalizeHeight(64),
            width: actuatedNormalizeWidth(328),
        },
        containerSeperator: {
            backgroundColor: colors.PastelAmber100,
            borderColor: colors.PastelAmber100,
            borderWidth: actuatedNormalizeWidth(1),
            height: actuatedNormalizeHeight(0),
            width: actuatedNormalizeWidth(328),
        },
        data: {
            fontSize: actuatedNormalizeModerateScale(16),
            fontWeight: FontWeight._600,
            letterSpacing: actuatedNormalizeModerateScale(0.4)
        },
        dataSeperatorLine: {
            backgroundColor: colors.PastelAmber100,
            borderColor: colors.PastelAmber100,
            borderWidth: actuatedNormalizeWidth(1),
            height: actuatedNormalizeHeight(24),
            marginLeft: actuatedNormalizeWidth(110),
            marginTop: actuatedNormalizeHeight(14),
            position: "absolute",
            width: actuatedNormalizeWidth(0),
        },
        dataText: {
            fontSize: actuatedNormalizeModerateScale(16),
            fontWeight: FontWeight._400,
            marginLeft: actuatedNormalizeWidth(4)
        },
        dataView: {
            flexDirection: "row",
            marginLeft: actuatedNormalizeWidth(20),
            marginRight: actuatedNormalizeWidth(40),
            marginTop: actuatedNormalizeHeight(15)
        },
        days: {
            fontSize: actuatedNormalizeModerateScale(12),
            fontWeight: FontWeight._400,
            letterSpacing: actuatedNormalizeModerateScale(0.25),
            lineHeight: actuatedNormalizeHeight(16),
        },
        date: {
            color: colors.NeutralGrey130,
            fontSize: actuatedNormalizeModerateScale(14),
            fontWeight: FontWeight._500,
            lineHeight: actuatedNormalizeHeight(16),
        },
        dateText: {
            color: colors.NeutralGrey130,
            fontSize: actuatedNormalizeModerateScale(10),
            fontWeight: FontWeight._400,
            letterSpacing: actuatedNormalizeModerateScale(1.2),
            lineHeight: actuatedNormalizeHeight(16),
        },
        dateTextView: {
            flexDirection: 'column',
            gap: actuatedNormalizeModerateScale(4),
            marginLeft: actuatedNormalizeWidth(12),
            marginTop: actuatedNormalizeHeight(12),
        },
        dateView: {
            flexDirection: 'row',
            gap: actuatedNormalizeWidth(8),
            justifyContent: 'space-between',
            marginTop: actuatedNormalizeHeight(4),
        },
        dropdownRowStyle: {
            height: '100%',
            width: '100%',
        },
        dropdownRowTextStyle: {
            alignSelf: 'stretch',
            color: colors.NeutralGrey140,
            paddingTop: actuatedNormalizeHeight(4),
            textAlign: 'left',
        },
        dropdownStyle: {
            backgroundColor: colors.CoolGrey100,
            borderColor: colors.PastelAmber100,
            borderRadius: actuatedNormalizeModerateScale(8),
            borderWidth: actuatedNormalizeWidth(1),
            elevation: 3,
            marginLeft: actuatedNormalizeWidth(15),
            marginTop: actuatedNormalizeHeight(270),
            overflow: 'visible',
            width: actuatedNormalizeWidth(156),
            shadowColor: colors._B8BBC7,
            shadowOffset: {
                width: actuatedNormalizeWidth(0),
                height: actuatedNormalizeHeight(4),
            },
            shadowOpacity: 0.14,
        },
        elementStyle: {
            flex: 1,
            flexDirection: 'row',
        },
        flatListRowContainer: {
            height: actuatedNormalizeHeight(28),
            marginTop: actuatedNormalizeHeight(12),
        },
        flatListStyle: {
            marginLeft: actuatedNormalizeWidth(16),
            marginRight: actuatedNormalizeWidth(16),
        },
        icon: {
            position: 'absolute',
            marginLeft: actuatedNormalizeWidth(288),
            alignSelf: "center"

        },
        ItemSeparatorComponentStyle: {
            backgroundColor: colors.PastelAmber100,
            height: actuatedNormalizeHeight(1),
        },
        mainContainer: {
            borderColor: colors.NeutralGrey60,
            borderRadius: actuatedNormalizeModerateScale(16),
            borderWidth: actuatedNormalizeWidth(1),
            height: actuatedNormalizeHeight(116),
            width: actuatedNormalizeWidth(328),
        },
        rowDetailsWithImageStyle: {
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
        },
        rowDetailsWithImageTextStyle: {
            paddingLeft: actuatedNormalizeWidth(8),
        },
        topContainer: {
            backgroundColor: colors.White,
            borderTopLeftRadius: actuatedNormalizeModerateScale(16),
            borderTopRightRadius: actuatedNormalizeModerateScale(16),
            height: actuatedNormalizeHeight(52),
            width: actuatedNormalizeWidth(328),
        },
        touchable: {
            backgroundColor: 'transpaent',
            height: '100%'
        },



    });

export default styles;
