import { StyleSheet } from 'react-native';

import { window } from './constants';
import { actuatedNormalizeHeight, actuatedNormalizeWidth, actuatedNormalizeModerateScale } from '../../../utils/utility';
import { colors } from '../../../../ui_components/atoms';

const PAGE_WIDTH = window.width;

export default StyleSheet.create(
    {
        carouselStyles: {
            height: PAGE_WIDTH / 2,
            width: PAGE_WIDTH,
        },
        centerTopUI: {
            flex: 1,
            borderRadius: actuatedNormalizeModerateScale(28)
        },
        centerUIMainContainer: {
            alignSelf: 'center',
            position: 'absolute',
            marginTop: -actuatedNormalizeHeight(20),
            zIndex: -10,
            backgroundColor:'transparent'
        },
        centerUIStyle: {
            borderRadius: actuatedNormalizeModerateScale(40),
            height: actuatedNormalizeHeight(120),
            padding: 2,
            width: actuatedNormalizeWidth(56),   
        },
        firstSlider: {
            top:actuatedNormalizeHeight(80),
            transform: [{ scaleY: -1 }],
            zIndex: 100,
        },

        linearGradient: {
            color: '#AC4B0D',
        },
        lowerStar: {
            alignItems: 'center',
            backgroundColor: colors.White,
            borderColor: '#F3975D',
            borderRadius: actuatedNormalizeModerateScale(6),
            borderWidth: 1,
            height: actuatedNormalizeHeight(12),
            justifyContent: 'center',
            marginLeft: actuatedNormalizeWidth(49),
            marginTop: actuatedNormalizeHeight(80),
            position: 'absolute',
            width: actuatedNormalizeWidth(12),

        },
        mainContainer: {
            height: actuatedNormalizeHeight(140),
            width: '100%',
        },
        secondSlider: {
            transform: [{ scaleY: -1 }],
            zIndex: 1,
        },
        sideStar: {
            borderColor: 'black',
            borderRadius: actuatedNormalizeModerateScale(6),
            borderWidth: 1,
            height: actuatedNormalizeHeight(12),
            alignItems: 'center',
            backgroundColor: colors.White,
            justifyContent: 'center',

        },
        sliderMainContainer: {
            flex: 1,
            flexDirection: 'row',
        },
        sliderTextStyles: {
            color: '#525252',
            fontSize: 14,
            fontWeight: '700',
            transform: [{ scaleY: -1 }],
        },
        sliderTextView: {
            alignContent: 'center',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            overflow: 'hidden',
            flexDirection: 'row',
        },
        star: {
            height:9.6,
            width: 9.6,
        },
        upperStar: {
            alignItems: 'center',
            backgroundColor: colors.White,
            borderColor: '#F3975D',
            borderRadius: actuatedNormalizeModerateScale(6),
            borderWidth: 1,
            height: actuatedNormalizeHeight(12),
            justifyContent: 'center',
            marginLeft: actuatedNormalizeWidth(49),
            marginTop: actuatedNormalizeHeight(25),
            position: 'absolute',
            width: actuatedNormalizeWidth(12),
        },
        
    }
)