import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { ICBankLogo, ICExtraUPI, ICExtraUnion, ICGeneralClose, ICGeneralLink, ICGeneralLinkOrange, ICLineAnyMobileNumber, ICLineBill, ICLineCoins, ICLineScanAnyQRCodeOrange, ICLineShop } from '../../../../atoms/icons';
import { actuatedNormalizeHeight, actuatedNormalizeModerateScale, actuatedNormalizeWidth } from '../../../../utils/utility';
import styles from './styles';
import { type IMIntroductoryDrawersProps } from './types';
import { colors } from '../../../../atoms';
import { IMOutlinedButton } from '../../../Buttons/index';

const IMIntroductoryDrawers: React.FC<IMIntroductoryDrawersProps> = props => {

    const {
        isBlurOnSubmit,
        isContextMenuHidden,
        isDisable,
        isStatusBarTranslucent,
        isVisible,

        cursorColor = colors.PrimaryOrange100,
        keyboardType = 'numeric',
        linearGradientColor1 = colors.PastelBrown100,
        linearGradientColor2 = colors.White,
        maxLength = 4,
        poweredByText,
        subTitle,
        title ,

        backGroundImage1Style,
        backGroundImage2Style,
        centerIconStyle,
        closeIconStyle,
        leftBottomImageStyle,
        leftMiddleImageStyle,
        leftTopImageStyle,
        modalContentStyle,
        modalTouchableStyleProp,
        modelcontainerStyleProp,
        rightBottomImageStyle,
        rightButtonStyle = styles.rightButtonStyle,
        rightMiddleImageStyle,
        rightTopImageStyle,
        textInputContainerStyle,
        textInputStyles,
        upiStyle,

        poweredButtonTextStyle,
        subTitleTextStyle,
        titleTextStyle,

        backgroundImage1 = <ICExtraUnion />,
        backgroundImage2 = <ICExtraUnion />,
        blurContainer,
        centerIcon = <ICExtraUPI />,
        closeIcon=<ICGeneralClose/>,
        leftBottomIconImage = <ICLineShop width={actuatedNormalizeWidth(22)} height={actuatedNormalizeHeight(22)} />,
        leftMiddleIconImage = <ICLineBill width={actuatedNormalizeWidth(20)} height={actuatedNormalizeHeight(20)} />,
        leftTopIconImage = <ICBankLogo width={actuatedNormalizeWidth(20)} height={actuatedNormalizeHeight(20)} />,
        rightBottomIconImage = <ICLineScanAnyQRCodeOrange width={actuatedNormalizeWidth(24)} height={actuatedNormalizeHeight(24)}/>,
        rightButtonComponent,
        rightMiddleIconImage = <ICLineCoins width={actuatedNormalizeWidth(24)} height={actuatedNormalizeHeight(24)} />,
        rightTopIconImage = <ICLineAnyMobileNumber width={actuatedNormalizeWidth(30)} height={actuatedNormalizeHeight(30)} />,
        upiIconImage = <ICExtraUPI />,

        end={ x: 1, y: 1},
        start={ x: 0, y:  1},

        onPressBlurPart,
        handleCloseIcon,
        handleonChangeText,
        handleRightButtonPress,
        onSubmit,
    } = props;

    const rightButton = () => {
        return (
            <IMOutlinedButton
                disabled={false}
                underlayColor='transparent'
                onPress={()=>handleRightButtonPress&&handleRightButtonPress()}
                buttonStyle={rightButtonStyle}
                titleRecv={'Claim'}
                widthSmall={actuatedNormalizeWidth(91)}
                styleText={{ color: colors.PrimaryOrange100 }}
                type={'small'}
                leftIcon={< ICGeneralLinkOrange width={16} height={16} />}
            />
        )
    }
    return (
        <Modal animationType="slide" statusBarTranslucent={isStatusBarTranslucent} transparent={true} visible={isVisible}>
            {blurContainer}
            <TouchableOpacity
                disabled={isDisable}
                style={[styles.modalTouchableStyle, modalTouchableStyleProp]}
                onPress={onPressBlurPart}
            />
            <KeyboardAvoidingView
                behavior={'padding'}
                style={[{ backgroundColor: 'rgba(0,0,0,0.5)' }, modelcontainerStyleProp]}>
                <LinearGradient
                    colors={[linearGradientColor1, linearGradientColor2]}
                    start={start}
                    end={end}
                    style={[styles.linearGradientStyle, modalContentStyle]}>
                    <View style={[styles.backGroundImage1, backGroundImage1Style]}>
                        {backgroundImage1}
                    </View>
                    <View style={[styles.backGroundImage2, backGroundImage2Style]} >
                        {backgroundImage2}
                    </View>
                    <View style={[styles.centerIcon, centerIconStyle]}>
                        {centerIcon}
                    </View>
                    <View style={[styles.leftTopImageStyle, leftTopImageStyle]}>
                        {leftTopIconImage}
                    </View>
                    <View style={[styles.leftMiddleImageStyle, leftMiddleImageStyle]}>
                        {leftMiddleIconImage}
                    </View>
                    <View style={[styles.leftBottomImageStyle, leftBottomImageStyle]}>
                        {leftBottomIconImage}
                    </View>
                    <View style={[styles.rightTopImageStyle, rightTopImageStyle]}>
                        {rightTopIconImage}
                    </View>
                    <View style={[styles.rightMiddleImageStyle, rightMiddleImageStyle]}>
                        {rightMiddleIconImage}
                    </View>
                    <View style={[styles.rightBottomImageStyle, rightBottomImageStyle]}>
                        {rightBottomIconImage}
                    </View>
                    <TouchableOpacity style={[styles.closeIcon,closeIconStyle]}
                    onPress={handleCloseIcon}
                    >
                        {closeIcon}
                    </TouchableOpacity>
                    <Text style={[styles.titleStyle, titleTextStyle]}>{title}</Text>
                    <Text style={[styles.subTitleStyle, subTitleTextStyle]}>{subTitle}</Text>
                    <View style={[styles.textInputContainerStyle, textInputContainerStyle]}>
                        <TextInput
                            blurOnSubmit={isBlurOnSubmit}
                            contextMenuHidden={isContextMenuHidden}
                            keyboardType={keyboardType}
                            maxLength={maxLength}
                            onChangeText={handleonChangeText}
                            style={[styles.textInputStyles, textInputStyles]}
                            selectionColor={cursorColor}
                            onSubmitEditing={onSubmit}
                        />
                        {rightButtonComponent || rightButton()}

                    </View>
                    <Text style={[styles.poweredByStyle, poweredButtonTextStyle]}>{poweredByText}</Text>
                    <View style={[styles.upiStyle, upiStyle]}>
                        {upiIconImage}
                    </View>
                </LinearGradient>
            </KeyboardAvoidingView>

        </Modal>
    );
};
export default IMIntroductoryDrawers;
