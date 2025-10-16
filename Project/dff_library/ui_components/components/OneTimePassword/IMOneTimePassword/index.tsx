import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { OtpScreenProps } from './types';
import useOTPStyles from './styles';
import { colors } from '../../../atoms';

const IMOneTimePassword: React.FC<OtpScreenProps> = ({
  otpInputRefs,

  isautoFocus=true,
  isDisable,
  isResendOtpDisabled,
  isStatusBarTranslucent,
  isvisible,

  keyboardVerticalOffset,
  maxLength,

  cursorColor = colors.PrimaryOrange100,
  errorMessage,
  otpnote,
  resendotp,
  successMessage,
  title,
  titleotp,

  keyboardType,

  otptext,

  blurContainer,
  closeimage,
  disableEyeimage,
  eyecross,
  eyeimage,
  resendIcon,
  successImage,

  errorMessageText,
  otpNoteTitle,
  otptimeText,
  otptimeText2,
  resendOtpStle,
  succesText,
  titleOtpStyle,
  titleStyle,

  cancelImage,
  container,
  contentContainer,
  contentContainerStyle,
  eyeIcon,
  keyboardAvoidingStyle,
  messageView,
  modalContainer,
  otpContainer,
  otpView,
  resendContainer,
  scrollviewContainer,
  textInput,

  handleBlurPart,
  handleCancel,
  handleSubmit,
  onChangeText,
  onResendOTP,
}) => {
  const styles = useOTPStyles;
  const [otp, setOtp] = useState<string>('');
  const [showpassord, setShowPassword] = useState(false);
  const [resendTime, setResendTime] = useState(30);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (resendTime > 0) {
      timer = setInterval(() => {
        setResendTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      if (timer) {
        clearInterval(timer);
      }
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [resendTime]);

  const handleOtpChange = (text: string) => {
    onChangeText && onChangeText(text);
    const sanitizedText = text.replace(/\D/g, '').slice(0, maxLength);
    const otpArray = sanitizedText.split('');
    const formattedOTP = otpArray.join('\u00A0');
    setOtp(formattedOTP);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showpassord);
  };

  return (
    <Modal animationType="slide" statusBarTranslucent={isStatusBarTranslucent} transparent={true} visible={isvisible}>
      {blurContainer}
      <TouchableOpacity
        disabled={isDisable}
        onPress={handleBlurPart}
        style={styles.modalTouchableStyle}
      />
      <KeyboardAvoidingView
        behavior={'padding'}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={[styles.keyboardAvoidingStyle, keyboardAvoidingStyle]}>
        <ScrollView
          contentContainerStyle={[
            styles.contentContainerStyle,
            contentContainerStyle,
          ]}
          keyboardShouldPersistTaps="handled">
          <View style={[styles.modalContainer, modalContainer]}>
            <View style={[styles.contentContainer, contentContainer]}>
              <View style={[styles.container, container]}>
                <View style={[styles.scrollviewContainer, scrollviewContainer]}>
                  <Text style={[styles.title, titleStyle]}>
                    {title}
                  </Text>
                  <TouchableOpacity
                    onPress={handleCancel}
                    style={[cancelImage]}>
                    {closeimage}
                  </TouchableOpacity>
                </View>
                <Text
                  style={[
                    styles.otpNoteTitle,
                    otpNoteTitle,
                  ]}>
                  {otpnote}
                </Text>
                <View style={[styles.otpView, otpView]}>
                  <Text
                    style={[
                      styles.titleOtpStyle,
                      titleOtpStyle,
                    ]}>
                    {titleotp}
                  </Text>
                  <TouchableOpacity
                    disabled={isResendOtpDisabled}
                    style={[styles.resendContainer, resendContainer]}
                    onPress={onResendOTP}>
                    <Text
                      style={[
                        styles.resendOtpStyle,
                        resendOtpStle,
                      ]}>
                      {resendotp}
                    </Text>
                    {resendIcon}
                  </TouchableOpacity>
                </View>

                <View style={[styles.otpContainer, otpContainer]}>
                  <TextInput
                    autoFocus={isautoFocus}
                    blurOnSubmit={false}
                    contextMenuHidden={true}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    onChangeText={handleOtpChange}
                    ref={otpInputRefs}
                    style={[styles.otpInput, textInput]}
                    secureTextEntry={!showpassord}
                    selectionColor={cursorColor}
                    onSubmitEditing={handleSubmit}
                    value={otp.replace(/\s/g, '')}
                  />
                  <TouchableOpacity
                    style={[styles.eyeIcon, eyeIcon]}
                    onPress={toggleShowPassword}>
                    {otp.length == 0
                      ? disableEyeimage
                      : showpassord == true
                        ? eyecross
                        : eyeimage}
                  </TouchableOpacity>
                </View>
                <View style={[styles.messageView, messageView]}>
                  {successMessage && successImage}
                  <Text
                    style={[
                      styles.succesText,
                      succesText,
                    ]}>
                    {successMessage}
                  </Text>
                  {errorMessage && (
                    <Text
                      style={[
                        styles.errorMessageText,
                        errorMessageText,
                      ]}>
                      {errorMessage}
                    </Text>
                  )}
                </View>
                {typeof otptext === 'string' ? (
                  <Text style={[styles.otptimeText, otptimeText]}>
                    {otptext}{' '}
                    <Text
                      style={[
                        styles.otptimeText2,
                        otptimeText2,
                      ]}>
                      00:{resendTime < 10 ? `0${resendTime}` : resendTime}
                    </Text>
                  </Text>
                ) : (
                  otptext
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default IMOneTimePassword;
