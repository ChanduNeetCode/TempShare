import React, {useState } from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Errorprops } from './type';

const IMErrorAlertDrawer:React.FC<Errorprops> = props => {
  const {
    title,
    description,
    isSelect,
    isVisible,

    buttonProps,
    blurContainer,
    childProps,
    closeIcon,
    errorIcon,

    styleDescriptionView,
    styleCenteredView,
    styleCenteredMainView,
    styleErrorViewStyle,
    styleErrorMainStyle,
    styleErrorCircleStyle,
    styleTitleView,

    onPress,
    closeModal,

    styleTitleStyle,
    styleDescriptionTextStyle,
  } = props;

  const [enable, setEnable] = useState(isSelect);
  const [isModal, setIsModal] = useState(true);

  const handleChipPress = () => {
    setEnable(!enable);
    if (onPress) onPress();
  };

  return (
    <View style={[styles.centeredView, styleCenteredView]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsModal(!isModal);
        }}>
        {blurContainer}
        <TouchableOpacity
          style={styles.modalTouchableStyle}
          onPress={() => closeModal(false)}
        />
        <View style={[styles.centeredMainView, styleCenteredMainView]}>
          <View style={[styles.errorMainStyle, styleErrorMainStyle]}>
            <View style={[styles.errorViewStyle, styleErrorViewStyle]}>
              <View style={[styles.errorCircleStyle, styleErrorCircleStyle]}>
                {errorIcon}
              </View>
            </View>
            {closeIcon}
            <View style={[styles.titleView, styleTitleView]}>
              <Text style={[styles.titleStyle, styleTitleStyle]}>{title}</Text>
            </View>
            <View style={[styleDescriptionView, styles.descriptionView]}>
              <Text
                style={[
                  styles.descriptionTextStyle,
                  styleDescriptionTextStyle,
                ]}>
                {description}
              </Text>
            </View>
            {childProps}
            <TouchableOpacity onPress={handleChipPress}>
              {buttonProps}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default IMErrorAlertDrawer;
