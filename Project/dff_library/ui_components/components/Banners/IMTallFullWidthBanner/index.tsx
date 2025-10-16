import React, { FC } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { BannersProps } from './types';
import colors from '../../../atoms/colors';
import { MoneyLending } from '../../../atoms/icons';
import styles from './styles';
import { STRINGS } from '../utils/Constants';
import { actuatedNormalizeHeight, actuatedNormalizeWidth } from '../../../utils/utility';

const IMTallFullWidthBanner: FC<BannersProps> = props => {
  const {
    linearGradientColorEnd,
    linearGradientColorStart,

    containerStyleProps,

    componentToDisplay,

    onPress,
  } = props;
  const renderTallFullWidth = () => {
    return (
      <TouchableOpacity
        style={[styles.tallFullWidthContainer, containerStyleProps]}
        onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[
            linearGradientColorStart || colors.GradientGoldStart,
            linearGradientColorEnd || colors.GradientGoldStart,
          ]}
          style={[styles.tallFullWidthContainer, containerStyleProps]}>
          {componentToDisplay || (
            <>
              <View style={styles.tallFullWidthItem1TextContainer}>
                <Text style={styles.tallFullWidthTextStyle}>
                  {STRINGS.str_message}
                </Text>
              </View>
              <View style={styles.tallFullWidthButtonContainer}>
                <Text style={styles.tallFullWidthButtonText}>
                  {STRINGS.str_button_title}
                </Text>
              </View>
              <View style={styles.tallFullWidthImageStyle}>
                {<MoneyLending height={actuatedNormalizeHeight(140)} width={actuatedNormalizeWidth(140)} />}
              </View>
            </>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return renderTallFullWidth();
};

export default IMTallFullWidthBanner;
