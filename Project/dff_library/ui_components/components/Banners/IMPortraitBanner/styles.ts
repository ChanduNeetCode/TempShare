import { StyleSheet } from 'react-native';

import {
    actuatedNormalizeHeight,
    actuatedNormalizeWidth,
    actuatedNormalizeModerateScale
} from '../../../utils/utility';
import { colors ,typography} from '../../../atoms';

export default StyleSheet.create({
    borderStyle: {
        borderBottomLeftRadius: actuatedNormalizeModerateScale(20),
    },
    headerContainerStyle: {
        alignItems: 'center',
        gap: actuatedNormalizeHeight(2.14),
        height: actuatedNormalizeHeight(21.36),
        width: actuatedNormalizeWidth(190.07),
    },
    image1:{
        bottom: actuatedNormalizeHeight(0) ,
        position: 'absolute', 
    },
    image2:{
        bottom: actuatedNormalizeHeight(115) ,
        left: actuatedNormalizeWidth(70), 
        position: 'absolute', 
    },
    image3:{
        bottom: actuatedNormalizeHeight(0), 
        left: actuatedNormalizeWidth(70) ,
        position: 'absolute',
    },
    image4:{
        bottom: actuatedNormalizeHeight(70) ,
        left: actuatedNormalizeWidth(210),
        position: 'absolute', 
    },
    popOverPortraitButtonContainer: {
        alignItems: 'center',
        borderRadius: actuatedNormalizeModerateScale(25),
        height: actuatedNormalizeHeight(40),
        justifyContent: 'center',
        width: actuatedNormalizeWidth(108),
    },
    popOverPortraitContainerForText: {
        alignItems: 'center',
        flexDirection: 'column',
        height: actuatedNormalizeHeight(126),
        marginBottom: actuatedNormalizeHeight(10),
        marginTop: actuatedNormalizeHeight(54),
        overflow: 'hidden',
        width: actuatedNormalizeWidth(226.37),
    },
    popOverLinearGradientPortrait: {
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: actuatedNormalizeModerateScale(24),
        height: actuatedNormalizeHeight(584),
        marginBottom: 40,
        overflow:'hidden',
        width: actuatedNormalizeWidth(328),
    },
    popOverPortraitImageStyle: {
        bottom: 0,
        height: actuatedNormalizeHeight(318),
        position: 'absolute',
        top:actuatedNormalizeHeight(278),
        width: actuatedNormalizeWidth(328),
    },
    popOverPortraitICICIText: {
        ...typography.HeadingLabel3,
        color: colors._1F1F1F,
    },
    popOverPortraitSubHeaderContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        height: actuatedNormalizeHeight(87.56),
        marginTop: actuatedNormalizeHeight(17.08),
        width: actuatedNormalizeWidth(226.37),
    },
    popOverPortraitSubText: {
        ...typography.HeadingLabel5,
        color: colors._212121,
        paddingTop:actuatedNormalizeHeight(5),
    },
    popOverPortraitTouchableTextStyle: {
        ...typography.ButtonTitle,
        color: colors.White,
    },
    popOverPortraitUnderLine: {
        backgroundColor: colors._212121,
        height: actuatedNormalizeHeight(2.14),
        width: actuatedNormalizeWidth(183.66),
    },
    popOverPortraitZeroText: {
        ...typography.HeadingLabel4,
        color: colors._212121,
        height:actuatedNormalizeHeight(45),
        paddingTop:actuatedNormalizeHeight(6),
    }
});
