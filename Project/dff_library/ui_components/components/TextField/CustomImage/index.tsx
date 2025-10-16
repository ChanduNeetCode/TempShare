import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { type IMCustomImageProps } from './types';
import useStyles from './styles';

const CustomImage: React.FC<IMCustomImageProps> = props => {
  const {
    clickable,
    disableIcon,
    textButton,

    textButtonName,

    onPress,
    textIconStyle,

    image
  } = props;
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {clickable ? (
        <TouchableOpacity onPress={onPress} disabled={disableIcon}>
          {textButton ? (
            <View style={styles.containerViewStyle}>
              <Text
                numberOfLines={1}
                style={[styles.RightButtonStyle, textIconStyle]}>
                {' '}
                {textButtonName}
              </Text>
              {image}
            </View>
          ) : (
            image
          )}
        </TouchableOpacity>
      ) : (
        image
      )}
    </View>
  );
};
export default CustomImage;
