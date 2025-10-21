import React, { useEffect, useState } from 'react';
import { Modal, ScrollView, TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';
import typography from '../../../atoms/typography';
import { AccountDrawerProps } from './types';
import { actuatedNormalizeWidth } from '../../../utils/utility';
import IMPrimaryButton from '../../Buttons/IMButtons/IMPrimaryButton';

const IMAccountSelectDrawer: React.FC<AccountDrawerProps> = props => {
  const {
    blurContainer,

    isCloseIcon = true,
    isDisable,
    isLeftIcon,
    isRightIcon,
    isStatusBarTranslucent,
    isVisible,

    closeIcon,
    container,

    titleStyle,

    onClickBlur,
    onClickButton,
    handleClose,

    buttonName = '',
    primaryTitleText = '',
    primaryTitleTextStyle,
    title,

    buttonStyle,
    closeIconStyle,
    modalContainer,
    modalTouchableStyle,
    modalViewStyle,
    scrollViewStyle,
    secondaryTitleStyle,

    widthOfButton = actuatedNormalizeWidth(250),
  } = props;

  const [modalVisible, setModalVisible] = useState(isVisible);

  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);
  const handleOnClose = () => {
    if (handleClose) handleClose()
    else
    setModalVisible(!modalVisible); 
    
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      statusBarTranslucent={isStatusBarTranslucent}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      {blurContainer}
      <TouchableOpacity
        disabled={isDisable}
        style={[styles.modalTouchableStyle, modalTouchableStyle]}
        onPress={onClickBlur}
      />
      <View style={[styles.modalContainer, modalContainer]}>
        <View style={[styles.modalView, modalViewStyle]}>
          <Text style={primaryTitleTextStyle}>{primaryTitleText}</Text>
          <View style={[styles.secondaryTitleStyle, secondaryTitleStyle]}>
            <Text
              style={[styles.textstyle, titleStyle, typography.BodySemiBold1]}>
              {title}
            </Text>
            {isCloseIcon && (
              <TouchableOpacity onPress={handleOnClose} style={closeIconStyle}>
                {closeIcon}
              </TouchableOpacity>
            )}
          </View>
          <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={[
              styles.contentContainerStyle,
              scrollViewStyle,
            ]}>
            <View style={{ width: 380 }}>{container}</View>
          </ScrollView>
          <IMPrimaryButton
            titleRecv={buttonName}
            type="large"
            widthLarge={widthOfButton}
            buttonStyle={buttonStyle || styles.buttonStyle}
            styleText={styles.buttonText}
            leftIcon={isLeftIcon}
            rightIcon={isRightIcon}
            onPress={onClickButton}
          />
        </View>
      </View>
    </Modal>
  );
};

export default IMAccountSelectDrawer;
