import { StyleSheet } from 'react-native';

import { actuatedNormalizeWidth, actuatedNormalizeHeight } from '../../../utils/utility';
import { colors } from '../../../atoms';

const styles = StyleSheet.create({
    averageTextStyle: {
        position: 'absolute',
        zIndex: 1,
        overflow: 'visible',
        bottom: actuatedNormalizeHeight(-16),
        left: actuatedNormalizeWidth(58),
        transform :[{
            rotate:'180deg'
        }],
        color:colors.PrimaryOrange100
    },
    dottedLineContainer: {
        borderStyle: 'dashed',
        borderBottomWidth: 1,
        height: 0,
        width: actuatedNormalizeWidth(240),
        marginLeft: actuatedNormalizeWidth(58),
        marginTop: actuatedNormalizeHeight(150),
        zIndex: 1,
        overflow: 'visible',
        borderColor: "rgba(219, 94, 16, 1)"
    },
    svgContainer: {
        transform: [{ rotate: '180deg' }],
        alignSelf: 'flex-end',
        zIndex: 2
    },
    subTextStyle: {
        marginLeft: actuatedNormalizeWidth(30)
    },
    textContainer: {
        height: actuatedNormalizeHeight(20),
        marginTop: actuatedNormalizeHeight(-10),
        width: actuatedNormalizeWidth(300),
    },
    xValueViewStyle: {
        marginRight: actuatedNormalizeWidth(11),
        height: actuatedNormalizeHeight(16),
        width: actuatedNormalizeWidth(26),
    },
    xValueContainerStyle: {
        alignItems: 'flex-end',
        height: actuatedNormalizeHeight(15),
        position: 'absolute',
        right: actuatedNormalizeWidth(50),
        top: actuatedNormalizeHeight(20),
    },
});
export default styles;