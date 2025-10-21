import React from 'react';
import { Modal, Text, View } from 'react-native';

import { BasicMicroInteractionTypes } from '../../BasicMicroInteractions/utils/enum';
import IMBasicMicroInteractions from '../../BasicMicroInteractions/IMBasicMicroInteractions';
import { ProcessLoadersProps } from './types';
import useStyles from './styles';

const IMProcessLoader: React.FC<ProcessLoadersProps> = props => {
  const {
    isBackgroundTransparent,
    isStatusBarTranslucent,
    isShowLoadingIndicator,

    animationType='slide',
    
    subTitle,
    title,

    subTitleStyle,
    titleStyle,

    blurEffect,
    subTitleContainer,
    titleContainer,

    loaderContainerStyle,
    parentViewStyle,
    transparentStyle
  } = props;

  const styles = useStyles();

  return isBackgroundTransparent ? (
    <Modal
      animationType={animationType}
      presentationStyle={'fullScreen'}
      transparent={true}
      statusBarTranslucent={isStatusBarTranslucent}
      visible={isShowLoadingIndicator} >
      {blurEffect && blurEffect}
      <View style={[styles.transparentStyle,transparentStyle]}/>
      <View style={loaderContainerStyle || styles.loadercontainer}>
        <IMBasicMicroInteractions
          count={3}
          isAutoPlay={true}
          isLoop={true}
          style={styles.logoStyle}
          type={BasicMicroInteractionTypes.IManLoader}
        />
      </View>
    </Modal>
  ) : (
    <View style={[styles.parentView, parentViewStyle]}>
      <IMBasicMicroInteractions
        type={BasicMicroInteractionTypes.IManLoader}
        count={3}
        isAutoPlay={true}
        isLoop={true}
        style={styles.logoStyle}
      />
      {titleContainer || (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      )}
      {subTitleContainer || (
        <Text style={[styles.subTitle, subTitleStyle]}>{subTitle}</Text>
      )}
    </View>
  );
};
export default IMProcessLoader;
