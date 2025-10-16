import React, { useState, useRef, useEffect } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { IMMpinDrawerProps } from './types';
import { colors } from '../../../../atoms';
import styles from './styles';
import { actuatedNormalizeHeight } from '../../../../utils/utility';
import { ICBankLogoWithName, ICClose, ICGeneralDisabledShow, ICGeneralHide, ICGeneralShow } from '../../../../atoms/icons';
import IMRegularCards from '../../../Cards/IMRegularCard';
import { regularInfo } from '../../../Cards/IMRegularCard/types';

const IMMpinDrawer: React.FC<IMMpinDrawerProps> = ({
    isDisable,
    isErrorText,
    isStatusBarTranslucent,
    isVisible,

    cardHeight = actuatedNormalizeHeight(162),
    maxLength = 4,

    cursorColor = colors.PrimaryOrange100,
    errorMessage ,
    linearGradientColor1 = colors.GradientOrangeStart,
    linearGradientColor2 = colors.GradientOrangeEnd,
    title ,
    mpinText,

    errorMsgTextStyle,
    mpinTextStyle,
    titleTextStyle,
    textInputStyle,

    bankLogoStyles,
    closeIconStyles,
    contentContainerStyle,
    contentStyle,
    eyeIconStyle,
    keyboardAvoidingStyle,
    linearGradientStyle,
    mainContainerStyle,
    modalTouchableStyle,
    otpContainerStyle,
    titleContainerStyle,

    bankLogo = <ICBankLogoWithName />,
    blurContainer,
    closeimage = <ICClose width={20} height={20} />,
    content,
    disableEyeimage = <ICGeneralDisabledShow />,
    eyecross = <ICGeneralHide />,
    eyeimage = <ICGeneralShow />,

    handleBlurPart,
    handleCloseIcon,
    onSubmit,
    onChange
}) => {

    const [otp, setOtp] = useState<string>('');
    const otpInputRefs = useRef<TextInput>(null);
    const [showpassord, setShowPassword] = useState(false);

    useEffect(() => {
        if (otpInputRefs.current) {
            setTimeout(() => otpInputRefs.current?.focus(), 100);
        }
    }, []);

    const handleOtpChange = (text: string) => {
        onChange && onChange(text);
        const sanitizedText = text.replace(/\D/g, '').slice(0, maxLength);
        const otpArray = sanitizedText.split('');
        const formattedOTP = otpArray.join('\u00A0');
        setOtp(formattedOTP);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showpassord);
    };

    return (
        <Modal animationType="slide" statusBarTranslucent={isStatusBarTranslucent} transparent={true} visible={isVisible}>
            {blurContainer}
            <TouchableOpacity
                 disabled={isDisable}
                style={[styles.modalTouchableStyle, modalTouchableStyle]}
                onPress={handleBlurPart}
            />
            <KeyboardAvoidingView
                behavior={'padding'}
                style={[styles.keyboardAvoidingStyle, keyboardAvoidingStyle]}>
                <ScrollView contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}
                    keyboardShouldPersistTaps="handled">
                    <View style={[styles.mainContainerStyle, mainContainerStyle]}>
                        <IMRegularCards
                            regularCardStyleProps={styles.regularCardStyle}
                            cardHeight={cardHeight}
                            regular={regularInfo.WhiteOutline}
                            children={
                                <View >
                                    <View style={[styles.bankLogoStyles, bankLogoStyles]}>{bankLogo}</View>
                                    <Text style={[styles.mpinStyle, mpinTextStyle]}>{mpinText}</Text>
                                    <View style={[styles.otpContainer, otpContainerStyle]}>
                                        <TextInput
                                            blurOnSubmit={false}
                                            contextMenuHidden={true}
                                            keyboardType={'numeric'}
                                            maxLength={maxLength}
                                            onChangeText={handleOtpChange}
                                            ref={otpInputRefs}
                                            style={[styles.otpInput, textInputStyle]}
                                            secureTextEntry={!showpassord}
                                            selectionColor={cursorColor}
                                            value={otp.replace(/\s/g, '')}
                                            onSubmitEditing={() => {
                                                onSubmit && onSubmit();
                                                Keyboard.dismiss();
                                            }}
                                        />

                                        <TouchableOpacity
                                            style={[styles.eyeIcon, eyeIconStyle]}
                                            onPress={toggleShowPassword}>
                                            {otp.length == 0
                                                ? disableEyeimage
                                                : showpassord == true
                                                    ? eyecross
                                                    : eyeimage}
                                        </TouchableOpacity>
                                    </View>
                                    {isErrorText && <Text style={[styles.errorMsgTextStyle, errorMsgTextStyle]}>{errorMessage} </Text>}
                                </View>
                            }
                        />
                        <LinearGradient
                            colors={[linearGradientColor1, linearGradientColor2]}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={[styles.linearGradientStyle, linearGradientStyle]}>
                            <View style={[styles.titleContainer, titleContainerStyle]}>
                                <Text style={[styles.titleStyle, titleTextStyle]}>{title}</Text>
                                <TouchableOpacity onPress={handleCloseIcon} style={[styles.closeIconStyles, closeIconStyles]}>
                                    {closeimage}
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                        <View style={[styles.contentStyle, contentStyle]}>
                            {content}
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </Modal>
    );
};

export default IMMpinDrawer;