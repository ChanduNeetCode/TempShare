import React, { FC } from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableOpacity,
} from 'react-native';

import style from '../styles';
import { type IMEmptyDrawersProps } from './types';

const IMEmptyDrawers: FC<IMEmptyDrawersProps> = props => {
  const styles = style();
  const {
    isDisable,
    visible,

    modalContentStyle,
    modelcontainerStyleProp,
    modalTouchableStyleProp,

    blurContainer,
    childProps,

    onClose,
    onPressBlurPart = () => {
      onClose && onClose();
    },
  } = props;

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      {blurContainer}
      <TouchableOpacity
        disabled={isDisable}
        style={[styles.modalTouchableStyle, modalTouchableStyleProp]}
        onPress={onPressBlurPart}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={modelcontainerStyleProp}>
        <Animated.View style={modalContentStyle}>
          {childProps && childProps}
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
export default IMEmptyDrawers;
