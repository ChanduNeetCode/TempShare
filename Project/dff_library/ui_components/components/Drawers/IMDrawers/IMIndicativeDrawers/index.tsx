import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import style from '../styles';
import { type IMIndicativeDrawersProps } from './types';
import { colors } from '../../../../atoms';
import { SafeAreaView } from 'react-native-safe-area-context';

const IMIndicativeDrawers: React.FC<IMIndicativeDrawersProps> = props => {
  const styles = style();
  const {
    isDisable,
    isLinearGradient,
    isStatusBarTranslucent,
    visible,

    linearGradientColor1 = colors.GradientOrangeStart,
    linearGradientColor2 = colors.GradientOrangeEnd,
    indicativeColor,
    subTitle,
    title,
   
    SubTextStyle,
    TitleStyle,

    closeContent,
    closeContentChild,
    iconfloatStyle,
    modalcontentPropStyle,
    modalTouchableStyleProp,
    modelcontainerPropStyle,
    statuscontentPropStyle,
    titleindicativePropStyle,

    blurContainer,
    childProps,
    indicativeIcon,
    image,

    end={ x: 1, y: 1},
    start={ x: 0, y:  1},

    onClose,
    onCloseModal,
  } = props;

  return (
    <Modal 
    animationType="slide" 
    transparent={true} 
    visible={visible}
    statusBarTranslucent={isStatusBarTranslucent}>
      {blurContainer}
      <TouchableOpacity
        activeOpacity={0}
        style={[styles.modalTouchableStyle, modalTouchableStyleProp]}
        onPress={() => onClose && onClose()}
        disabled={isDisable}
      />
      <SafeAreaView style={[styles.modalContainer, modelcontainerPropStyle]}>
        <View style={[styles.modalContent, modalcontentPropStyle]}>
          <View style={[styles.statusContent, statuscontentPropStyle]}>
          {isLinearGradient?
          <LinearGradient
            colors={[linearGradientColor1, linearGradientColor2]}
            start={start}
            end={end}
            style={[styles.iconFloat,iconfloatStyle]}>
            {indicativeIcon}
          </LinearGradient>
          :
          <View
          style={[
            styles.iconFloat,
            iconfloatStyle,
            { backgroundColor: indicativeColor },
          ]}>
          {indicativeIcon}
        </View>
          }
          </View>

          <View style={[styles.closeContent, closeContent]}>
            <View style={[styles.closeContentChild, closeContentChild]}>
              {onCloseModal && (
                <TouchableOpacity onPress={onCloseModal}>
                  {image}
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View
            style={[styles.titleIndicativeContent, titleindicativePropStyle]}>
            {title && (
              <Text style={[styles.indicativeTitleStyle, TitleStyle]}>
                {title}
              </Text>
            )}
            {subTitle && (
              <Text style={[styles.subTitleStyle, SubTextStyle]}>
                {subTitle}
              </Text>
            )}
          </View>

          {childProps && childProps}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default IMIndicativeDrawers;
