import React, { FC } from 'react';
import { Modal, View, Text, ActivityIndicator } from 'react-native';

import useStyles from './styles';
import typography from '../../../atoms/typography';
import { LoaderProps } from './types';

const IMLoader: FC<LoaderProps> = props => {
  const {
    activityIndicatorColor,
    activityIndicatorSize = 'large',
    loaderText = 'Loading..',

    showLoadingIndicator,

    textStyle,

    blurEffect,

    loaderContainerStyle,
    loaderViewStyle,
  } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showLoadingIndicator}
      presentationStyle={'fullScreen'}>
      {blurEffect && blurEffect}
      <View style={useStyles.transparentStyle} />
      <View
        style={
          loaderContainerStyle
            ? loaderContainerStyle
            : useStyles.loadercontainer
        }>
        <View style={loaderViewStyle ? loaderViewStyle : useStyles.loaderView}>
          <ActivityIndicator
            size={activityIndicatorSize}
            color={activityIndicatorColor}
          />
          <Text style={[textStyle, typography.SubTitleRegular1]}>
            {loaderText}
          </Text>
        </View>
      </View>
    </Modal>
  );
};
export default IMLoader;
